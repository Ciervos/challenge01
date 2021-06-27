import {useEffect,useState} from 'react'
import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function TeamInfo() {
    const team = localStorage.getItem('team');
    const ourteam = team? JSON.parse(team): [];  
    const [ourpowerstats,setOurpowerstats] = useState({combat: 0,
    durability: 0,
    intelligence: 0,
    power: 0,
    speed: 0,
    strength: 0});
    const [inorderpowers,setInorderpowers] = useState([])
    const [heightandweight,setheightandweight] = useState({height: 0, weight: 0})


    useEffect(() => {
      powerstatsCalc()
      sizeweightProm()
     
      
      },[inorderpowers]);

      function powerstatsCalc(){
      let power = 0;
      let combat = 0;
      let intelligence = 0;
      let durability = 0;
      let speed = 0;
      let strength= 0;
      let full = {};

        ourteam.map((superh,key)=>{
            
            
            power = parseInt(superh.powerstats.power)+power
            combat = parseInt(superh.powerstats.combat)+combat
            intelligence = parseInt(superh.powerstats.intelligence)+intelligence
            durability = parseInt(superh.powerstats.durability)+durability
            speed = parseInt(superh.powerstats.speed)+speed
            strength = parseInt(superh.powerstats.strength)+strength

            
            full = {combat,durability,intelligence,power,speed,strength}
            setOurpowerstats(full)
          }) 
        orderPowerstats()
  
         }
      
      function orderPowerstats(){

        let valores = Object.values(ourpowerstats)
        let sortedArray = valores.sort(function(a, b) { return b - a; });
        let sortedObj = [];
        

        sortedArray.map((num,key)=>{
          if(num===ourpowerstats.combat){
            sortedObj.push({name: "Combate", number: num})  
          }else if(num===ourpowerstats.power){
            sortedObj.push({name: "Poder", number: num})   
          }else if(num===ourpowerstats.durability){
            sortedObj.push({name: "Durabilidad", number: num})    
          }else if(num===ourpowerstats.intelligence){
            sortedObj.push({name: "Inteligencia", number: num})    
          }else if(num===ourpowerstats.speed){
            sortedObj.push({name: "Velocidad", number: num})    
          }else if(num===ourpowerstats.strength){
            sortedObj.push({name: "Fuerza", number: num})  
          }  
          })

        setInorderpowers(sortedObj) 
        

        }

        function sizeweightProm(){
            
            let height = 0;
            let weight = 0;
            let full = {};
          
      
            ourteam.map((superh,key)=>{
              
              height = parseInt(superh.appearance.height[1])+height
              weight = parseInt(superh.appearance.weight[1])+weight
                    
              full = {height: parseInt(height/ourteam.length), weight:parseInt(weight/ourteam.length)}
            })
      
            setheightandweight(full)
         
            }  
         
      return <Container fluid className="teaminfo-cont">
      <Row>
      <Col>
      <h1>Equipo Actual:</h1>
      </Col>
      </Row>    
      <Row className="teaminfo-inforow">
      <Col>
      {inorderpowers.map((power,key)=>{
     
     if(key===0){
        return(<Row key={key}><span className="teaminfo-mainpower">{power.name}:</span><span>{power.number}</span></Row>)   
     }else{
     return(<Row key={key}><span>{power.name}: {power.number}</span></Row>)
    }
   })}
      </Col>    
      <Col>
      <p>Altura Promedio: {heightandweight.height}cm</p>
      <p>Peso Promedio:  {heightandweight.weight}Kg</p>
      
      </Col>
      </Row> 
      </Container>
    }
    
    export default TeamInfo;