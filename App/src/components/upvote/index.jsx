import React, {useState} from "react";

function VoteButton() {
  const [votes, setVotes] = useState(0);

  const handleUpVote = () => {
    setVotes(votes + 1);
  };

  const handleDownVote = () => {
    setVotes(votes - 1);
  };

  return (
    <div>
      <button onClick={handleUpVote}>Up</button>
      <button onClick={handleDownVote}>Down</button>
      <p> Votes: {votes}</p>
    </div>
  );

}

export default VoteButton;
