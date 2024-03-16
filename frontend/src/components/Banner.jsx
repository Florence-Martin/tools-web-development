import React from "react";
import { Link, useLocation } from "react-router-dom";

import team from "../images/Team-collaboration.png";
import BtnCode from "./BtnCode";
import ContactForm from "./ContactForm";
import PopupCalendly from "./PopupCalendly";

const Banner = () => {
  const location = useLocation();

  return (
    <div>
      <PopupCalendly />
      <div className="flex bg-white justify-around items-center mt-4">
        <img
          src={team}
          alt="présentation 2023"
          className="h-3/12 lg:h-2/12 w-3/12 lg:w-2/12 "
        />

        <ContactForm />
      </div>
      <section className="bg-black">
        <div className="max-w-lg bg-black px-4  py-4 mx-auto text-left md:text-center">
          <h1 className="text-xl font-extrabold leading-10 tracking-tight text-left text-white sm:leading-none md:text-4xl lg:text-5xl">
            <span className="inline md:block">Tools</span>
            <span className=" mt-2  text-white md:inline-block">
              {" "}
              & Shortcuts
            </span>
            <span className="pl-1 mt-2 text-white md:inline-block">
              For
              <span className="pl-1 text-white">Web Development</span>
            </span>
          </h1>
          <p className="text-center  text-xs lg:text-base ">
            Cette plateforme a pour but de centraliser des infos de manière
            collaborative autour de langages et de technologies web.
          </p>
          <div className="mt-4 max-w-sm mx-auto sm:max-w-none text-center">
            <div className="space-y-4 sm:space-y-0 sm:mx-auto ">
              <Link to="/articleList">
                <BtnCode label="ARTICLES" />
              </Link>
            </div>
          </div>
        </div>

        <hr className="text-white mx-5" />

        <div className="mt-2 w-2/12 lg:w-1/12 text-xs lg:text-base text-center mx-5 border border-white rounded-full hover:bg-purple-800 cursor-pointer">
          {location.pathname !== "/" && <Link to="/">Go back</Link>}
        </div>
      </section>
    </div>
  );
};

export default Banner;
