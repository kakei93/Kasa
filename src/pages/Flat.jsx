import React from "react";
// Import du hook useParams
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import LogementData from "../data/logements.json";
import Carrousel from "../components/Carrousel";
import Tags from "../components/Tags";
import Rating from "../components/Rating";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";
import "../styles/Flat.css";


const Flat = () => {
  // On utilise useParams pour récupérer les paramètres du logement selectionné
  const logementId = useParams().id;

  // On récupère les datas du fichier Json avec la méthode find
  const logement = LogementData.find((logement) => logement.id === logementId);

  const { pictures, title, location, description, host } = logement;

  return (
    <div>
      <Header />
      <Carrousel images={pictures} />
      <div className="info-logement">
        <div className="info-logement-info">
          <h1 className="info-logement-title">{title}</h1>
          <h2 className="info-logement-location"> {location} </h2>
          <div className="info-logement-tags">
            {logement.tags.map((tag, index) => (
              <Tags key={index} allTag={tag} />
            ))}
          </div>
        </div>
        <div className="info-logement-host-rating">
          <div className="info-logement-host">
            <div className="host-name"> {host.name} </div>
            <img className="host-picture" src={host.picture} alt="hôte" />
          </div>
          <div className="info-logement-rating">
            <Rating rate={logement.rating} />
          </div>
        </div>
      </div>
      <div className="description-equipment">
        <Collapse
          titre={"Description"}
          description={description}
          className="description"
        />
        <Collapse
          titre={"Équipements"}
          description={logement.equipments.map((equipement, c) => (
            <li key={c}> {equipement} </li>
          ))}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Flat;
