import React, { useContext } from "react";
import {Context as  OpinonContext } from "../../Context/counterContext";

const Opinions = () => {
  const { increaseVote, opinionList } = useContext(OpinonContext);
  
  return (
    <div>
      {opinionList.map(opi => (
        <div key={opi.id}>
          <p>Opinion {opi.label} : {opi.nbr_vote} <button onClick={() => increaseVote(opi.id)} >Vote</button> </p> 
        </div>
      ))}
    </div>
  );
};

export default Opinions;
