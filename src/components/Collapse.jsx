import React, { useState } from "react";
import '../styles/Collapse.css'
import Down from "../assets/Down.png"

function Collapse({titre, description}) {
   
    // Création d'un Hook d'état //
    const [open, setOpen] = useState(false);

    return(
        <div className="collapse">
            <div className="header-collapse">
                <div className="titre-collapse">{titre}</div>
                <span className={`arrow-collapse ${open}`} onClick={() => setOpen(!open)}>
                    <img src={Down} alt="Dérouler ce texte"/>
                </span>
            </div>
            {
                // Si le collapse est TRUE, la description s'affiche //
                open && <div className="description-collapse">{description}</div>
            }
        </div>
    );
}

export default Collapse;