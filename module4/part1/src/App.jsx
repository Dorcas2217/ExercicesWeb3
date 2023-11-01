import { useState, useEffect } from 'react'

const App = () => {
  const Persons = [
    { name: 'Arto Hellas', phone: '040-123456', id: 1 },
    { name: 'Ada Lovelace', phone: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phone: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phone: '39-23-6423122', id: 4 }
  ]
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
  // it important to notice that you have to work Persons table origin if no the display of the table doesn't work after a research
  useEffect( () => {
    setPersons( Persons.filter(p => p.name.toLowerCase().includes(toSearch.toLowerCase())))
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
      <div>
        filter shown with <input type="text" value={toSearch} onChange={handleToSearch} />
      </div>
      <form onSubmit={addPerson} >
        <div>
          name: <input  value={newName} onChange={handleName} />
        </div>
        <div>
          number <input  value={newNumber} onChange={handleNumber} />
        </div>
            <button type="submit">add</button>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => 
        <li key= {person.id} >
          {person.name} {person.phone}
        </li> )}
      </div>
    </div>
  )
}

export default App