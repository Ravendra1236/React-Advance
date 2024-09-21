
import { useCallback, useState } from 'react'
import './App.css'
import ClassA from './component/ClassA';

function App() {

  const [add , setAdd] = useState(0);

  const Learning = useCallback(() => {

  } , []);
  return (
    <>
      <h1>useCallback Concept</h1>
      <h2>{add}</h2>
      <br />
      <ClassA Learning={Learning}></ClassA>
      <button onClick={()=>setAdd(add + 1)}>Add</button>
    </>
  )
}

export default App
