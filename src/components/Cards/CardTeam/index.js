import React from 'react'
import './style.scss';
import { Button } from 'react-bootstrap';



function CardTeam(props) {

  return <div className="cardteam-cont">
    <h1>{props.name}</h1>
    <img src={props.image} alt={props.name} className="cardteam-img"/>
    <div className="cardteam-power">
      <h2>Powerstats:</h2>

    <span>Combate: {props.powerstats.combat} </span>
    <span>Durabilidad: {props.powerstats.durability} </span>
    <span>Inteligencia: {props.powerstats.intelligence} </span>
 
    <span>Poder: {props.powerstats.power} </span>
    <span>Velocidad: {props.powerstats.speed} </span>
    <span>Fuerza: {props.powerstats.strength} </span>
    </div>
    <Button variant="primary">Detalles</Button>
    <Button variant="danger">Eliminar</Button>
    </div>
}

export default CardTeam;