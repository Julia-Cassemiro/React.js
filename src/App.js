import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import './assets/index.css';

class App extends Component {
	criarNota(titulo, texto) { //preciso salvar esse titulo e essa nota
		console.log("uma nova nota foi criada " + titulo + " " + texto);
	}
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro  criarNota={this.criarNota} />
        <ListaDeNotas /> //agora a minha lista de notas, precisa receber esse titulo e essa nota, e pra isso acontecer eu preciso passar uma propriedade tbm
      </section>
    );
  }
}

export default App;
