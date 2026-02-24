import { Envelope, Headset } from "phosphor-react";
import React from "react";
import "./contact.css";

export const Contact = () => {
  return (
    <div className="contact-page">
      <header className="contact-header fade-in">
        <h1 className="display-4 fw-bold">Contactez-nous</h1>
        <p className="text-muted">Partagez votre projet avec nous, nous vous répondrons sous 24h.</p>
      </header>

      <div className="contact-grid">
        <div className="contact-info-cards fade-in" style={{animationDelay: '0.2s'}}>
          <div className="modern-card info-card">
            <div className="info-icon">
              <Headset size={28} weight="duotone" />
            </div>
            <div className="info-text">
              <h6>Support Téléphonique</h6>
              <p>+212 589 555 300</p>
            </div>
          </div>

          <div className="modern-card info-card">
            <div className="info-icon">
              <Envelope size={28} weight="duotone" />
            </div>
            <div className="info-text">
              <h6>Email Direct</h6>
              <p>contact@neotech.ma</p>
            </div>
          </div>

          <div className="modern-card info-card p-4 bg-primary bg-opacity-10 border-primary border-opacity-20 mt-2">
            <h5 className="fw-bold mb-3">Horaires d'ouverture</h5>
            <div className="small d-flex justify-content-between mb-2">
              <span className="opacity-75">Lundi - Vendredi</span>
              <span className="fw-bold">09:00 - 19:00</span>
            </div>
            <div className="small d-flex justify-content-between">
              <span className="opacity-75">Samedi</span>
              <span className="fw-bold">10:00 - 16:00</span>
            </div>
          </div>
        </div>

        <div className="modern-card contact-form-container fade-in" style={{animationDelay: '0.4s'}}>
          <form className="contact-form">
            <h4 className="mb-4">Envoyez-nous un message</h4>
            
            <div className="form-group-modern">
              <label>Adresse e-mail</label>
              <input
                type="email"
                className="modern-input"
                placeholder="votre@email.com"
              />
            </div>

            <div className="form-group-modern">
              <label>Objet</label>
              <input
                type="text"
                className="modern-input"
                placeholder="Comment pouvons-nous vous aider ?"
              />
            </div>

            <div className="form-group-modern">
              <label>Message</label>
              <textarea 
                className="modern-input" 
                placeholder="Décrivez votre demande en détail..."
              ></textarea>
            </div>

            <button className="modern-btn w-100 py-3" type="submit">
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
