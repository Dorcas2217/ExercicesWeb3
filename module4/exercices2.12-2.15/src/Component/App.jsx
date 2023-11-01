import { useState, useEffect } from 'react'
import PersonForm from './PersonForm'
import Search from './Search'
import PersonsDisplay from './PersonsDisplay'
import axios from 'axios'


const App = () => {
  
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')

  const [newNumber, setNewNumber] = useState('')

  const [toSearch, setToSearch] = useState('')

  const handleName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumber = (event) => {
    setNewNumber(event.target.value)
  }
  
  useEffect( () => {
    axios
  .get('http://localhost:3001/persons')
  .then(response => {
    const Persons = response.data
    setPersons(Persons.filter(p => p.name.toLowerCase().includes(toSearch.toLowerCase())))
    
  })
  }, [toSearch])

  const handleToSearch = (event) => {
    setToSearch(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      id: persons.length + 1,
      name: newName,
      phone: newNumber
    }
    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Search toSearch = {toSearch} handleToSearch = {handleToSearch} />
      <PersonForm handleAddPerson = {addPerson} newName={newName} 
      handleName={handleName} newNumber={newNumber} handleNumber={handleNumber}/>
      <h2>Numbers</h2>
      <PersonsDisplay persons = {persons}/>
    </div>
  )
}

export default App