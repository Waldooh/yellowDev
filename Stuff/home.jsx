import React from "react";
import bgvideo from ".//../assets/fluid-background.mp4";

const Home = () => {
    return (
        <>
        <section class="showcase">
          <header>
            <h5>Yellow Dev</h5>
            <ul>
              <li><a href="/inicio">Inicio</a></li>
              <li><a href="http://">Nosotros</a></li>
              <li><a href="http://">Servicios</a></li>
              <li><a href="http://">Contacto</a></li>
            </ul>
          </header>
          <video autoPlay muted loop class="bg-video">
            <source src={bgvideo} type="video/mp4" /> 
          </video>
          <div class="overlay"></div>
          <div class="text">
            <h1><i>Desarrolla tus ideas</i></h1>
          </div>
        </section>
    
        <section class="servicios">
          <div class="container">
            <h2>Lo Que Hacemos_</h2>
            <div class="row">
              <div class="col">
                <i class="fa-solid fa-laptop-code"></i>
                <h3>Desarrollo Web</h3>
              </div>
              <div class="col">
                <i class="fa-solid fa-lightbulb"></i>
                <h3>Marketing Digital</h3>
              </div>
              <div class="col">
                <i class="fa-solid fa-gears"></i>
                <h3>SEO & CEM</h3>
              </div>
            </div>
          </div>
        </section>
        </>
      );
}

export default Home;