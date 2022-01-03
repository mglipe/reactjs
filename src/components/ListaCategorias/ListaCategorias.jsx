import React, { Component } from 'react';
import "./estilo.css";

class ListaCategorias extends Component{

    _handlerCategorias(event){
        if(event.key == "Enter"){
            let categoria = event.target.value;
            this.props.adicionarCategorias(categoria)
        }
    }

    render(){
        return(
            <section className='conteudo-categorias'>
                <ul>
                    {this.props.categorias.map((categorias, index)=>{
                       return  <li key={index}>{categorias}</li> 
                    })}
                </ul>
                <input 
                type="text" 
                placeholder='adicionar categorias'
                onKeyUp={this._handlerCategorias.bind(this)}/>
            </section>
        );
    }
}

export default ListaCategorias;