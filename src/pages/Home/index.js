import React,{useEffect,useState} from 'react'
import './style.scss';
import { useHistory } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardTeam from '../../components/Cards/CardTeam';
import noimage from '../../img/default.png';



function Home() {
    const history = useHistory();
    const [superteam,setSuperteam] = useState([{name:"Espacio libre",image:noimage},{name:"Espacio libre",image:noimage},{name:"Espacio libre",image:noimage},{name:"Espacio libre",image:noimage},{name:"Espacio libre",image:noimage},{name:"Espacio libre",image:noimage}]);
    

    useEffect(() => {
        const token = localStorage.getItem('token');

        if(!token){
            history.push("/login");   
        }
      });

  return <>
    
    
    <Container fluid className="home-cont">

    <Row>
    {superteam.map((superh,key)=>{
     return(<Col><CardTeam key={key} name={superh.name} image={superh.image}/></Col>)
   })}

  </Row>

    </Container>
    
    </>
}

export default Home;