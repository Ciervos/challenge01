import React from 'react'
import './style.scss';


function CardTeam(props) {
//Nombre del héroe.
// Imagen.
//Powerstats.
//Acciones para ver el detalle o eliminarlo del equipo.

  return <div>
    <h1>{props.name}</h1>
    <img src={props.image} alt={props.name} height="200px"/>
    <h2>Powerstats:</h2>

    </div>
}

export default CardTeam;