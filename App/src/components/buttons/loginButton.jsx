import React from 'react'
import {FiLogIn} from 'react-icons/fi'
const loginButton = () =>{
    return (
        <a href="#" style={{color:"black",textDecoration: "none",borderRadius:"8px", padding:"4px", background: "linear-gradient(0deg, rgba(82,233,133,1) 0%, rgba(119,212,255,1) 100%)"}}>
            Entrar<FiLogIn style={{marginLeft:"4px", color:"black"}}/>
        </a>
    )
}


export default loginButton