import React ,{ Suspense} from "react"
import './App.css'


function App() {

  const Lazy = React.lazy(()=>import("./LazyLoading"))

  return (
    <>
      <h1>Lazy Loading Tutorial</h1>
      <Suspense fallback={"Loading........ "}>
        <Lazy />
      </Suspense>
    </>
  );
}

export default App
