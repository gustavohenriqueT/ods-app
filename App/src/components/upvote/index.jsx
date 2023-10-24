import React, {useState} from "react";
import {FiArrowUpCircle, FiArrowDownCircle} from 'react-icons/fi';

import "./style.css"

function VoteButton() {
  const [votes, setVotes] = useState(0);

  const handleUpVote = () => {
    setVotes(votes + 1);
  };

  const handleDownVote = () => {
    setVotes(votes - 1);
  };

  return (
    <div className="vote">
      <button className="up" onClick={handleUpVote}><FiArrowUpCircle className="Fiup"/></button>
      <p> Votes: {votes}</p>
      <button className="down" onClick={handleDownVote}><FiArrowDownCircle className="Fidown"/></button>
    </div>
  );

}

export default VoteButton;
