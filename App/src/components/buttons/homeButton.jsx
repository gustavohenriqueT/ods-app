import React from "react";
import {FiHome} from 'react-icons/fi';
import { Link } from "react-router-dom";

 const homeButton = () =>{
    return(
        <Link to="/" style={{textDecoration: 'none',color:'#010101', position:'relative'}}>
            Inicio<FiHome style={{position:'relative', top:'1px', left:'5px'}}/>
        </Link>
        )
}

export default homeButton
