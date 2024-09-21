import { useCallback, useEffect, useState , useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [specialChars, setSpecialChars] = useState(false);
  const [password, setPassword] = useState("");

  // React me useCallback hook ko tab use kiya jata hai jab aapko ek function ko memoize karna hota hai, taki unnecessary re-renders ko roka ja sake. Yeh tab kaam aata hai jab aap ek function ko pass kar rahe hote hain as a prop to child components aur aap nahi chahte ki woh function har render par recreate ho.

  //   const memoizedCallback = useCallback(() => {
  //   // your logic here
  // }, [dependencies]);
  // const passwordGenerator = ()=>{}

  // But optimized approach is this :
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (specialChars) str += "!@#$%^&*()_+=-{}[]|:;<>,.?/~";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str[char];
    }

    setPassword(pass);
  }, [length, specialChars, numberAllowed, setPassword]);

  // Ref hook : Whenever we want refrence of something then we use useRef hook
  const passwordRef = useRef(null); // we used this to give good UX

  // Copy Button using ref Hook :
  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select(); // This is for good UI we are using hook because we are changing UI in react
    // passwordRef.current?.setSelectionRange(0,20);
    window.navigator.clipboard.writeText(password); // This will copy to clipboard
  }, [password]);

  // setPassword is used only for memorization : Stored in cache
  // We can also remove it

  // useEffect hook is used to run side effects after render, it is a good place to put API calls, subscriptions, or other side effects that affect the component's render output.

  // If there is any change in dependecies value then please call passwordGenerator()
  // This is the optimized way of calling passwordGenerator
  // Run with help of useEffect .
  useEffect(() => {
    passwordGenerator();
  }, [length, specialChars, numberAllowed, passwordGenerator]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8  bg-gray-700 text-orange-500">
      <h1 className="text-white text-center">Password Generator</h1>
      <div className="flex shadow rouned-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          placeholder="Password"
          className="outline-none w-full py-1 px-3"
          readOnly
          // Copy on clipboard
          ref={passwordRef}
        />
        <button
          onClick={copyToClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
        >
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={5}
            max={100}
            value={length}
            className="cursor-pointer"
            // This is for changing range value by curson its an event handler
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>Length: {length}</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label>Numbers</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="characterInput"
            onChange={() => {
              setSpecialChars((prev) => !prev);
            }}
          />
          <label>Special Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App
