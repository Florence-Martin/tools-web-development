import React from "react";
import powerful from "../images/powerful.png";

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center mx-8 lg:mx-20 my-4 text-md lg:text-lg mb-12">
      <div>
        <p className=" text-base lg:text-xl mb-8 ">
          🚧 Ce site est en cours de développement, et je vous invite à
          collaborer (idées, corrections, tutos...).
        </p>
        <p>
          Le but de cette appli n’est pas d’entrer dans le détail du code, mais
          de centraliser des infos diverses, permettant deux approches, ou deux
          lectures différentes, destinée à des néophytes ou développeurs
          débutants/intermédiaires :
        </p>
        <br />
        <li>définitions; </li>{" "}
        <li>accès direct aux sites officiels des langages de programmation;</li>{" "}
        <li>cheat sheet;</li> <li>comparatifs;</li>{" "}
        <li>ressources (playground, tutos…);</li>
        <li>
          mettre en lien des personnes souhaitants échanger autour d'un sujet;
        </li>
        <li>articles;</li>
        <li>la place des femmes dans la tech;</li>
        <p>
          … la liste est non exhaustive et toutes vos idées pourront être
          soumises pour enrichir ce site collaboratif.
        </p>
      </div>
      <div>
        <img src={powerful} alt="powerfull-symbol" />
      </div>
    </div>
  );
};

export default About;
