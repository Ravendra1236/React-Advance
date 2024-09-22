
import './App.css'
import ClassA from './ClassA'

function App() {

  function getData(data){
    console.log(data);
    
  }
  return (
    <>
      <ClassA getData={getData}></ClassA>
    </>
  );
}

export default App
