
import { useRef, useState } from 'react';
import './App.css'

function App() {
  // Controlled Components 
  // let [name , setName] = useState("")
  // let [pass , setPass] = useState("")
  // let handleName = (e) => {
  //   // console.log(e.target);
  //   console.log(e.target.value);
  //   setName(e.target.value);
  // };
  // let handlePassword = (e)=>{
  //   console.log(e.target.value);
  //   setPass(e.target.value);
    
  // }

  // let [name, setName] = useState("");
  // let [pass, setPass] = useState("");

  // let handleChange = (e)=>{
  //   if (e.target.name == "firstName") {
  //     const capsName = (e.target.value).toUpperCase();
  //     setName(capsName);
  //   } else if (e.target.name == "password") {
  //     setPass(e.target.value);
  //   }
  // }


  // Using ref hook : 
  const refObject = useRef()
  function handleChange(e){
    e.preventDefault()
    console.log(e);
    console.log((refObject.current.value).toUpperCase() );
    
  }

  return (
    <>
      {/* <h1>FOrms Tutorial</h1>
      <br />
      <form >
        <label>Username:  </label>
        <input type="text" value={name} onChange={handleName}/>
        <br /><br />
        <label>Password</label>
        <input type='text' value={pass} onChange={handlePassword}></input>
        
      </form> */}

      {/* If here are multiple input fields then how we can operate it with on single function  */}

      {/* <h1>Forms Tutorial</h1>
      <br />
      <form>
        <label>Username: </label>
        <input
          type="text"
          name="firstName"
          value={name}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Password</label>
        <input
          type="text"
          name='password'
          value={pass}
          onChange={handleChange}
        />
      </form> */}


      {/* If we want to use uncontrolled components  */}

      <h1>Forms Tutorial</h1>
      <br />
      <form onSubmit={handleChange}>
        <label>Username: </label>
        <input
          type="text"
          ref={refObject}
        />
        <button type='submit'>Submit</button>
        </form>
    </>
  );
}

export default App
