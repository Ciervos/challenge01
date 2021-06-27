import React,{useEffect,useState} from 'react'
import './style.scss';
import { useHistory, useLocation } from "react-router-dom";
import Searchbar from '../../components/Searchbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import noimage from '../../img/default.png';
import CardSuper from '../../components/Cards/CardSuper';
const axios = require('axios');


function HiringSuper() {
    const history = useHistory();
    const location = useLocation(); 
    const [superteam,setSuperteam] = useState([{name:"No Results",image:{url: noimage}}]);
    const getwho = location.pathname.split("/");
    const who = getwho[2];
    const ACCESS_TOKEN = 10158424284950662
    const baseUrl =`https://superheroapi.com/api.php/${ACCESS_TOKEN}/search`
    

    useEffect(() => {
        const token = localStorage.getItem('token');
       
        if(!token){
            history.push("/login");   
        }
        

        axios.get(`${baseUrl}/${who}`)          
         .then(function (response) {
           
          if(response.data.response ==="success"){
            setSuperteam(response.data.results)
          }else{
            alert("No hay coincidencias")
          } 
        
         })
         .catch(function (error) {
          console.log(error)
        });;
        
      });



  return <>
    
    
    <Container fluid className="hs-cont">
    <Row>
      <Searchbar/>
    </Row>
    <Row>
    {superteam.map((superh,key)=>{
     return(<Col><CardSuper key={key} name={superh.name} image={superh.image.url} info={superh}/></Col>)
   })}

  </Row>

    </Container>
    
    </>
}

export default HiringSuper;