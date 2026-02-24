import React from "react";
import "./style.css";
import sectionImg1 from "../../assets/ArchiSection1.jpg";
import sectionImg2 from "../../assets/ArchiSection2.jpg";
import { UserCircle } from "phosphor-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Architecture = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="architecture-page">
      <header className="architecture-header fade-in">
        <h1 className="text-white">Architecture D’intérieur Gaming</h1>
      </header>

      <section className="archi-section fade-in">
        <div className="img-wrapper">
          <img src={sectionImg1} alt="Gaming Setup Design" />
        </div>
        <div className="content">
          <p>
            La popularité croissante des espaces de gaming fait rêver de plus en
            plus d'amateurs de jeux vidéo. NeoTech vous accompagne dans la
            création de votre propre espace de jeu, en transformant n'importe quelle
            pièce de votre maison en un lieu dédié à la performance.
          </p>
          <p>
            L'un de nos designers vous aidera à choisir l'espace idéal, 
            en tenant compte de l'acoustique, de l'ergonomie et de vos préférences esthétiques.
          </p>
        </div>
      </section>

      <section className="archi-section reverse fade-in">
        <div className="img-wrapper">
          <img src={sectionImg2} alt="Immersive Environment" />
        </div>
        <div className="content">
          <p>
            Nous créons des espaces récréatifs complets : billard, fléchettes, 
            ou stations de streaming ultra-modernes. NeoTech conçoit un environnement 
            doté de sièges premium et d'un éclairage dynamique synchronisé.
          </p>
          <p>
            Chaque projet est unique et vise à créer l'ambiance parfaite pour 
            passer des moments inoubliables seul ou entre amis.
          </p>
        </div>
      </section>

      <div className="avis-header fade-in">
        <h2>Avis de nos clients</h2>
      </div>

      <div className="clients-slider fade-in">
        <Slider {...settings}>
          {USERS_FEEDBACK.map((user, index) => (
            <div key={index}>
              <div className="modern-card feedback-card">
                <div className="feedback-header">
                  <UserCircle size={44} weight="duotone" />
                  <h6>{user.fullname}</h6>
                </div>
                <p className="feedback-text">"{user.feedback}"</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <section className="modern-card demande-section fade-in">
        <h2>Demander le service</h2>
        <p className="text-muted">Remplissez le formulaire et nos experts vous contacteront pour une consultation gratuite.</p>
        
        <form className="row g-4 mt-2">
          <div className="col-md-6 text-start">
            <label className="form-label small fw-bold text-muted">Nom</label>
            <input type="text" className="modern-input" placeholder="Votre nom" />
          </div>
          <div className="col-md-6 text-start">
            <label className="form-label small fw-bold text-muted">Prénom</label>
            <input type="text" className="modern-input" placeholder="Votre prénom" />
          </div>
          <div className="col-12 text-start">
            <label className="form-label small fw-bold text-muted">Email</label>
            <input type="email" className="modern-input" placeholder="exemple@mail.com" />
          </div>
          <div className="col-12 text-start">
            <label className="form-label small fw-bold text-muted">Message</label>
            <textarea className="modern-input" placeholder="Décrivez votre projet..." />
          </div>
          <div className="col-12">
            <button type="submit" className="modern-btn w-100 py-3 mt-4">Envoyer la demande</button>
          </div>
        </form>
      </section>
    </div>
  );
};

const USERS_FEEDBACK = [
  {
    fullname: "Ahmed RAZZOUQ",
    feedback: "Merci à NeoTech pouring avoir transformé mon sous-sol en une véritable salle de jeux. L'éclairage et les sièges sont parfaits !",
  },
  {
    fullname: "Youssra STOURI",
    feedback: "Travail incroyable ! Ma chambre d'amis est devenue un espace gaming moderne et confortable. Mes amis adorent !",
  },
  {
    fullname: "Zineb SAID",
    feedback: "Impressionnée par le professionnalisme. Ma nouvelle salle de jeux dépasse toutes mes attentes, bravo !",
  },
  {
    fullname: "Omar ERRADI",
    feedback: "Ils ont parfaitement exécuté ma vision. Le design est incroyable et la fonctionnalité est optimale.",
  },
  {
    fullname: "Maria RAZZOUQ",
    feedback: "Une salle de jeux qui rivalise avec les espaces professionnels. L'ambiance est parfaite pour streamer.",
  },
  {
    fullname: "Imad Eddine AMIR",
    feedback: "Equipe fantastique du début à la fin. Ils ont créé une salle à la fois élégante et pratique. Je recommande !",
  },
];
