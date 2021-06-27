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
    const goodali = localStorage.getItem('goodones')
    const badali = localStorage.getItem('badones')
    const [superteam,setSuperteam] = useState(team ? JSON.parse(team): []);
    const [isflipped,setIsFlipped] = useState(false)
    const [good, setGood] = useState(goodali? parseInt(JSON.parse(goodali)): 0 )
    const [bad, setBad] = useState(badali? parseInt(JSON.parse(badali)): 0 )

    useEffect(() => {
       
        
        if(!token){
            history.push("/login");   
        }

       
        if(info){
          newSuper(info)
           
        }
      }, []);


   function newSuper(info){
         
         let isokay = false
         

       if(info.biography.alignment==="good" && good<3){
        isokay = !isokay
        let newgood = good + 1;
        
        localStorage.setItem('goodones', JSON.stringify(newgood))
        setGood(newgood)
        

       }else if(info.biography.alignment==="bad"&& bad<3){
        isokay = !isokay
        let newbad = bad + 1;
        
        localStorage.setItem('badones', JSON.stringify(newbad))
        setBad(newbad)
        
       }

       if(superteam.length<6 && isokay){  
       setSuperteam([...superteam,info])
       localStorage.setItem('team', JSON.stringify([...superteam,info]))
      }else{
       alert("El equipo solo puede tener 6 miembros. máx 3 buenos,3 malos, no neutrales.") 
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
     <CardTeam key={key} id={superh.id} name={superh.name} image={superh.image.url} powerstats={superh.powerstats} alignment={superh.biography.alignment} cb={handleCb} flip={handleflip}/>
     <CardInfo key={key} info={superh} flip={handleflip}/>
     </ReactCardFlip></Col>)
   })}

  </Row>

    </Container>
    
    </>
}

export default Home;