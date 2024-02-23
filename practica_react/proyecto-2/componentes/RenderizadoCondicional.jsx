import React, {Component} from 'react'

function Login(){
    return(
        <div>
            <h2>Login</h2>
        </div>
    )
}

// Idelamente el login y el logout deberian ir en archivos independientes

function Logout(){
    return(
        <div>
            <h2>Logout</h2>
        </div>
    )
}

export default class RenderizadoCondicional extends Component{
    constructor(props){
        super(props);
        this.state = {
            session: true 
        }
    }
render() {
    return (
         <div>
            <h2>Renderizado Condicional</h2>
            {this.state.session ? <Login/> : }
         </div>
    );
}
}
