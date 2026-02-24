import React from "react";
import { Link } from "react-router-dom";

export const AdminLoginPage = () => {
  return (
    <div className="modern-form-container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 text-start">
          <div className="alert alert-info border-0 shadow-sm mb-4" style={{background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8'}}>
            <i className="fas fa-shield-alt me-2"></i> Zone d'administration sécurisée
          </div>
          <form>
            <div className="mb-4">
              <label className="form-label text-muted small text-uppercase fw-bold">Adresse e-mail Admin</label>
              <input
                type="email"
                className="form-control modern-input"
                placeholder="admin@entreprise.com"
                required
              />
            </div>
            <div className="mb-5">
              <label className="form-label text-muted small text-uppercase fw-bold">Mot de passe</label>
              <input
                type="password"
                className="form-control modern-input"
                placeholder="••••••••"
                required
              />
            </div>
            <div className="d-grid">
              <Link className="modern-btn py-3" to="/admin">
                Se connecter à la console
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
