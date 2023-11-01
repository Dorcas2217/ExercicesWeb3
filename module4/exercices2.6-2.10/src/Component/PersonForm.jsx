const PersonForm = ({ handleAddPerson, newName, handleName,
     newNumber, handleNumber }) =>{

    return(
      <div>
          <form onSubmit={handleAddPerson} >
        <div>
          name: <input  value={newName} onChange={handleName} />
        </div>
        <div>
          number <input  value={newNumber} onChange={handleNumber} />
        </div>
            <button type="submit">add</button>
        </form>
      </div>
    ) 
}

export default PersonForm