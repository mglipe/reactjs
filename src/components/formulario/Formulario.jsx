import React, { Component } from 'react';
import "./estilo.css";
class Formulario extends Component {

    constructor(props){
        super(props);
        this.titulo = "";
        this.description = "";
        this.categoria = "sem categoria";
    }

    _handlerMudarTitulo(event){
        this.titulo = event.target.value;
        console.log(this.titulo);
    }

    _handlerMudarDescription(event){
        this.description = event.target.value;
        console.log(this.description);
    }

    _handlerMudarCategoria(event){
        event.stopPropagation();
        this.categoria = event.target.value;
        console.log(this.categoria);
    }

    _criarNotas(event){
        event.preventDefault();
        event.stopPropagation();
        this.props.criarNotas(this.titulo, this.description, this.categoria);
        
    }

    render() { 
        return (
        <form className='form' onSubmit={this._criarNotas.bind(this)}>
            <select
            id="selecionar-categorias"
            onChange={this._handlerMudarCategoria.bind(this)}>
                <option value="">sem categoria</option>
                 {this.props.categorias.map((categorias, index)=>{
                     return <option key={index} value="">{categorias}</option>
                 })}
            </select>
            <input 
                    className='form_input'
                    type="text" 
                    placeholder='titulo'
                    onChange={this._handlerMudarTitulo.bind(this)}//bind faz associação a instancia this permitindo assim que o método a intancie
            />
            <textarea
                rows={15}
                className='form_description' 
                placeholder='digite aqui'
                onChange={this._handlerMudarDescription.bind(this)}
            />
            <button className='form_button'>criar nota</button>
        </form>
        );
    }
}
 
export default Formulario;