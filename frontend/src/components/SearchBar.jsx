import axios from "axios";
import React, { useEffect, useState } from "react";
//import { useAppContext } from "../context";
import Card from "./Card";

const SearchBar = () => {
  //const { posts } = useAppContext();
  const [data, setData] = useState([]);
  console.log(data);
  const [searchTerm, setSearchterm] = useState("");

  const handleSearchTerm = (e) => {
    setSearchterm(e.target.value);
  };
  useEffect(() => {
    axios
      .get("/posts")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="p-2 ">
      <input
        placeholder="Recherche par nom..."
        type="search"
        className="border-[#526DFE] text-white border-2 border-solid rounded-lg px-2 py-2 bg-transparent "
        required=""
        onChange={handleSearchTerm}
      />

      <div className="flex flex-wrap gap-4 text-center  justify-center bg-black py-4 ">
        {data
          ?.filter((post) => {
            return searchTerm.toLowerCase() === ""
              ? post
              : post.title.toLowerCase().includes(searchTerm.toLowerCase());
          })
          .map((post, index) => (
            <Card
              key={index}
              _id={post._id}
              title={post.title}
              description={post.description}
            />
          ))}
      </div>
    </div>
  );
};

export default SearchBar;
