import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const Signup = () => {
  const [formData, setFormData] = useState({
    Nom: "",
    Prénom: "",
    dateNaissance: "",
    gender: "option1",
    adressEmail: "",
    numéroTéléphone: "",
    motDePasse: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/AddUtilisateur", formData);
      if (res.data.status === 200) {
        alert(res.data.message);
      } else if (res.data.status === 422) {
        // Handle validation errors
        const errors = Object.values(res.data.errors).flat().join("\n");
        alert("Erreurs de validation :\n" + errors);
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Erreur lors de l'inscription. Veuillez vérifier vos informations.");
    }
  };

  return (
    <div className="modern-form-container">
      <form onSubmit={handleSubmit}>
        <div className="row g-4">
          <div className="col-md-6 text-start">
            <label className="form-label text-muted small text-uppercase fw-bold">Nom</label>
            <input
              type="text"
              name="Nom"
              value={formData.Nom}
              onChange={handleChange}
              className="form-control modern-input"
              placeholder="Ex: Doe"
              required
            />
          </div>
          <div className="col-md-6 text-start">
            <label className="form-label text-muted small text-uppercase fw-bold">Prénom</label>
            <input
              type="text"
              name="Prénom"
              value={formData.Prénom}
              onChange={handleChange}
              className="form-control modern-input"
              placeholder="Ex: John"
              required
            />
          </div>

          <div className="col-md-6 text-start">
            <label className="form-label text-muted small text-uppercase fw-bold">Date de naissance</label>
            <input
              type="date"
              name="dateNaissance"
              value={formData.dateNaissance}
              onChange={handleChange}
              className="form-control modern-input"
              required
            />
          </div>
          <div className="col-md-6 text-start">
            <label className="form-label text-muted small text-uppercase fw-bold">Genre</label>
            <div className="d-flex gap-4 p-2 bg-dark rounded-3 px-3 mt-1" style={{height: '3.3rem', alignItems: 'center'}}>
              <div className="form-check m-0">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  value="option1"
                  checked={formData.gender === "option1"}
                  onChange={handleChange}
                  id="male"
                />
                <label className="form-check-label small" htmlFor="male">Mâle</label>
              </div>
              <div className="form-check m-0">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  value="option2"
                  checked={formData.gender === "option2"}
                  onChange={handleChange}
                  id="female"
                />
                <label className="form-check-label small" htmlFor="female">Femelle</label>
              </div>
            </div>
          </div>

          <div className="col-md-6 text-start">
            <label className="form-label text-muted small text-uppercase fw-bold">Adresse e-mail</label>
            <input
              type="email"
              name="adressEmail"
              value={formData.adressEmail}
              onChange={handleChange}
              className="form-control modern-input"
              placeholder="john@example.com"
              required
            />
          </div>
          <div className="col-md-6 text-start">
            <label className="form-label text-muted small text-uppercase fw-bold">Numéro de téléphone</label>
            <input
              type="tel"
              name="numéroTéléphone"
              value={formData.numéroTéléphone}
              onChange={handleChange}
              className="form-control modern-input"
              placeholder="+212 ..."
              required
            />
          </div>

          <div className="col-12 text-start">
            <label className="form-label text-muted small text-uppercase fw-bold">Mot de passe</label>
            <input
              type="password"
              name="motDePasse"
              value={formData.motDePasse}
              onChange={handleChange}
              className="form-control modern-input"
              placeholder="••••••••"
              required
            />
          </div>

          <div className="col-12 mt-5">
            <button type="submit" className="modern-btn py-3 w-100">
              Créer un compte
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
