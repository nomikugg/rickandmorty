import React from "react";
import Cards from "./Cards";

export default function Container() {
  return (
    <div className="containerGeneral">
      <div className="containerAside">
        <aside className="aside">
          <h3 className="tituloFiltros">Filtros</h3>
          <div className="sidebar">
            <details className="style4">
              <summary>
                Status <strong>sdfdsf</strong>
              </summary>
              <div className="content">
                <button className="button">Alive</button>
                <button className="button">Dead</button>
                <button className="button">Unknown</button>
              </div>
            </details>
            <details className="style4">
              <summary>
                Otro <strong>Filtro</strong>
              </summary>
              <div className="content">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
                </p>
              </div>
            </details>
          </div>
        </aside>
      </div>

      <Cards></Cards>
    </div>
  );
}
