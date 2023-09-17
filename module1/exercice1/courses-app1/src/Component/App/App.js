import Header from 'Component/Header/Header'
import Content from 'Component/Content/Content'
import Total from 'Component/Total/Total'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 90
  const part2 = 'Using props to pass data'
  const exercises2 = 80
  const part3 = 'State of a component'
  const exercises3 = 14
  const totalPart = 3
  const totalExercises = exercises1 + exercises2 + exercises3
  const parts = [{ name: part1, ex:exercises1},
                { name:part2, ex:exercises2}, 
                { name:part3, ex: exercises3}];

  return (
    <div>
      <Header course = {course} />
      <Content parts = {parts} />   
      <Total totalPart = {totalPart} totalExercises = {totalExercises}/> 
    </div>
  )
}

export default App