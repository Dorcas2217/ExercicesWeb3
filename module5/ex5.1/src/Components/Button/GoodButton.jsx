import { Context as LanguageContext } from "../../Context/counterContext";
import { useContext } from "react";

const GoodButton = ({}) => {
    const {good, increaseGood} = useContext(LanguageContext)

    return ( 
        <>
        <p>Good : {good}</p>
        <button onClick={increaseGood} >increase Good </button>
        </>
    )
}

export default GoodButton