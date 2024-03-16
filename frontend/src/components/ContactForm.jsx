import React from "react";
import { Link } from "react-router-dom";
import mind_map from "../images/Mind_map.png";

const ContactForm = () => {
  return (
    <section className="flex flex-col justify-center ">
      <div className="group w-20 h-20 lg:w-28 lg:h-28 [perspective:1000px] mt-4">
        <div className="absolute inset-x-0 bottom-8 lg:inset-0">
          <span className="flex mt-7 z-10">
            <span className="animate-ping relative inline-flex rounded-full h-3 w-3 bg-[#526DFE] "></span>
          </span>

          <div className="fixed lg:bottom-1">
            <Link to="/contact">
              <img
                src={mind_map}
                alt="mind"
                className="z-10 h-2/5 lg:h-4/5 w-4/5 lg:w-full  rounded-xl object-cover shadow-xl shadow-black/40"
              />
              <span className="text-white absolute top-0 left-0 bg-black bg-opacity-75 py-1 px-2 rounded-md opacity-0 transition-opacity duration-300 hover:opacity-100">
                Une idée ?
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
