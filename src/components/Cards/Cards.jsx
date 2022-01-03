import React, { Component } from 'react';
import "./estilo.css";
import {ReactComponent as DeleteSvg} from "../../assets/delete.svg"
class Cards extends Component {

    apagar(){
        const indice = this.props.indice;
        this.props.apagarNotas(indice);
    }

    render() { 
        return (
            <section  className='cards-notas'>
                <header>
                    <h3>{this.props.titulo}</h3>
                    <DeleteSvg onClick={this.apagar.bind(this)}/>
                    <h4>{this.props.categorias}</h4>
                </header>
                <p>{this.props.description}</p>
            </section>
        );
    }
}
 
export default Cards;