import { useState } from "react"


function ClassA({getData}) {
    let [name , setName] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        getData(name)
        // setName("")
    }
  return (
    <form onSubmit={handleSubmit}>
        <label >Username: </label>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
    </form>
  )
}

export default ClassA
