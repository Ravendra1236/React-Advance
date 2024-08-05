
import './App.css'
import Card from './components/Card'
function App() {
// let myObj = {
//   username : 'Ravendra',
//   age : 21
// }

  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl p-4 '>Tailwind CSS</h1>
      {/* Extracting from object */}
      {/* <Card username={myObj.username}></Card>
      <Card username={myObj.username}></Card> */}

      <Card username="Ravendra" desc="My name is Ravendra." btnText="Click Here"></Card>
      <Card username="Devendra" desc="My name is Devendra."></Card>
    </>
  )
}

export default App
