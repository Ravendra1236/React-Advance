import { useState } from 'react'
import './App.css'

function App() {
  // useState hook with objects :

  // let [allValues , setAllValues] = useState({firstName : "Ravendra" , lastName : "Singh"})
  // function handleUpdate(){
  //   // setAllValues({ firstName: "Aman" }); This will update firstName but lastName will become empty
  //   setAllValues( {...allValues , firstName: "Aman"} );
  // }

  // useState hook with arrays :
  let [items , setItems] = useState([])

  function update(){
    setItems([...items , {id : items.length , value : Math.random()}])
  }
  return (
    <>
      {/* <h1>First Name is : {allValues.firstName} and second name is : {allValues.lastName}</h1>
      <br />
      <button onClick={handleUpdate}>Update</button> */}

      <ol>
        {
          items.map((item)=><li key={items.id}>{item.value}</li>)
        }
      </ol>
      <button onClick={update}>Add</button>
    </>
  );
}

export default App
