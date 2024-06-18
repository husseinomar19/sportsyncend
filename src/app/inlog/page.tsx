'use client';
import { useState } from "react";
import Image from "next/image";
import Header from "../componeten/Header";  
import Footer from "../componeten/Footer";
import google from "../../../public/google.png";
import { auth, provider } from '../firebase';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default function Inlog() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const router = useRouter();

  // Form event handler
  const handleSubmit = async (event : React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      cookies.set('user_token', user.refreshToken);
      cookies.set('user_naam', user.displayName);
      cookies.set('user_img', user.photoURL);
      router.push('/gebruikers'); 
    } catch (error :any) {
      setErr(error.message);
    }
  };

  // Google popup form 
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set('user_token', result.user.refreshToken);
      cookies.set('user_naam', result.user.displayName);
      cookies.set('user_img', result.user.photoURL);
      router.push('/gebruikers'); 
    } catch (error :any) {
      setErr(error.message);
    }
  };

  return (
    <>
      <Header />
      <div className="home_hero inlog_form">
        <form onSubmit={handleSubmit}>
          <h2>Log in</h2>
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
          <input type="submit" value="Inloggen" />
          {err && <span>{err}</span>}
          <div className="google" onClick={handleLogin}>
            <Image src={google} alt="Google" />
            <a href="">Wachtwoord vergeten?</a>
          </div>
          <a href="maakaccound">Geen account? Sign up</a>
        </form>
      </div>
      <Footer />
    </>
  );
}
