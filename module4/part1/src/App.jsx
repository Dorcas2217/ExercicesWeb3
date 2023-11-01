import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' ,
      phone:11111
    }
  ]) 
  const [newName, setNewName] = useState('')

  const [newNumber, setNewNumber] = useState()

  const handleName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      phone: newNumber
    }
    setPersons(persons.concat(newPerson))
    setNewName('')
  }

  

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson} >
        <div>
          name: <input type="text" value={newName} onChange={handleName} />
        </div>
        <div>
          number <input  value={newNumber} onChange={handleNumber} />
        </div>
            <button type="submit">add</button>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person,i ) => 
        <li key= {i} >
          {person.name} {person.phone}
        </li> )}
      </div>
    </div>
  )
}

export default App