import React, { Component } from "react";
import "./estilo.css";

class CardNota extends Component {
  render() {
    return (
      <section className className="card-nota">
        <header>
          <h3>Titulo</h3>
        </header>
        <p>Escreva suas notas</p>
      </section>
    );
  }
}

export default CardNota;
