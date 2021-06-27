import React from 'react'
import './style.scss';
import { Button } from 'react-bootstrap';

function CardInfo(props) {
  
  function handleClick(){
    props.flip()
  }
  return <div className="cardinfo-cont">
    <h1>{props.info.name}</h1>
    <img src={props.info.image.url} alt={props.info.name} className="cardinfo-img"/>

    <p><span>Peso:</span> {props.info.appearance.weight[1]}</p>
    <p><span>Altura:</span> {props.info.appearance.height[1]}</p>
    <p><span>Nombre:</span> {props.info.biography.["full-name"]} </p>
    <p><span>Alias:</span> {props.info.biography.aliases[0]} </p>
    <p><span>Color de ojos:</span> {props.info.appearance.["eye-color"]} </p>
    <p><span>Color de cabello:</span> {props.info.appearance.["hair-color"]} </p>
    <p><span>Lugar de trabajo:</span> {props.info.work.base} </p>
    
    <Button variant="primary" onClick={handleClick}>Powerstats</Button>
    
    
    </div>
}

export default CardInfo;