import React, { useContext } from "react";
import {Context as  OpinonContext } from "../../Context/counterContext";

const Opinions = () => {
  const { vote, increaseVote } = useContext(OpinonContext);
  const opignonList = useContext(OpinonContext);

  return (
    <div>
      {opignonList.map(opi => (
        <div key={opi.id}>
          <p>Opinion {opi.label} : {vote}</p>
          <button onClick={increaseVote}>Vote</button>
        </div>
      ))}
    </div>
  );
};

export default Opinions;
