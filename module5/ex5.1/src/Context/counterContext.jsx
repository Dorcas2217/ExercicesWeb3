import React, { useState } from "react";

const Context = React.createContext(null) // pourquoi null ? 

    
const ProviderWrapper = (props) => {
    const [good, setGood] = useState(0);
    const [ok, setOk] = useState(0);
    const [bad, setBad] = useState(0);

    const increaseGood = () => { setGood(good + 1)}
    const increaseOk = () => { setOk(ok + 1)}
    const increaseBad = () => { setBad(bad +1)}
    const resetAll = () => {
        setGood(good - good),
        setOk(ok - ok ),
        setBad(bad - bad)
    }
    

    const exposedValue = {
        good, increaseGood,
        ok, increaseOk,
        bad, increaseBad, resetAll
    }

    
    return <Context.Provider value={exposedValue}>
        { props.children }
    </Context.Provider>    
}
    
export {    
    Context,
    ProviderWrapper,    
}    
