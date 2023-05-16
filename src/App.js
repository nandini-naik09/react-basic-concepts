import React, { useState } from 'react'
import Header from './Header'

export default function App() {
  const [state, setState] = useState("Pooja")
  const [age, setAge] = useState("20")
  

  return (
    <div>
      <Header name={'Nandini'}
      age={30}
      />
  
    Name: {state}
     <br/>
    Age: {age}

    <br/>
    <br/>
    <br/>
      <button onClick={()=>{setState('Nandini')}}>
        Set Name
      </button>
      
      
      <button onClick={()=>{setAge('30')}}>
        Set Age
      </button>
    </div>
  )
}