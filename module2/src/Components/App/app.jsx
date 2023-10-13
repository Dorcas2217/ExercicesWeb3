import { useState } from 'react'
import Display from '../Display/Display'
import Button from '../Button/Button'

const App = () => {
    const [counter, setCounter] = useState( JSON.parse(localStorage.getItem("counter")));
  
    console.log('rendering with counter value', counter)
  
    const  changeCount = (delta) => {
        setCounter(counter + delta);
        localStorage.setItem("counter", JSON.stringify(counter + delta )); 
        /** 
         *  en fait içi je sui obligé de retenir dans le local counter + delta  
        car counter est une const et donc quand je fais le set il ne change jamais 
        mais setCounter est toujours important c'est juste qu'il s'agit de 2 états différents
        */
        }
  
    return (
      <div>
        <Display counter={counter} />
        <Button changeCount={changeCount} text="plus" delta={1} />
        <Button changeCount={changeCount} text="zero" delta={-counter}/>
        <Button changeCount={changeCount} text="minus" delta={-1} />
      </div>
    )
  } 


 

export default App