import React, { Component } from 'react'
import data from '../helpers/data.json'

function ElementoLista (props){
  return(
    <li
    ><a href={props.el.web} target='_blank'>{props.el.name}</a>
    </li>
  )
}

export default class RenderizadoElementos extends Component {
    constructor(props){
        super(props);
        this.state = {
            season: ["Primavera", "Verano", "Otoño", "invierno"]
        }
    }
  render() {
    return (
      <div>
        <h2>renderizado de elemtos</h2>
        <h3>Estaciones del año</h3>
        <ol>
            {
                this.state.season.map((el, index) => <li key={index}>{el}</li>) 
                //Se le pone una Key para que la consola re React pueda detectar cada uno de los elementos que va renderizando
            }
        </ol>
        <h3>Framework JavaSript Frontend</h3>
        <ul>
          {
            data.frameworks.map((el, index)=>(<ElementoLista key= {el.id} el={el}/>))
          }
        </ul>
        </div>
    )
  }
}
