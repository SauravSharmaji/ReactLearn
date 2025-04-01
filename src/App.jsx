

import { useState } from 'react';
import './App.css'

function App() {
const [count, setCount] = useState(0);
const addvalue = ()=>{
  if (count <= 19){
    setCount(count + 1 ) ;
  }
   
}
const removevalue = ()=>{
  if (count <= 0){
    
  }else{
    setCount( count - 1); ;
  }
 
}
  return (
    <>
      <h1>Counter</h1>
      <p>couter value {count}</p>
      <button onClick={addvalue} className='border-2 border-amber-500 bg-amber-400 text-white p-3 rounded-2xl m-2'>Add Value</button>
      <button onClick={removevalue} className='border-2 border-blue-500 bg-blue-400 text-white p-3 rounded-2xl m-2'>Remove Value</button>

    </>
  )
}

export default App
