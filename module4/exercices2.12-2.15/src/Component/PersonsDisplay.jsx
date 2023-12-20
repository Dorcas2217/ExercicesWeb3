import Person from "./Person"

const PersonsDisplay = ({persons}) => {
    return(
        <div>
        {persons.map((p) => 
        <Person key={p.id} person={p} />
        )}
      </div>
    )
}

export default PersonsDisplay