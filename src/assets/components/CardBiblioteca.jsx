import React, { useState, useEffect } from "react";
import rua from "../img/rua.jpg";
import green from "../icon/circle-green.png";
import red from "../icon/circle-red.png";
import buttonCard from "../icon/button-card.png";
import { Link } from "react-router-dom";
import { getPosts } from "../../services/viewPublis";
import { deletePubli } from "../../services/deletePubli";

function CardPubli() {
  return (
    <Link to="/arquivoBiblioteca">
      <div className="card">
        <div className="card-body">
          <div className="card-align-list">
            <h3>
              COMO O DESIGN DE INTERFACES PODE FACILITAR O USO DE PRODUTOS
              DIGITAIS POR PESSOAS IDOSAS
            </h3>
          </div>
          <p>
            A expectativa de vida tem aumentado no mundo todo. O envelhecimento
            da população, que teve início em países desenvolvidos, como o Japão,
            hoje pode ser percebido também em países em desenvolvimento e
            subdesenvolvidos. 
          </p>
        </div>
      </div>
    </Link>
  );
}

export default CardPubli;
