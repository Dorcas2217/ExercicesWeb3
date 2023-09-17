import Header from './Component/Header'
import Content from './Component/Content'
import Total from './Component/Total'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 90
  const part2 = 'Using props to pass data'
  const exercises2 = 80
  const part3 = 'State of a component'
  const exercises3 = 14
  const totalPart = 3
  const totalExercises = 3
  const parts = [{"part": part1, "ex":exercises1},
                {"part":part2, "ex":exercises2}, 
                { "part":part3, "ex": exercises3}];

  return (
    <div>
      <Header course = {course} />
      <Content parts = {parts} />   
      <Total totalPart = {totalPart} totalExercises = {totalExercises}/> 
    </div>
  )
}

export default App