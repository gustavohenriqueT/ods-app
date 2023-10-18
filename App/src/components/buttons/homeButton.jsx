import React from "react";
import {FiHome} from 'react-icons/fi';
import { Link } from "react-router-dom";

 const homeButton = () =>{
    return(
        <Link to="/" style={{textDecoration: 'none'}}>
        <a style={{ color:'#010101', position:'relative'}} >
            Inicio<FiHome style={{position:'relative', top:'1px', left:'5px'}}
            /></a>
            </Link>
        )
}

export default homeButton
