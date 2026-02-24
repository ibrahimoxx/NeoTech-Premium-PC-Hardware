import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import {
  AddressBook,
  DiamondsFour,
  Envelope,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
  WhatsappLogo,
} from "phosphor-react";

import { SupportCard } from "../SupportCard/SupportCard";

export const Footer = () => {
  return (
    <footer className="fade-in" style={{background: 'var(--bg-dark)', borderTop: '1px solid var(--glass-border)', marginTop: '5rem'}}>
      <MDBContainer className="py-5">
        <MDBRow className="g-4">
          <MDBCol lg="4" className="text-start">
            <h4 className="fw-bold mb-4" style={{letterSpacing: '-1px'}}>
              <DiamondsFour size={32} weight="duotone" className="text-primary me-2" />
              NeoTech
            </h4>
            <p style={{color: '#cbd5e1', maxWidth: '300px', lineHeight: '1.8'}}>
              NeoTech est votre destination pour des composants PC d'élite. 
              Vivez l'expérience de la performance ultime avec nos solutions sur mesure.
            </p>
            <div className="d-flex gap-3 mt-4">
              <Link to="#" style={{color: '#cbd5e1'}}><FacebookLogo size={24} weight="duotone" /></Link>
              <Link to="#" style={{color: '#cbd5e1'}}><TwitterLogo size={24} weight="duotone" /></Link>
              <Link to="#" style={{color: '#cbd5e1'}}><InstagramLogo size={24} weight="duotone" /></Link>
              <Link to="#" style={{color: '#cbd5e1'}}><LinkedinLogo size={24} weight="duotone" /></Link>
            </div>
          </MDBCol>

          <MDBCol lg="2" md="4" className="text-start">
            <h6 className="text-uppercase fw-bold mb-4 small" style={{color: 'var(--primary)', letterSpacing: '1px'}}>Liens utiles</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/about" style={{color: '#cbd5e1'}} className="text-decoration-none hover-primary">Qui sommes nous</Link></li>
              <li className="mb-2"><Link to="/services" style={{color: '#cbd5e1'}} className="text-decoration-none hover-primary">Nos services</Link></li>
              <li className="mb-2"><Link to="/contact" style={{color: '#cbd5e1'}} className="text-decoration-none hover-primary">Contactez-nous</Link></li>
            </ul>
          </MDBCol>

          <MDBCol lg="3" md="4" className="text-start">
            <h6 className="text-uppercase fw-bold mb-4 small" style={{color: 'var(--primary)', letterSpacing: '1px'}}>Contact</h6>
            <p style={{color: '#cbd5e1'}} className="mb-2"><Envelope size={20} className="me-2" /> contact@neotech.ma</p>
            <p style={{color: '#cbd5e1'}} className="mb-2"><AddressBook size={20} className="me-2" /> +212 589 555 300</p>
          </MDBCol>

          <MDBCol lg="3" md="4">
             <SupportCard />
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className="text-center p-4 small text-muted border-top border-secondary border-opacity-10">
        NEO TECH © 2024 Tous les droits sont réservés
      </div>
    </footer>
  );
};
