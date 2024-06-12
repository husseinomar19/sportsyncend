import Image from "next/image";
import  Header from "../componeten/Header";  
import Footer from "../componeten/Footer";
import google from "../../../public/google.png";





export default function maakaccound() {
  return (
    <>
    <Header />
    <div className="home_hero inlog_form">
       <form>
        <h2>Account maken</h2>
        <input type="text"  placeholder="Naam"/>
        <input type="email"  placeholder="E-mail"/>
        <input type="password"  placeholder="Wachtwoord"/>

        <input type="submit" value="Sign Up" />
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