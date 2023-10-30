import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const Context = React.createContext(null);

const ProviderWrapper = (props) => {
  const [vote, setVote] = useState(1);

  const [opinionList, setOpinionList] = useState([
    {
      id: uuidv4(),
      label: 'A',
      nbr_vote: 1
    }
  ]);

  const increaseVote = (id) => {
    const updatedOpinions = opinionList.map(opinion => {
      if (opinion.id === id) {
        return { ...opinion, nbr_vote: opinion.nbr_vote + 1 };
      }
      return opinion;
    });
    setOpinionList(updatedOpinions);
    sortedOpinions();
  }

  const addOpinion = (label) => {
    const opinionExisted = opinionList.find(o => o.label === label);
    if (opinionExisted) {
      opinionExisted.nbr_vote++;
      sortedOpinions();
    } else {
      const newOpinion = {
        id: uuidv4(),
        label: label,
        nbr_vote: 1
      };
      setOpinionList([...opinionList, newOpinion]);
      sortedOpinions();
    }
  }

  const sortedOpinions = () => {
    const sortedOpinions = [...opinionList].sort((o1, o2) => o2.nbr_vote - o1.nbr_vote);
    setOpinionList(sortedOpinions);
  }

  const exposedValue = {
    vote, increaseVote, addOpinion, opinionList
  }

  return (
    <Context.Provider value={exposedValue}>
      {props.children}
    </Context.Provider>
  );
}

export {
  Context,
  ProviderWrapper
}
