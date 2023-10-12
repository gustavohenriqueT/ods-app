import React from 'react'
import {FiLogIn} from 'react-icons/fi'
const Usuario = require('./models/usuario_model');

await User.sync({ force: true });
console.log("The table for the User model was just (re)created!");




const loginButton = () =>{
    return (
        <a href="#" style={{textDecoration:"none", color:'#010101', position:'relative'}}>
            Entrar<FiLogIn style={{position:'absolute', top:'1px'}}/>
        </a>
    )
}


export default loginButton