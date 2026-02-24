import React from "react";
import ArchitectureIcon from "../../assets/ArchitectureServiceIcon.jpg";
import ConfiguratorIcon from "../../assets/ConfiguratorIcon.jpg";
import { Link } from "react-router-dom";
import "./services.css";

export const Services = () => {
  return (
    <div className="services-page">
      <header className="services-header fade-in">
        <h2>Nos Services</h2>
        <p>
          Chez NeoTech, nous nous engageons à améliorer votre expérience informatique et de jeu grâce à nos services spécialisés. 
          De la conception de votre PC parfait par nos experts à l'aménagement de votre studio gaming, nous transformons votre passion en performance.
        </p>
      </header>

      <div className="services-grid">
        <div className="modern-card service-card fade-in" style={{animationDelay: '0.2s'}}>
          <div className="service-img-wrapper">
            <img src={ArchitectureIcon} alt="Architecture Gaming" />
          </div>
          <div className="service-body">
            <h3>Architecture D'intérieur Gaming</h3>
            <p>
              Transformez votre espace en un environnement immersif. Nos designers créent des setup ergonomiques, 
              stylés et optimisés (éclairage, insonorisation, esthétique) pour une expérience exceptionnelle.
            </p>
            <Link to="/services/architecture" className="modern-btn mt-auto">
              En savoir plus
            </Link>
          </div>
        </div>

        <div className="modern-card service-card fade-in" style={{animationDelay: '0.4s'}}>
          <div className="service-img-wrapper">
            <img src={ConfiguratorIcon} alt="Configurateur PC" />
          </div>
          <div className="service-body">
            <h3>Configurateur PC de Rêve</h3>
            <p>
              Simplifiez la création de votre PC idéal. Notre interface intuitive vous guide dans la sélection 
              de composants compatibles avec des mises à jour de prix en temps réel et des conseils d'experts.
            </p>
            <Link to="/services/configurator" className="modern-btn mt-auto">
              Démarrer la Build
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
