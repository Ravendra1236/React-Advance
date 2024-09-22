
import './App.css'

function App() {
  
  let teams = ["CSK" , "KKR" ,  "KEP" , "CSK"];
  let data = teams.map((team , index) => <h3 key={index}>Team name is : {team} and index is : {index}</h3>);

  return (
    <>
      {data}
    </>
  )
}

export default App
