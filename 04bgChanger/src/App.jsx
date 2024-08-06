
import './App.css'
import { useState } from 'react'

function App() {
  let [color , setColor] = useState("black")

  return (  
      
      <div className="w-full h-screen duration-300 " style={{backgroundColor : color}}>
          <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
            <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-3 py-2 '>
              <button onClick={()=>{setColor("red")}}
              className='outline-none  px-4 py-1 rounded-full text-white shadow-lg' 
              style={{backgroundColor : "red"}}>
                Red
              </button>
              <button  onClick={()=>{setColor("White")}}
              className='outline-none  px-4 py-1 rounded-full text-black shadow-lg' 
              style={{backgroundColor : "White"}}>
                White
              </button>
              <button onClick={()=>{setColor("purple")}}
              className='outline-none  px-4 py-1 rounded-full text-white shadow-lg' 
              style={{backgroundColor : "purple"}}>
                Purple
              </button>
              <button onClick={()=>{setColor("Green")}}
              className='outline-none  px-4 py-1 rounded-full text-white shadow-lg' 
              style={{backgroundColor : "Green"}}>
                Green
              </button>
              <button onClick={()=>{setColor("blue")}}
              className='outline-none  px-4 py-1 rounded-full text-white shadow-lg' 
              style={{backgroundColor : "Blue"}}>
                Blue
              </button>
            </div>
          </div>
      </div>

  )
}

export default App

