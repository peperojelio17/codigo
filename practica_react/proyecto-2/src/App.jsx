import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Componente from './componentes/Componente'
import Propiedades from './componentes/Propiedades'
import Estado from './componentes/Estado'
import RenderizadoCondicional from './componentes/RenderizadoCondicional'
import RenderizadoElementos from './componentes/RenderizadoElementos'
import {EventosES6} from './componentes/Evento'
import {EventosES7, MasSobreEventos} from './componentes/EventoES7'
import ComunicacionComponentes from './componentes/ComucacionComponentes'

import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <section>
        <Componente msg="Hola soy un componente Funcional Expresado desde una prop"/>
        <hr />
        <Propiedades 
        cadena = "Esto es una cadena de texto" 
        numero = {19} 
        bool = {true}
        arreglo = {[1, 2 , 3]}
        objeto = {{nombre:"Jhon", correo:"JohnMicha@gmail.com"}}
        funcion = {(num) => num*num}
        elementoReact = {<i>Esto es un elemento React</i>}
        componenteReact = {<Componente msg="Soy un componente pasado como prop"/>} />
        <hr />
        {/* <Estado/>
        <hr /> */}
        <RenderizadoCondicional/>
        <hr />
        <RenderizadoElementos/>
        <hr />
        <EventosES6/>
        <hr />
        <EventosES7/> 
        <hr />
        <MasSobreEventos/> 
        <hr />
        <ComunicacionComponentes/>
      </section>
    </>
  )
}

export default App
