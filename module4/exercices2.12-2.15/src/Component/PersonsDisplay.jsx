const PersonsDisplay = ({persons}) => {
    return(
        <div>
        {persons.map((person) => 
        <li key= {person.id} >
          {person.name} {person.phone}
        </li> )}
      </div>
    )
}

export default PersonsDisplay