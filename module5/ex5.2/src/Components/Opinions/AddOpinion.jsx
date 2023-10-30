import React, { useContext } from "react";
import {Context as  OpinionContext } from "../../Context/counterContext";

const AddOpinions = () => {
  const addOpinion = useContext(OpinionContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const opinionLabel = e.target.label.value;
    addOpinion(opinionLabel);
    e.target.reset(); // Réinitialise le formulaire après soumission
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="label" />
        <input type="submit" value="Add Opinion" />
      </form>
    </div>
  );
};

export default AddOpinions;
