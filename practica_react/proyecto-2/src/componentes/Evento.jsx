import React, {Component} from "react";

export default class Eventos extends Component{
    constructor(props){
        super(props);
        this.state = {
            contador: 0,
        }
        this.suma = this.suma.bind(this)
        this.resta = this.resta.bind(this)
    }
    suma(e) {
        console.log("sumando"),
        this.setState({
        contador : this.state.contador + 1,
        })
    }
    
    resta(e) {
        console.log("restando"),
        this.setState({
        contador : this.state.contador - 1,
        })
    }
    
    render(){
        return(
            <div>
                <h2>Eventos en componentes de clases</h2>
                <nav>
                    <button onClick={this.suma}>+</button>
                    <button onClick={this.resta}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        )
    }
}