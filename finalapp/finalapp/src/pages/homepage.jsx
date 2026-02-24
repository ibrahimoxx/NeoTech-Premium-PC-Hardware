import "./homepage.css";
import { Link } from "react-router-dom";
import { Cpu, RocketLaunch, ShieldCheck } from "phosphor-react";

export const Homepage = () => {
  return (
    <div className="homepage">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="fade-in">L'avenir de la technologie entre vos mains</h1>
          <p className="fade-in">
            Découvrez notre sélection exclusive de composants PC de haute performance. 
            Conçus pour les gamers, les créateurs et les professionnels d'élite.
          </p>
          <div className="d-flex gap-3 justify-content-center">
            <Link to="/products" className="modern-btn py-3 px-5">
              Explorer les produits
            </Link>
            <Link to="/services" className="modern-btn border py-3 px-5" style={{background: 'transparent'}}>
              Nos Services
            </Link>
          </div>
        </div>
      </section>

      <section className="features-grid">
        <div className="modern-card feature-card">
          <Cpu size={48} weight="duotone" className="mb-3 text-primary" />
          <h3>Performance Ultime</h3>
          <p>Les derniers processeurs et cartes graphiques pour une puissance sans compromis.</p>
        </div>
        <div className="modern-card feature-card" style={{marginTop: '2rem'}}>
          <RocketLaunch size={48} weight="duotone" className="mb-3 text-primary" />
          <h3>Livraison Rapide</h3>
          <p>Expédition sécurisée et rapide dans tout le pays pour vos besoins urgents.</p>
        </div>
        <div className="modern-card feature-card">
          <ShieldCheck size={48} weight="duotone" className="mb-3 text-primary" />
          <h3>Garantie Premium</h3>
          <p>Service après-vente d'exception et garanties constructeurs intégrales.</p>
        </div>
      </section>
    </div>
  );
};
