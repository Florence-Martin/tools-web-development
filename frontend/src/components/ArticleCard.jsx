import React from "react";
import { Link } from "react-router-dom";

const ArticleCard = ({ img, titleTheme, title, description, url }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col mx-5">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col relative ">
        <img
          className=" rounded-t-lg h-48 bg-contain bg-center "
          src={img}
          alt="article"
        />
        <div>
          <h3 className="absolute right-0 p-2 text-teal-900 font-bold ">
            {titleTheme}
          </h3>
        </div>
        <div className="text-black text-left px-4 pt-12 pb-4 flex-1 flex flex-col ">
          <h3 className="mb-4 text-2xl">{title}</h3>
          <div className="mb-4 text-grey-darker text-sm flex-1">
            <p>{description}</p>
          </div>
          <Link
            to={url}
            className="w-1/4 mt-4 rounded-lg text-center text--[#526DFE] font-bold border-[#526DFE] border-2 hover:bg-[#526DFE] hover:text-white"
          >
            A LIRE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
