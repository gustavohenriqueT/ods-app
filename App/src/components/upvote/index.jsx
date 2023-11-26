import React, {useEffect, useState} from "react";
import {FiArrowUpCircle, FiArrowDownCircle} from 'react-icons/fi';

import "./style.css"

function VoteButton({idmensagem}) {
    const [currentVotes, setCurrentVotes] = useState({
        id: 0,
        total:0
    });
    const [votes, setVotes] = useState('');
    const [initialState] = useState(votes)
    const [hasUpVoted, setHasUpVoted] = useState(false);
    const [hasDownVoted, setHasDownVoted] = useState(false);
    const handleUpVote = () => {
        setVotes(initialState + 1);
        setHasUpVoted(true)
        setHasDownVoted(false)
    };

    const handleDownVote = () => {
        setVotes(initialState - 1);
        setHasDownVoted(true)
        setHasUpVoted(false)
    };
    const getVotos = async () => {
        try {
            const response = await fetch('http://localhost:3007/getVotoMensagem', {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body:
                    JSON.stringify({ idmensagem}),
            });
            if (response.ok) {
                const data = await response.json();
                setCurrentVotes({id: data.idmensagem, total: data.totalvotos})
            }
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(()=>{getVotos()},[])
    return (
        <div className="vote">
            <button className="up" onClick={handleUpVote} disabled={hasUpVoted}><FiArrowUpCircle className="Fiup"/>
            </button>
            <p style={currentVotes.total >= 0 ? {color: "darkgreen"} : {color: "darkred"}}>{currentVotes.total}</p>
            <button className="down" onClick={handleDownVote} disabled={hasDownVoted}><FiArrowDownCircle
                className="Fidown"/></button>
        </div>
    );

}

export default VoteButton;
