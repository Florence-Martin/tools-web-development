import React from "react";
import { Link } from "react-router-dom";

import "../styles/card-module.css";
import BtnCode from "./BtnCode";

const Card = ({ label, description, url }) => {
  return (
    <div className="card">
      <div className="content">
        <div className="front">
          <h4 className="title">{label}</h4>
          <p className="subtitle"> Hover me :)</p>
        </div>

        <div className="back">
          <p className="description ">{description}</p>
          <div className="pt-6 fixed bottom-2">
            <Link to={url}>
              <BtnCode label="Ressources" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
