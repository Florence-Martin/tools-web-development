import React from "react";
import TemplatePage from "../components/TemplatePage";

const node = () => {
  return (
    <>
      <TemplatePage
        title="NODE"
        description="est un environnement d'exécution JavaScript
   développé par Ryan Dahl en 2009. Sa capacité à exécuter du code JS en
   dehors d'un navigateur web a permis aux développeurs d'exécuter
  JavaScript presque partout (serveurs, objets connectés, robots, ...)."
        description2="Grâce à une collection de modules qui gèrent diverses fonctionnalités
  de base (comme la gestion des requêtes HTTP, l'accès au système de
  fichiers, ...), nous pouvons écrire toutes sortes d'applications juste
  avec JavaScript et Node. 
Node.js présente de nombreux avantages : un système de
  paquets intégré (NPM), un modèle non bloquant, de grandes performances
  (moteur V8), ... Et c'est un logiciel open source !."
        tips1="maitriser un minimum JS est nécessaire"
        titleUrl1="Node.js - official website"
        url1="https://nodejs.org/fr/"
      />
    </>
  );
};

export default node;
