import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/Error.css";

// Création de la page d'erreur 404
const Error = () => {
  return (
    <div>
      <Header />
      <div className="error">
        <h1 className="error-titre">404</h1>
        <div className="error-description">
          Oups! La page que vous demandez n'existe pas.
        </div>
        <NavLink to="/" className="error-home">
          Retourner sur la page d'accueil
        </NavLink>
      </div>
      <Footer />
    </div>
  );
};

export default Error;
