import React, {Component} from "react";

//Properties initializer
export class EventosES7 extends Component{

    state = {
        contador: 0,
    }
    // this.suma = this.suma.bind(this)
    // this.resta = this.resta.bind(this)
    
    //Arrow functions
    suma = (e) => {
        console.log("sumando"),
        this.setState({
        contador : this.state.contador + 1,
        })
    }
    
    resta = (e) => {
        console.log("restando"),
        this.setState({
        contador : this.state.contador - 1,
        })
    }
    
    render(){
        return(
            <div>
                <h2>Eventos en componentes de clases ES7</h2>
                <nav>
                    <button onClick={this.suma}>+</button>
                    <button onClick={this.resta}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        )
    }
}

// function Boton(){
//     return(<button>Boton hecho componente</button>)
// }
        // function Boton2(props){
        //     return(<button onClick={props.myOnClick}>Boton hecho componente</button>)
        // }
const Boton2 = ({myOnClick}) =>(<button onClick={myOnClick}>Boton hecho componente</button>)
// En la linea de arriba se simplifica la funcion

export class MasSobreEventos extends Component{
    handleClick = (e, mensaje) => {
        console.log(e)
        console.log(e.nativeEvent)
        console.log(e.target)
        console.log(mensaje)
    }

    render(){
        return(
            <div>
                <h2>Mas sobre eventos</h2>
                {/*Si pongo parentesis despues de la funcion esta se ejecutara inmendiatamente despues de que se cargue la pagina y no cuando presione el boton */}
                <button onClick={(e) => this.handleClick(e,"Hola, pasando parametro desde un evento")}>Saludar</button> 
                {/*Este boton no funciona porque el atributo onClick sirve con elemento JSX  y "Boton" es un componente que cree yo
                 <Boton onClick={(e) => this.handleClick(e,"Hola, pasando parametro desde un evento")} />  */}
                 {/* ----Evento personalidado---- */}
                <Boton2 myOnClick={(e) => this.handleClick(e,"Hola, pasando parametro desde un evento")} />
            </div>
        )
    }
}