import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/login", loginData);
      if (res.data.status === 200) {
        alert(res.data.message);
        // localStorage.setItem('user', JSON.stringify(res.data.user));
        // navigate('/dashboard');
      } else if (res.data.status === 422) {
        const errors = Object.values(res.data.errors).flat().join("\n");
        alert("Erreurs :\n" + errors);
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Erreur lors de la connexion.");
    }
  };

  return (
    <div className="modern-form-container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="form-label text-muted small text-uppercase fw-bold">Adresse e-mail</label>
              <input
                type="email"
                name="email"
                value={loginData.email}
                onChange={handleChange}
                className="form-control modern-input"
                placeholder="nom@exemple.com"
                required
              />
            </div>
            <div className="mb-5">
              <label className="form-label text-muted small text-uppercase fw-bold">Mot de passe</label>
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                className="form-control modern-input"
                placeholder="••••••••"
                required
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="modern-btn py-3">
                Se connecter
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
