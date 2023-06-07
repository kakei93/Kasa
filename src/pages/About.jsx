import React from "react";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AboutData from "../data/about.json";
import "../styles/About.css";

// Création de la page à propos
const About = () => {
  return (
    <div>
      <Header />
      <Banner />
      <div className="about-data">
        {AboutData.map((data, indexData) => {
          return (
            <Collapse
              key={indexData}
              titre={data.titre}
              description={data.description}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default About;
