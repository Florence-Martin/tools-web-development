import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="relative  pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-full px-4">
            <h4 className="text-3xl font-semibold text-teal-300">
              Let's keep in touch!
            </h4>

            <div className="flex mt-2 space-x-4">
              <a
                href="https://www.linkedin.com/in/florence-martin-922b3861/"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin />
              </a>
              <a
                href="https://github.com/Florence-Martin"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub />
              </a>
            </div>
            <hr className="my-6 border-blueGray-300" />
            <div className="w-full mt-2 lg:mt-0 lg:w-4/12">
              <ul className="list-unstyled">
                <li>
                  <a
                    className="text-white hover:text-teal-300  font-semibold block pb-2 text-sm"
                    href="/mentions"
                  >
                    Mentions légales
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-full mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold">
              Copyright &copy; {new Date().getFullYear()} FloM
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
