import React from "react";
import GreyStar from "../assets/GreyStar.png";
import RedStar from "../assets/RedStar.png";
import "../styles/Rating.css";

const Rating = ({ rate }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="allStars">
      {stars.map((el) =>
        el < rate ? (
          <img className="stars" key={el} src={RedStar} alt="les étoiles rouges" />
        ) : (
          <img className="stars" key={el} src={GreyStar} alt="les étoiles grises" />
        )
      )}
    </div>
  );
};

export default Rating;
