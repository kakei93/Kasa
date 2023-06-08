// Import de hook useState de react
import React, { useState } from "react";
import ArrowLeft from "../assets/left.png";
import ArrowRight from "../assets/right.png";
import "../styles/Carrousel.css";

// Création de la fonction d'affichage du carrousel
const Carrousel = ({ images }) => {
  // On déclare un hook d'état
  const [index, setIndex] = useState(0);

  // fonction next
  const next = () => {
    if (index === images.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  // fonction previous
  const previous = () => {
    if (index === 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <div className="slide">
      <div className="slide-arrow">
        <div className="slide-arrow-left">
          <img
            className="arrows"
            src={ArrowLeft}
            alt="précédent"
            onClick={previous}
            style={{ display: images.length === 1 ? "none" : "inline" }}
          />
        </div>

        <div className="slide-arrow-right">
          <img
            className="arrows"
            src={ArrowRight}
            alt="suivant"
            onClick={next}
            style={{ display: images.length === 1 ? "none" : "inline" }}
          />
        </div>
      </div>

      <img
        className="slide-img"
        src={images[index]}
        alt="images de l'appartement"
      />

      <span className="slide-counter">
        {index + 1}/{images.length}
      </span>
    </div>
  );
};

export default Carrousel;
