import React from "react";
import {FiMessageSquare} from 'react-icons/fi';
import { Link } from "react-router-dom";

 const chatButton = () =>{
    return(
        <Link to="/chat" style={{textDecoration: 'none',color:'#010101', position:'relative'}}>
            Chat<FiMessageSquare style={{position:'relative', top:'1px', left:'5px'}}/>
        </Link>
        )
}

export default chatButton
