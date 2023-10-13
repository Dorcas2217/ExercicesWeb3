import { Context as LanguageContext } from "../../Context/counterContext";
import { useContext } from "react";

const BadButton = ({}) => {
    const { bad,increaseBad} = useContext(LanguageContext)

    return ( 
        <>
        <p>Good : {bad}</p>
        <button onClick={increaseBad} >increase Bad </button>
        </>
    )
}

export default BadButton