import { useState } from "react";
import axios from "axios";

function AxiosPost() {
    const data = { fname: "", lastName: "" };

    let [inputData , setInputdata] = useState(data);

    let handleData = (e) => {
        setInputdata({ ...inputData, [e.target.name]: [e.target.value] });
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/users" , inputData)
        .then((response)=>{
            console.log(response);
            
        })
    }
    const handleUpdate = (e)=>{
        e.preventDefault();
        axios.put("https://jsonplaceholder.typicode.com/users/1" , inputData)
        .then((response)=>{
            console.log(response);
        })
    }
    const handleDelete = (e) => {
      e.preventDefault();
      axios
        .delete("https://jsonplaceholder.typicode.com/users/1")
        .then((response) => {
          console.log(response);
        });
    };
    return (
      <>
        <form>
          <label>Username</label>
          <input
            type="text"
            name="fname"
            value={inputData.fname}
            onChange={handleData}
          />
          <br />
          <label>SurName</label>
          <input
            type="text"
            name="lastName"
            value={inputData.lastName}
            onChange={handleData}
          />
          <br />
          <button onClick={handleSubmit}>Submit</button><br />
          <button onClick={handleUpdate}>Update</button><br />
          <button onClick={handleDelete}>Delete</button>
        </form>
      </>
    );
}

export default AxiosPost
