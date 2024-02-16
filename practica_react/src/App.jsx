import { useState } from 'react'
import './App.css'
import Card from './componentes/Card'
import vehicles from './data/detalles'

function App() {
  const [count, setCount] = useState(0)
  const vehiclesList = vehicles.map(v => {
    return <Card title={v.name} description={v.description}/>
  })

  return (
    <>
    <div className="App">
      <h1>bueno</h1>
      <div className="conteiner">
        {vehiclesList}
      </div>
      </div>
    </>
  )
}

export default App
