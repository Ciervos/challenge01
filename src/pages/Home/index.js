import React,{useEffect} from 'react'
import './style.scss';
import { useHistory } from "react-router-dom";


function Home() {
    let history = useHistory();


    useEffect(() => {
        const token = localStorage.getItem('token');

        if(!token){
            history.push("/login");   
        }
      });

  return <>
    
    Aquí le vamos
    
    </>
}

export default Home;