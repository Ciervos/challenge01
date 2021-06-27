import React from 'react'
import './style.scss';
import { Button } from 'react-bootstrap';



function CardTeam(props) {
 
  function handleDelete(){
    
  let team =  localStorage.getItem('team')
  let ourteam = JSON.parse(team)
  let indx = ourteam.findIndex((element) => element.id === props.id)
  
  ourteam.splice(indx,1)
  localStorage.setItem('team', JSON.stringify(ourteam))
  props.cb(ourteam)
  

  }

  function handleClick(){
    props.flip()
  }

  return <div className="cardteam-cont">
    <h1>{props.name}</h1>
    <img src={props.image} alt={props.name} className="cardteam-img"/>
    <div className="cardteam-power">
      <h2>Powerstats:</h2>

    <span>Combate: {props.powerstats.combat} </span>
    <span>Resistencia: {props.powerstats.durability} </span>
    <span>Inteligencia: {props.powerstats.intelligence} </span>
 
    <span>Poder: {props.powerstats.power} </span>
    <span>Velocidad: {props.powerstats.speed} </span>
    <span>Fuerza: {props.powerstats.strength} </span>
    </div>
    <Button variant="primary" onClick={handleClick}>Detalles</Button>
    <Button variant="danger" onClick={handleDelete}>Eliminar</Button>
    </div>
}

export default CardTeam;