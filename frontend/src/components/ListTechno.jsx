import React from "react";
import SearchBar from "./SearchBar";
import Card from "./Card";
import technoDatas from "../datas/technoDatas.json";

const ListTechno = () => {
  return (
    <div className="text-center justify-center bg-black py-4 ">
      <SearchBar />
      <div className="flex flex-wrap gap-4 text-center  justify-center bg-black py-4 ">
        {technoDatas.map((item, index) => {
          return (
            <Card
              key={index}
              _id={item._id}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ListTechno;
