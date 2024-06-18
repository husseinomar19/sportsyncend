'use client';
import { useState } from "react";
import Image from "next/image";
import Header from "../componeten/Header";  
import Footer from "../componeten/Footer";
import google from "../../../public/google.png";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import { useRouter } from 'next/navigation';

export default function MaakAccound() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const [account, setAccount] = useState('');
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("Account created:", user);
        setAccount('Account created');
        setErr('');
        setTimeout(() => {
          router.push('/inlog'); 
        }, 2000); // Wait for 2 seconds before redirecting
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error creating account:", errorCode, errorMessage);
        setErr(errorMessage);
        setAccount('');
      });
  }

  return (
    <>
      <Header />
      <div className="home_hero inlog_form">
        <form onSubmit={handleSubmit}>
          <h2>Account maken</h2>
          <input 
            type="email" 
            placeholder="E-mail" 
            name="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password" 
            placeholder="Wachtwoord" 
            name="wachtwoord" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" value="Sign Up" />
          <span>{err}</span>
          <span>{account}</span>
          <div className="google">
            <a href=""><Image src={google} alt="Google" /></a>
            <a href="">Wachtwoord vergeten?</a>
          </div>
          <a href="inlog">Al een account? Log in</a>
        </form>
      </div>
      <Footer />
    </>
  );
}
