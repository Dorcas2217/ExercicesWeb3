import { Context as LanguageContext } from "../../Context/counterContext";
import { useContext } from "react";

const OKButton = ({}) => {
    const { ok,increaseOk} = useContext(LanguageContext)

    return ( 
        <>
        <p>Good : {ok}</p>
        <button onClick={increaseOk} >increase ok </button>
        </>
    )
}

export default OKButton