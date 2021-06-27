import React from 'react'
import './style.scss';
import { useHistory} from "react-router-dom";
import { Button } from 'react-bootstrap';


function CardSuper(props) {
  const history = useHistory();

  function handleClick(){
   
    history.push({
     pathname:  `/`, 
     info: props.info
     })

    }

  return (   
    <div className="cardsuper-cont">
    <h1>{props.name}</h1>
    <img src={props.image} alt={props.name} className="cardsuper-img"/>

    <Button variant="success" onClick={handleClick}>Contratar</Button>

    </div>
    
  )
}

export default CardSuper;