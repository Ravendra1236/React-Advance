import axios from "axios"
import { useState } from "react"
import {useEffect} from "react"

function Axios() {

    let [userData , setUserData] = useState([])

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            setUserData(response.data)
        })
    },[])
    
    return (
    <>
        {
            userData.map((data)=>{
                return (
                    <h1 key={data.id}>{data.name}</h1>
                )
            })
        }
    </>
    )
}

export default Axios
