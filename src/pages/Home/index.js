import React,{useEffect,useState} from 'react'
import './style.scss';
import { useHistory, useLocation } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardTeam from '../../components/Cards/CardTeam';
import CardInfo from '../../components/Cards/CardInfo';
import TeamInfo from '../../components/TeamInfo';
import noimage from '../../img/default.png';
import Searchbar from '../../components/Searchbar';
import ReactCardFlip from 'react-card-flip';


function Home() {
    const history = useHistory();
    const location = useLocation();
    
    const info = location.info;
    const token = localStorage.getItem('token');
    const team = localStorage.getItem('team');
    const [superteam,setSuperteam] = useState(team ? JSON.parse(team): []);
    const [isflipped,setIsFlipped] = useState(false)

    useEffect(() => {
       
        
        if(!token){
            history.push("/login");   
        }

       
        if(info){
          newSuper(info)
           
        }
      }, []);


   function newSuper(info){
         
       if(superteam.length<6){  
       setSuperteam([...superteam,info])
       localStorage.setItem('team', JSON.stringify([...superteam,info]))
      }else{
       alert("No se puede ingresar más supers") 
      }
        }

   function handleCb(data){
    
     setSuperteam(data)

   }

   function handleflip(){
     setIsFlipped(!isflipped)
   }

  return <>
    
    
    <Container fluid className="home-cont">
    <Row>
      <Searchbar/>
    </Row>
    <Row>
      <TeamInfo/>
    </Row>
    <Row>
    {superteam.map((superh,key)=>{
     return(<Col>
     <ReactCardFlip isFlipped={isflipped} flipDirection="horizontal">
     <CardTeam key={key} id={superh.id} name={superh.name} image={superh.image.url} powerstats={superh.powerstats} cb={handleCb} flip={handleflip}/>
     <CardInfo key={key} info={superh} flip={handleflip}/>
     </ReactCardFlip></Col>)
   })}

  </Row>

    </Container>
    
    </>
}

export default Home;