import { useState } from "react"

function Github() {

    const [data , setData] = useState();
    fetch('https://api.github.com/users/ravendra1236')
    .then(response => response.json())
    .then(data => setData(data.followers))

    return (
    <div>
        <h1>Github Followers : {data}</h1>
    </div>
    )
}

export default Github
