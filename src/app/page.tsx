import Image from "next/image";
import Header from "./componeten/Header";
import Footer from "./componeten/Footer";

import "./globals.css";
import "./julian.css";
export default function Home() {
  return (
    <>
    <Header />


    <div className="home_hero">
        <div className="home_info">
          <img src="/logonaam.png" alt="logo naam" />
          <h2>
          ONTDEK, VERBIND EN GROEI SAMEN MET ONZE LEVENDIGE SPORTGEMEENSCHAP.
          </h2>
          <p>Word lid van onze bruisende sportgemeenschap en ontdek nieuwe verbindingen en kansen. Samen inspireren we elkaar om grenzen te verleggen en nieuwe hoogten te bereiken voor een sterker en gezonder leven.</p>
          <div className="ontdekmeer">
            <p>ontdek meer</p>
            <img src="/pijl.png" alt="ontdekmeer" />
          </div>
        </div>
    </div>



      <div className="icons_project">
         <div className="icons_items">
          <img src="/chat.png" alt="Chat" />
          <h4>Communicatie</h4>
         </div>
         <div className="icons_items">
          <img src="/security.png" alt="Chat" />
          <h4>Security</h4>
         </div>
         <div className="icons_items">
          <img src="/posten.png" alt="Chat" />
          <h4>Artikelen</h4>
         </div>
      </div>

      <div className="verhalentitel">
       <div className="verhaal_titel">
        <h2>Ervaringen & Verhalen</h2>
        <img src="/boeken.png" alt="verhalen" />
       </div>
      </div>


      <div className="gebruiker_verhalen">
          <div className="geberuiker_verhaal_ithem">
            <div className="gebruiker_items">
              <img className="gebruiker_items_img" src="verhalenimg.png" alt="" />
              <div className="verhaal_ithem_info">
                <h4>Sport Stories</h4>
                <p>Ontdek boeiende verhalen uit de wereld van sport.</p>
              </div>
              <div className="verhaal_bekijken">
                <img src="/pijllink.png" alt="pijllink" />
                <h5>Bekijken</h5>
              </div>
            </div>
          </div>

          <div className="geberuiker_verhaal_ithem">
            <div className="gebruiker_items">
              <img className="gebruiker_items_img" src="verhalenimg.png" alt="" />
              <div className="verhaal_ithem_info">
                <h4>Sport Stories</h4>
                <p>Ontdek boeiende verhalen uit de wereld van sport.</p>
              </div>
              <div className="verhaal_bekijken">
                <img src="/pijllink.png" alt="pijllink" />
                <h5>Bekijken</h5>
              </div>
            </div>
          </div>

          <div className="geberuiker_verhaal_ithem">
            <div className="gebruiker_items">
              <img className="gebruiker_items_img" src="verhalenimg.png" alt="" />
              <div className="verhaal_ithem_info">
                <h4>Sport Stories</h4>
                <p>Ontdek boeiende verhalen uit de wereld van sport.</p>
              </div>
              <div className="verhaal_bekijken">
                <img src="/pijllink.png" alt="pijllink" />
                <h5>Bekijken</h5>
              </div>
            </div>
          </div>



      </div>


      <div className="home_over">
        <img src="/logotitelover.png" alt="Logo" />
        <p>Ontdek een levendige sportwereld op ons platform,
        waar passie en prestatie samenkomen. Verbind met gelijkgestemden,
        vind inspiratie en deel jouw verhaal. Of je nu een enthousiaste beginner bent of een doorgewinterde atleet,
        hier vind je jouw plek om te groeien, te delen en te schitteren.</p>

        <div className="button_comm">
          <a href="#home_hero">Communicatie</a>
          <img src="/pijlup.png" alt="pijlup" />
        </div>

        <img className="home_over_logo" src="/logoklien.png" alt="logo" />
      </div>



    <Footer />
    </>
  );
}