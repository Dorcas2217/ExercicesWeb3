import { useState, useEffect } from 'react'
import PersonForm from './PersonForm'
import Search from './Search'
import PersonsDisplay from './PersonsDisplay'
import axios from 'axios'


const App = () => {
  
  const [persons, setPersons] = useState([])

  //fetch('api/phonebooks').then((res) => res.json()).then((res) => setPersons(res));

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
  .get('api/phonebooks')
  .then(response => {
    const Persons = response.data

    setPersons(Persons.filter(p => p.nom.toLowerCase().includes(toSearch.toLowerCase())))
    
  })
  }, [toSearch])

  const handleToSearch = (event) => {
    setToSearch(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      nom: newName,
      number: newNumber
    }
    axios.post('api/phonebooks/add', newPerson)
    .then(response => {
      setPersons(persons.concat(response.data))
      setNewName('')
      setNewNumber('')
    })
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