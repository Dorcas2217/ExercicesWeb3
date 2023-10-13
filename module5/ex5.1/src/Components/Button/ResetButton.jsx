import { Context as LanguageContext } from "../../Context/counterContext";
import { useContext } from "react";

const ResetButton = ({}) => {
    const {resetAll} = useContext(LanguageContext)

    return ( 
        <>     
        <button onClick={resetAll} > reset All buttons </button>
        </>
    )
}


export default ResetButton