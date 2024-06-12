'use client';
import Image from "next/image";
import Header from "../componeten/Header";
import Footer from "../componeten/Footer";
import { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
 
import "../globals.css";
import "../julian.css";
 
 
export default function Home() {
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
  return (
    <>
    <Header />
    <div className="maincontainer">
        <div className="innercontainer">
            <div className="top-container-post">
            <a href="/"> <img src="/pijl.png" alt="pijl" className="arrow-left"/></a>
            <h1 className="Bericht-maken"> Bericht maken</h1>
            </div>
           
            <div className="between-bar"></div>
            <div className="midle-container-post">
                <div className="midle-inercontainer-left">
             {isauth ? (

                  <>
                   <img src={userImg} alt="usericon" className="usericon"/>
                   <p className="name-user-post">{userNaam}</p>  
                  </>

             ): (
              <h2>Inloggen om te Posten</h2>

             )}
                
                </div>
                <div className="plaatsen">
                <p className="plaatsen-text">plaatsen</p>  
 
                </div>
            </div>
            <div className="between-bar"></div>
            <div className="bottom-container-post">
            <img src="/fotoposten.png" alt="add-file" className="add-file"/>
            <p className="photo-post-text">foto</p>  
            </div>
        </div>
 
    </div>
 
 
    <Footer />
    </>
  );
}