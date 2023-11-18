import React from "react";
import {FiInfo} from 'react-icons/fi';
import { Link } from "react-router-dom";

 const dadosButton = () =>{
    return(
        <Link to="/dados" style={{textDecoration: 'none'}}>
        <a style={{ color:'#010101', position:'relative'}} >
            Dados<FiInfo style={{position:'relative', top:'1px', left:'5px'}}
            /></a>
            </Link>
        )
}

export default dadosButton
