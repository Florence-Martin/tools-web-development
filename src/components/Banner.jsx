import React from "react";
import { Link } from "react-router-dom";

import myYear from "../images/gif.png";
import BtnCode from "./BtnCode";
import ContactForm from "./ContactForm";
import PopupCalendly from "./PopupCalendly";

const Banner = () => {
  return (
    <div>
      <PopupCalendly />
      <div className="flex bg-white justify-around items-center ">
        <img
          src={myYear}
          alt="présentation 2023"
          className="h-3/12 lg:h-2/12 w-3/12 lg:w-2/12 "
        />

        <ContactForm />
      </div>
      <section className="bg-black">
        <div className="max-w-lg bg-black px-4  py-4 mx-auto text-left  md:text-center">
          <h1 className="text-xl font-extrabold leading-10 tracking-tight text-left text-white  sm:leading-none md:text-4xl  lg:text-5xl">
            <span className="inline md:block">Tools</span>
            <span className=" mt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-emerald-400 to-green-500 md:inline-block">
              {" "}
              & Shortcut
            </span>
            <span className="pl-1 mt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-emerald-400 to-green-500 md:inline-block">
              For
              <span className="pl-1 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-cyon-400 to-purple-300">
                Web Development
              </span>
            </span>
          </h1>
          <p className="text-center">
            Cette plateforme a pour but de centraliser des infos de manière
            collaborative autour de langages et technologies web.
          </p>
          <div className="mt-4 max-w-sm mx-auto sm:max-w-none text-center">
            <div className="space-y-4 sm:space-y-0 sm:mx-auto ">
              <Link to="/article">
                <BtnCode label="Articles" />
              </Link>
            </div>
          </div>
        </div>

        <hr className="text-white mx-5" />
      </section>
    </div>
  );
};

export default Banner;
