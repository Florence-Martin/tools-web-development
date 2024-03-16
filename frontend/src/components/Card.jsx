import React from "react";
import { Link } from "react-router-dom";
import "../styles/card-module.css";
import BtnCode from "./BtnCode";

const Card = ({ _id, title, description }) => {
  return (
    <div className="card">
      <div className="content bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <div>
          <h1 className="title uppercase">{title}</h1>
        </div>

        <div className="back bg-gradient-to-r from-violet-300 to-fuchsia-100">
          <p className="description pt-8 px-4 text-black text-justify line-clamp-3 ">
            {description}
          </p>
          <div className="pt-6 fixed bottom-2">
            <Link to={`/post/${_id}`} state={{ id: _id }}>
              <BtnCode label="Ressources" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
