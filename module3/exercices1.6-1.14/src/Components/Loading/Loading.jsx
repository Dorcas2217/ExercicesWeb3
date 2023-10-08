import { useState } from "react";
const Button = (props) => <button onClick={props.handleCilck}> {props.text} </button> 
    
const Statistic = (props) =>{ return(
    <ul>
        <li> {props.text}  : {props.value} </li>
        
    </ul>
)
}

const Loading = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good+1);
  }

  const handleNeutral = () => {
    setNeutral(neutral+1);
  }

  const handleBad = () => {
    setBad(bad+1);
  }

  const moyenne = ((good + neutral + bad)/3)
  const pourcent = moyenne === 0 ? 0 : ((good / moyenne) * 100)
  return (
    <div>
  <h2>Give feedback</h2>
   <Button handleCilck = {handleGood} text = "good" /> 
   <Button handleCilck = {handleNeutral} text = "neutral" /> 
   <Button handleCilck = {handleBad} text = "bad" /> 

  <h3>Statistics</h3>
  <Statistic text= "good " value={good}/>
  <Statistic text="neutral" value={neutral} />
  <Statistic text="bad"  value= {bad} />
  <Statistic text= "moyenne" value= {moyenne} />
  <Statistic text= "average" value={pourcent} />
</div>
  )
}



export default Loading