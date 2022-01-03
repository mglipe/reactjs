import React, { Component } from 'react';
import Formulario from './components/formulario';
import ListaDeNotas from './components/ListaDeNostas';
import ListaCategorias from './components/ListaCategorias';

class App extends Component {

  constructor(){
    super();
    this.state = {
      notas: [],
      categorias: [],
    };
  }

  criarNotas(titulo, description, categoria){
    const notasCriadas = {titulo, description, categoria};
    const novoArray = [... this.state.notas, notasCriadas];
    const novoEstado = {
      notas: novoArray
    }
    this.setState(novoEstado)

  }

  apagarNotas(index){
    const arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1);
    this.setState({notas: arrayNotas});
  }

  adicionarCategorias(categoria){
    const novoArray = [... this.state.categorias, categoria];
    const novoEstado = {... this.state.categorias, categorias: novoArray};
    this.setState(novoEstado);
  }




  render(){
    return (
      <section className='section-app'>{/* só pode retorna apenas um elemento pai */}
        <Formulario
        criarNotas={this.criarNotas.bind(this)}
        categorias={this.state.categorias}/>
        <main>
          <ListaCategorias
          adicionarCategorias={this.adicionarCategorias.bind(this)} 
          categorias={this.state.categorias}/>
          <ListaDeNotas 
          apagarNotas={this.apagarNotas.bind(this)}
          notas={this.state.notas}/>
        </main>
      </section>
    );
  }
  // 0.5 passando propriedades 
}

export default App

//react - é a library
//React - é o ecosistema


//utilizando plugins
