'use client';
import Image from "next/image";
import Header from "../componeten/Header";
import Footer from "../componeten/Footer";
import { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import React, { FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { storage, db } from '../firebase'; // Import the initialized services
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc, collection } from "firebase/firestore";

const cookies = new Cookies();

import "../globals.css";
import "../julian.css";

export default function Home() {
  const [isauth, setAuth] = useState(false);
  const [userNaam, setUserNaam] = useState('');
  const [userImg, setUserImg] = useState('');
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    const tokenNaam = cookies.get("user_naam");
    const userImg = cookies.get("user_img");
    const token = cookies.get("user_token");

    if (token) {
      setUserNaam(tokenNaam || ''); // Ensure userNaam is not undefined
      setUserImg(userImg || ''); // Ensure userImg is not undefined
      setAuth(true);
    }
  }, []);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const router = useRouter();
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted");
    if (!file) {
      console.error('No file selected');
      return;
    }
    const form = event.target as HTMLFormElement;
    const post_titel = (form.elements.namedItem('post_titel') as HTMLTextAreaElement).value;

    try {
      const storageRef = ref(storage, `uploads/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on('state_changed', 
        (snapshot) => {
          // Optional: Handle progress, e.g., display a progress bar
        }, 
        (error) => {
          console.error('Upload failed:', error);
        }, 
        async () => {
          // Handle successful uploads on complete
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          const newDocRef = doc(collection(db, 'content')); // Generates a new document reference with a unique ID
          await setDoc(newDocRef, {
            displayName: userNaam || 'Unknown User',
            userFoto: userImg || 'default-image-url', // Use a default image URL if userImg is undefined
            post_titel: post_titel || 'No Title',
            post_img: downloadURL || 'default-image-url',
            createdAt: new Date(),
            like: 0,
            opmerking: ""
          });
          alert('Post created successfully!');
          router.push('/gebruikers'); 
        }
      );
    } catch (err) {
      console.error('Error adding document:', err);
    }
  };

  return (
    <>
      <Header />
      <div className="maincontainer">
        <div className="innercontainer">
          <form onSubmit={handleSubmit}>
            <div className="top-container-post">
              <a href="/"><img src="/pijl.png" alt="pijl" className="arrow-left" /></a>
              <h1 className="Bericht-maken">Bericht maken</h1>
            </div>

            <div className="between-bar"></div>
            <div className="midle-container-post">
              <div className="midle-inercontainer-left">
                {isauth ? (
                  <>
                    <img src={userImg || 'default-image-url'} alt="usericon" className="usericon" />
                    <p className="name-user-post">{userNaam || 'Unknown User'}</p>
                  </>
                ) : (
                  <h2>Inloggen om te Posten</h2>
                )}
              </div>
              <div className="plaatsen">
                <button type="submit" className="plaatsen-text">Posten</button>
              </div>
            </div>

            <div className="between-bar">
              <textarea name="post_titel" id="post_titel"></textarea>
            </div>
            <div className="bottom-container-post">
              <label htmlFor="posten_img">
                <img src="/fotoposten.png" alt="add-file" className="add-file" />
              </label>
              <input type="file" name="posten_img" id="posten_img" onChange={handleFileChange} />
              <p className="photo-post-text">foto</p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
