import { ShoppingCart, UserCircle } from "phosphor-react";
import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">NeoTech</Link>
      </div>
      <div className="links">
        <Link to="/">Acceuil</Link>
        <Link to="/products">Produits</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">Entreprise</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="rightbar">
        <Link to="/userpage" title="Mon Compte">
          <UserCircle size={28} weight="duotone" />
        </Link>
        <Link to="/cart" title="Panier">
          <ShoppingCart size={28} weight="duotone" />
        </Link>
      </div>
    </nav>
  );
};
