import React, {useState} from "react";
import {FiArrowUpCircle, FiArrowDownCircle} from 'react-icons/fi';

import "./style.css"

function VoteButton() {
    const [votes, setVotes] = useState(0);
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

    return (
        <div className="vote">
            <button className="up" onClick={handleUpVote} disabled={hasUpVoted}><FiArrowUpCircle className="Fiup"/>
            </button>
            <p style={votes >= 0 ? {color: "darkgreen"} : {color: "darkred"}}>{votes}</p>
            <button className="down" onClick={handleDownVote} disabled={hasDownVoted}><FiArrowDownCircle
                className="Fidown"/></button>
        </div>
    );

}

export default VoteButton;
