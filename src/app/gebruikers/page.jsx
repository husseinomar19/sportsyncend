'use client';
import { useState, useEffect ,FormEvent} from 'react';
import Cookies from 'universal-cookie';
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from '../firebase';
const cookies = new Cookies();

export default function Gebruiker() {
    const [isauth, setAuth] = useState(false);
    const [userNaam, setUserNaam] = useState('');
    const [userImg, setUserImg] = useState('');
    const [posts, setPosts] = useState([]);
    const [display, setDisplay] = useState(false);

    useEffect(() => {
        const tokenNaam = cookies.get("user_naam");
        const userImg = cookies.get("user_img");
        const token = cookies.get("user_token"); 

        if (token) {
            setUserNaam(tokenNaam);
            setUserImg(userImg);
            setAuth(true);
        }
    }, []);

    // Get docs from Firebase
    useEffect(() => {
        const getPosts = async () => {
            const querySnapshot = await getDocs(collection(db, "content"));
            const postsData = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setPosts(postsData);
        };

        getPosts();
    }, []);

    const handleLike = async (postId, currentLikes) => {
        const newLikeCount = currentLikes + 1;
        const postRef = doc(db, "content", postId);

        try {
            await updateDoc(postRef, {
                like: newLikeCount
            });

            // Update local state
            setPosts(prevPosts =>
                prevPosts.map(post =>
                    post.id === postId ? { ...post, like: newLikeCount } : post
                )
            );
        } catch (error) {
            console.error("Error updating likes: ", error);
        }
    };

    const handleOpmerkingen = async (event, postId) => {
        event.preventDefault();
        const form = event.target;
        const opmerking = form.elements.namedItem('opmerking').value.trim(); // Trim to remove leading/trailing spaces
    
        if (!opmerking) {
            // Handle empty comment submission (optional)
            console.error("Comment cannot be empty");
            return;
        }
    
        const postRef = doc(db, "content", postId);
    
        try {
            await updateDoc(postRef, {
                opmerking: opmerking
            });
    
            // Update local state or fetch updated data if needed
            // For example:
            // Refetch posts or update local state to reflect the new comment
    
            console.log("Comment submitted successfully:", opmerking);
            // Optionally reset the form or close the comment section
            setDisplay(false);
            form.reset(); // Reset form fields
    
        } catch (error) {
            console.error("Error updating comments: ", error.message);
            // Handle error: show error message to the user or retry logic
        }
    };
    
   
    return (
        <>
            <header id="home_hero">
                <div className="head">
                    <img src="/logoklien.png" alt="zoeken" />
                    <div className="samen">
                        <p>Samen sporten, samen groeien!</p>
                        <span className="span_een"></span>
                        <span className="span_twee"></span>
                    </div>
                    <div className="header_user">
                        <a href=""><img src="/chat.png" alt="chat" /></a>
                        <a href="/posten"><img src="/posten_img.png" alt="posten" /></a>
                        <div className="user_titel">
                            {isauth ? (
                                <>
                                    <h4>{userNaam}</h4>
                                    <img className='user_inlog_img' src={userImg} alt="User" />
                                </>
                            ) : (
                                <h4>Not logged in</h4>
                            )}
                        </div>
                    </div>
                </div>
                <div className="logo_gebruiker">
                    <a href="/"><img src="/logo.png" alt="logo" /></a>
                </div>
            </header>

            <div className="Posten">
                {posts.map(post => (
                    <div key={post.id} className="posten_items">
                        <div className="user_naam">
                            <img src={post.userFoto || "usericon.png"} alt="user" />
                            <div className="user_naam_titel">
                                <h4>{post.displayName}</h4>
                                <p>{new Date(post.createdAt.seconds * 1000).toLocaleTimeString()}</p>
                            </div>
                        </div>
                        <div className="post_teskt">
                            <p>{post.post_titel}</p>
                        </div>
                        <div className="post_img">
                            <img src={post.post_img} alt="post" />
                        </div>
                        <div className="post_like">
                            <p>{post.like} Likes</p>
                            <p>opmerkingen</p>
                        </div>
                        <div className="post_likes">
                            <div className="like" onClick={() => handleLike(post.id, post.like)}>
                                <img src="/like.png" alt="like" />
                                <p>Vind ik leuk</p>
                            </div>
                            <div className="like"  onClick={() => setDisplay(true)}>
                                <img src="/opmerking.png" alt="comment" />
                                <p>opmerkingen</p>
                                <form className='opmerkingen' style={{ display: display ? 'block' : 'none' }}
                                  onSubmit={(event) => handleOpmerkingen(event, post.id)}
                                >
                                    <img src="/pijl.png" alt="pijl" className="arrow-left" onClick={() => setDisplay(false)}/> 
                                    <input type="text" placeholder='opmerking'name='opmerking'/>
                                    <input type="submit" value="Reageren" />
                                </form>
                            </div>
                            <div className="like">
                                <img src="/delen.png" alt="share" />
                                <p>delen</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


          
        </>
    );
}
