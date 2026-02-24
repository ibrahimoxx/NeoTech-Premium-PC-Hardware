import React from "react";
import aboutUsStore from "../../assets/aboutUsStore.jpg";
import "./about.css";
import { Eye, GameController } from "phosphor-react";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <div className="about-page">
      <header className="about-header fade-in">
        <p className="subtitle">À Propos De</p>
        <h1>NeoTech</h1>
      </header>

      <div className="about-hero fade-in" style={{animationDelay: '0.2s'}}>
        <div className="about-img-container">
          <img src={aboutUsStore} alt="NeoTech Store" />
        </div>
        <div className="about-content-main">
          <p>
            NeoTech se spécialise dans la fourniture de matériel informatique
            haut de gamme pour les professionnels des secteurs de l'ingénierie,
            l'architecture, la finance, l'intelligence artificielle et le
            gaming.
          </p>
          <p>
            Avec une expertise approfondie et une expérience solide,
            nous offrons des solutions personnalisées et un support dédié aux
            clients privés et institutionnels. Notre entreprise propose une
            vaste sélection de produits et services de qualité supérieure pour
            répondre aux besoins spécifiques de nos clients.
          </p>
          
          <div className="mission-vision-grid">
            <div className="modern-card mv-card">
              <div className="mv-icon">
                <GameController size={32} weight="duotone" />
              </div>
              <h3>NOTRE MISSION</h3>
              <p>
                Fournir aux professionnels des équipements haut de gamme pour exceller. 
                Nous aspirons à être le leader du marché marocain par notre expertise et notre service exceptionnel.
              </p>
            </div>
            
            <div className="modern-card mv-card">
              <div className="mv-icon">
                <Eye size={32} weight="duotone" />
              </div>
              <h3>NOTRE VISION</h3>
              <p>
                Devenir la référence absolue au Maroc. Nous bâtissons des relations de confiance 
                en guidant nos clients vers les dernières innovations technologiques.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-cta fade-in">
        <Link to="/contact" className="modern-btn px-5 py-3">
          Prêt à collaborer ? Contactez-nous
        </Link>
      </div>
    </div>
  );
};
