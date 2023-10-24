import React from 'react'
const loginButton = () =>{
    return (
        <div style={{maxWidth:'80px',background: 'rgb(23,74,41)',background: 'linear-gradient(0deg, rgba(23,74,41,1) 0%, rgba(23,94,24,1) 100%)  ', borderRadius:'8px', padding:'7px'}}>
            <a href="#" style={{textDecoration:"none", color:'#010101', display:"flex", gap:'4px'}}>
                <span style={{fontWeight:'700', color:'#F1F1F1'}}>Entrar</span>
            </a>
        </div>
    )
}


export default loginButton