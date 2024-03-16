import React from "react";
import SearchBar from "./SearchBar";
import Card from "./Card";
import technoDatas from "../datas/technoDatas.json";

const ListTechno = () => {
  return (
    <div className="text-center justify-center bg-black py-4 ">
      <SearchBar />
      <div className="flex flex-wrap gap-4 text-center justify-center bg-black py-4 ">
        {technoDatas.map((post, index) => (
          <Card
            key={index}
            _id={post.id}
            title={post.title}
            description={post.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ListTechno;
