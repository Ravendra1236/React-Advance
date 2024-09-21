import "./App.css";
import  { createContext } from 'react';
import ClassC from "./components/ClassC";

// Define DataContext
const DataContext = createContext();
const DataContext1 = createContext();
function App() {
  // Context API:
  const name = "Ravendra";
  const surname = " Singh";
  return (
    <>
      {/* <ClassC name={name}></ClassC> */}
      <DataContext.Provider value={name}>
        <DataContext1.Provider value={surname}>
          <ClassC />
        </DataContext1.Provider>
      </DataContext.Provider>
    </>
  );
}
export { DataContext , DataContext1 }
export default App;
