import {useState} from 'react';
import {useHistory} from "react-router-dom";
import { Button } from 'react-bootstrap';
import './style.scss';


function Searchbar() {
const history = useHistory();
const [keyword,setKeyword] = useState("");

function handleClick(){

    if(keyword.length>0){history.push({
     pathname:  `/search/${keyword}`, 
     })
    }
    }


  return (   
    <>
     <input 
     value={keyword}
     placeholder={"Buscar..."}
     onChange={(e) => setKeyword(e.target.value)}
    />
    <Button variant="danger" onClick={handleClick}>Buscar</Button>
    

    </>
    
  )
}

export default Searchbar;

