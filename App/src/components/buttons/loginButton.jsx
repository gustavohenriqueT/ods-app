import React from 'react'
import {FiLogIn} from 'react-icons/fi'
const loginButton = () =>{
    return (
        <a href="#" style={{textDecoration:"none", color:'#010101', position:'relative'}}>
            Entrar<FiLogIn style={{position:'absolute', top:'1px'}}/>
        </a>
    )
}


export default loginButton