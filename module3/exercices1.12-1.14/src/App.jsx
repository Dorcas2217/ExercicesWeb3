import { useState } from 'react'
import {Button, Vote } from './Button';
import anecdotes from './data';

const App = () => {


const [Points, setPoints] = useState(new Array(anecdotes.length).fill(0));


const [selected, setSelected] = useState(0);

const getRandomAnecdote = () => {
    setSelected( Math.floor(Math.random() * anecdotes.length));
}

const getVote = () => {
    const copy = [...Points]
    copy[selected] += 1
    setPoints(copy)
    
  }

const getBestAnecdote = () => {
    let max = Points[0];
    let maxIndex = 0;

    for (let i = 0; i < Points.length; i++) {
        if (Points[i] > max) {
        max = Points[i];
        maxIndex = i;
        }
    }
    return  maxIndex;
}

const bestAnecdoteIndex = getBestAnecdote();
const bestAnecdote = anecdotes[bestAnecdoteIndex];

  return (
    <div>
        <h2>Anectdote of the day </h2>
      {anecdotes[selected]} <div> has {Points[selected]} vote </div>
      <Vote handleVote= {getVote} text = "Vote"/>
      <Button handleAnecdote = {getRandomAnecdote} text = "next anecdote" />
        <h2>Anecdote with most votes </h2>
        <div>
        {bestAnecdote} <div> has {Points[bestAnecdoteIndex]} votes </div> vote 
        </div>
    </div>
  )
}

export default App
