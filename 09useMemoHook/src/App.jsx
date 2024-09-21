
// import { useState } from 'react';
// import './App.css'

// function App() {
//   let [sum , setSum] = useState(0);
//   let [minus , setMinus] = useState(100);
  // // let [multi , setMulti] = useState(0);
  // // Unnecessary bbar baar call ho rha h 
  // function multiply(){
    
  //   console.log("++++++++++++++++++++++");
  //   return sum * 10;
  // }

//   return (
    // <>
    //   <h1>useMemo hook tutorial</h1>
    //   <br />
    //   <br />
    //   <span>{multiply()}</span>
    //   <button onClick={() => setSum(sum + 1)}>Add</button>
    //   <span>{sum}</span>

    //   <br />

    //   <button onClick={() => setMinus(minus - 1)}>Subtract</button>
    //   <span>{minus}</span>
    // </>
//   );
// }

// export default App

import { useMemo, useState } from 'react';
import './App.css'

function App() {
  let [sum, setSum] = useState(0);
  let [minus, setMinus] = useState(100);


  // useMemo Hook
  let multiply = useMemo(()=>{
    console.log("+++++++++++");
    return sum * 10 ;
    
  },[sum])

  return (
    <>
      <>
        <h1>useMemo hook tutorial</h1>
        <br />
        <br />
        <span>{multiply}</span>
        <button onClick={() => setSum(sum + 1)}>Add</button>
        <span>{sum}</span>

        <br />

        <button onClick={() => setMinus(minus - 1)}>Subtract</button>
        <span>{minus}</span>
      </>
    </>
  );
}

export default App

