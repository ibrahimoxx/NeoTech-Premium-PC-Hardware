import { useState } from "react";
import { Login } from "./login/login";
import "./userpage.css";
import { Signup } from "./signup/signup";
import { AdminLoginPage } from "./Admin/AdminLoginPage";

export const UserPage = () => {
  const [pageState, setPageState] = useState(1);

  const handleLoginBtn = () => {
    setPageState(1);
  };

  const hanldeSignUpBtn = () => {
    setPageState(2);
  };

  const handleAdminBtn = () => {
    setPageState(3);
  };

  return (
      <div className="container py-5 mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center mb-5">
            <h1 className="display-4 fw-bold">Gestion des Utilisateurs</h1>
            <p className="text-muted">Connectez-vous ou créez un compte pour accéder à nos services</p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="modern-card p-4">
              <div className="buttons d-flex justify-content-center gap-3 mb-5 p-2 bg-dark rounded-pill" style={{maxWidth: 'fit-content', margin: '0 auto'}}>
                <button 
                  className={`modern-btn-tab ${pageState === 1 ? 'active' : ''}`} 
                  onClick={handleLoginBtn}
                >
                  Se connecter
                </button>
                <button
                  className={`modern-btn-tab ${pageState === 2 ? 'active' : ''}`}
                  onClick={hanldeSignUpBtn}
                >
                  S'inscrire
                </button>
                <button 
                  className={`modern-btn-tab ${pageState === 3 ? 'active' : ''}`} 
                  onClick={handleAdminBtn}
                >
                  Administrateur
                </button>
              </div>
              <div className="content-area">
                {pageState === 1 ? (
                  <Login />
                ) : pageState === 2 ? (
                  <Signup />
                ) : (
                  <AdminLoginPage />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};
