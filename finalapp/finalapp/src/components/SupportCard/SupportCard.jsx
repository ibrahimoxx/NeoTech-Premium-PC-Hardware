import React from 'react';
import './SupportCard.css';
import { ChatCenteredText } from 'phosphor-react';
import { Link } from 'react-router-dom';

export const SupportCard = () => {
  return (
    <div className="modern-card support-card fade-in">
      <div className="support-content text-center">
        <h4 className="fw-bold mb-3">Besoin d'aide ?</h4>
        <p className="text-muted small mb-4">
          Nos experts sont disponibles 24/7 pour vous guider.
        </p>
        <Link 
          to="/contact"
          className="modern-btn w-100 py-3 d-flex align-items-center justify-content-center gap-2 text-decoration-none"
        >
          <ChatCenteredText size={20} weight="fill" />
          Chat Direct
        </Link>
      </div>
    </div>
  );
};
