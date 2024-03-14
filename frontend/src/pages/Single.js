import React from "react";
import { useLocation } from "react-router-dom";
import { useAppContext } from "../context";

const Single = () => {
  const { posts } = useAppContext();
  const params = useLocation();
  const post = posts.find((post) => post._id === params?.state?.id);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-2">
      <div className="mx-8 p-2 lg:p-8 lg:mx-48 my-12 text-md lg:text-lg mb-12 rounded-2xl bg-black shadow-lg shadow-white ">
        <h1 className="text-2xl pb-8">
          <strong>{post?.title}</strong>
        </h1>
        <p className="mb-8">
          <strong>{post?.title}</strong> {post?.description} <br />
          <br />
          {post?.origin}
        </p>
        <h2 className="underline">Ressources</h2>
        <div className="pl-4 shadow-2xl rounded-xl">
          <li>
            <a
              href={post?.officialWebsite}
              target="_blank"
              rel="noreferrer"
              className="hover:text-teal-300 "
            >
              Site Officiel
            </a>
          </li>
          <li>
            {" "}
            <a
              href={post?.cheatSheet}
              target="_blank"
              rel="noreferrer"
              className="hover:text-teal-300 "
            >
              Cheat sheet
            </a>
          </li>
        </div>

        <ul className="pl-4 shadow-2xl rounded-xl">
          <li>{post?.content1}</li>
          <br />
          <li>{post?.content2}</li>
          <br />
          <li>{post?.content3}</li>
        </ul>

        <ul className="pl-4 shadow-2xl rounded-xl">
          {/* Afficher les autres URLs et titres ici */}
          {Array.from(Array(10).keys()).map((index) => {
            const url = post[`url${index + 1}`];
            const title = post[`titleUrl${index + 1}`];
            if (url && title) {
              return (
                <li key={index}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-teal-300 "
                  >
                    {title}
                  </a>
                </li>
              );
            }
            return null;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Single;
