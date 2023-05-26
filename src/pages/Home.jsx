import React from "react";
import LogementData from "../data/logements.json";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Card from "../components/Cards";
import Footer from "../components/footer";
import "../styles/Home.css";


const Home = () => {
    return (
        <div>
            <Header />
            <Banner home={true} titre="Chez vous, partout et ailleurs" />
            <div className="list-logements">
                {LogementData.map((logements, id) => {
                    return (
                        <NavLink
                            className="cards"
                            key={id}
                            to={`/logement/${logements.id}`}
                        >
                            {" "}
                            <Card logements={logements} />
                        </NavLink>
                            );
                })}
            </div>
            <Footer />
        </div>
    )
}

export default Home;