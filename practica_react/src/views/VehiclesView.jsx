import React from 'react'
import "./VehiclesView.css"

function VehiclesView({vehicle}) {
  return (
    <div className='VehiclesView'>
        <h1>{vehicle.name}</h1>
        <h2>{vehicle.description}</h2>
        <img src={vehicle.image} alt={vehicle.name + " image"} />

    </div>
  )
}

export default VehiclesView