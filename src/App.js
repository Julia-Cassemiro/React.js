import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import './assets/index.css';

class App extends Component {
	//passo um array vazio de notas
	constructor() {
		super();
		this.state = {
			notas: []
		};
	}

	criarNota(titulo, texto) { //preciso salvar esse titulo e essa nota
		//eu crio o objeto
		const novaNota = { titulo, texto };
		//criar um novo array
		const novoArrayNotas = [...this.state.notas, novaNota];
		//passo um novo state pra ele
		const novoEstado = {
			notas:novoArrayNotas
		};
		//ai seto esse state
		this.setState(novoEstado);
	}
	render() {
		return (
			<section className="conteudo">
				<FormularioCadastro criarNota={this.criarNota.bind(this)} />
				<ListaDeNotas notas={this.state.notas} />
			</section>
		);
	}
}

//minha lista de notas, precisa receber esse titulo e essa nota, e pra isso acontecer eu preciso passar uma propriedade tbm
export default App;
