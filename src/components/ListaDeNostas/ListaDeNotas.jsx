import React from "react";
import { Component } from "react";
import Cards from "../Cards";
import "./estilo.css"; // este nome está encapsulado somente nessa pasta, ou seja, não interfere no estilo das demais paginas
class ListaDeNotas extends Component{
    render(){
        return(
        
            <ul className="lista-cards">
                {this.props.notas.map((nota, index) => { //para utilizarmos o js no react é necessario estar entre chaves
                    return (
                        <li key={index}>
                            <Cards
                            indice={index}
                            apagarNotas={this.props.apagarNotas}
                            titulo={nota.titulo} 
                            description={nota.description}
                            categoria={nota.categoria}/> 
                        </li>   
                        );  
                }) }
            </ul>
            
            
        )
    }
}

export default ListaDeNotas;