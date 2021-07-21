import React from "react";
import Card from "../Componentes/Card";
import Titulos from "../Componentes/Titulos";

function Proyectos() {
  return (
    <div className="cont-proyectos section">
      <div className="header--proyectos alinearcentro">
        <Titulos titulo="Proyectos" />
      </div>
      <div className="cont-cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Proyectos;
