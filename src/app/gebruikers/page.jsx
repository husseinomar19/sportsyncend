'use client';
import { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
const cookies = new Cookies();



export default function Gebruiker(){
const [isauth, setAuth] = useState(false);

const [userNaam, setUserNaam] = useState('');
const [userImg, setUserImg] = useState('');

useEffect(() => {
  const tokenNaam = cookies.get("user_naam");
  const userImg = cookies.get("user-img"); 
  const token = cookies.get("user_token"); // Corrected cookie name

  if (token) {
    setUserNaam(tokenNaam);
    setUserImg(userImg);
    setAuth(true);
  }
}, []);
    return(
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
                  <a href=""><img src="/chat.png" alt="" /></a>
                  <a href="/posten"><img src="/posten_img.png" alt="" /></a>

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

            <div className="posten_items">

                <div className="user_naam">
                    <img src="usericon.png" alt="user" />
                    <div className="user_naam_titel">
                        <h4>Hussein Omar</h4>
                        <p>20 m</p>
                    </div>
                </div>

                <div className="post_teskt">
                    <p>💪 Ontketen je potentieel in de sportschool! 💥 Word sterker, fitter en gezonder. Doe mee! #GymLife 🏋️‍♂️</p>
                </div>
        
               <div className="post_img">
                  <img src="homeimg.png" alt="user" />
               </div>

               <div className="post_like">
                  <p>100 Like</p>
                  <p>20 opmerkingen</p>
               </div>


               <div className="post_likes">
                <div className="like">
                    <img src="/like.png" alt="" />
                    <p>Vind ik leuk</p>
                </div>
                <div className="like">
                    <img src="/opmerking.png" alt="" />
                    <p>opmerkingen</p>
                </div>
                <div className="like">
                    <img src="/delen.png" alt="" />
                    <p>delen</p>
                </div>
               </div>

            </div>

            <div className="posten_items">

<div className="user_naam">
    <img src="usericon.png" alt="user" />
    <div className="user_naam_titel">
        <h4>Hussein Omar</h4>
        <p>20 m</p>
    </div>
</div>

<div className="post_teskt">
    <p>💪 Ontketen je potentieel in de sportschool! 💥 Word sterker, fitter en gezonder. Doe mee! #GymLife 🏋️‍♂️</p>
</div>

<div className="post_img">
  <img src="homeimg.png" alt="user" />
</div>

<div className="post_like">
  <p>100 Like</p>
  <p>20 opmerkingen</p>
</div>


<div className="post_likes">
<div className="like">
    <img src="/like.png" alt="" />
    <p>Vind ik leuk</p>
</div>
<div className="like">
    <img src="/opmerking.png" alt="" />
    <p>opmerkingen</p>
</div>
<div className="like">
    <img src="/delen.png" alt="" />
    <p>delen</p>
</div>
</div>

</div>
<div className="posten_items">

<div className="user_naam">
    <img src="usericon.png" alt="user" />
    <div className="user_naam_titel">
        <h4>Hussein Omar</h4>
        <p>20 m</p>
    </div>
</div>

<div className="post_teskt">
    <p>💪 Ontketen je potentieel in de sportschool! 💥 Word sterker, fitter en gezonder. Doe mee! #GymLife 🏋️‍♂️</p>
</div>

<div className="post_img">
  <img src="homeimg.png" alt="user" />
</div>

<div className="post_like">
  <p>100 Like</p>
  <p>20 opmerkingen</p>
</div>


<div className="post_likes">
<div className="like">
    <img src="/like.png" alt="" />
    <p>Vind ik leuk</p>
</div>
<div className="like">
    <img src="/opmerking.png" alt="" />
    <p>opmerkingen</p>
</div>
<div className="like">
    <img src="/delen.png" alt="" />
    <p>delen</p>
</div>
</div>

</div>



        </div>
        </>
    )
}