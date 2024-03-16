import React from "react";
import { useLocation } from "react-router-dom";
import { useAppContext } from "../context/index.js";

const Single = () => {
  const { posts } = useAppContext();
  const params = useLocation();
  const post = posts.find((post) => post._id === params?.state?.id);

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
          <li>
            {" "}
            <a
              href={post?.url1}
              target="_blank"
              rel="noreferrer"
              className="hover:text-teal-300 "
            >
              {post?.titleUrl1}
            </a>
          </li>
          <li>
            {" "}
            <a
              href={post?.url2}
              target="_blank"
              rel="noreferrer"
              className="hover:text-teal-300 "
            >
              {post?.titleUrl2}
            </a>
          </li>
          <li>
            {" "}
            <a
              href={post?.url3}
              target="_blank"
              rel="noreferrer"
              className="hover:text-teal-300 "
            >
              {post?.titleUrl3}
            </a>
          </li>
          <li>
            {" "}
            <a
              href={post?.url4}
              target="_blank"
              rel="noreferrer"
              className="hover:text-teal-300 "
            >
              {post?.titleUrl4}
            </a>
          </li>
          <li>
            {" "}
            <a
              href={post?.url5}
              target="_blank"
              rel="noreferrer"
              className="hover:text-teal-300 "
            >
              {post?.titleUrl5}
            </a>
          </li>
          <li>
            {" "}
            <a
              href={post?.url6}
              target="_blank"
              rel="noreferrer"
              className="hover:text-teal-300 "
            >
              {post?.titleUrl6}
            </a>
          </li>
          <li>
            {" "}
            <a
              href={post?.url7}
              target="_blank"
              rel="noreferrer"
              className="hover:text-teal-300 "
            >
              {post?.titleUrl7}
            </a>
          </li>
          <li>
            {" "}
            <a
              href={post?.url8}
              target="_blank"
              rel="noreferrer"
              className="hover:text-teal-300 "
            >
              {post?.titleUrl8}
            </a>
          </li>
          <li>
            {" "}
            <a
              href={post?.url9}
              target="_blank"
              rel="noreferrer"
              className="hover:text-teal-300 "
            >
              {post?.titleUrl9}
            </a>
          </li>
          <li>
            {" "}
            <a
              href={post?.ur10}
              target="_blank"
              rel="noreferrer"
              className="hover:text-teal-300 "
            >
              {post?.titleUr10}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Single;
