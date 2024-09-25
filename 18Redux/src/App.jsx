
import store from './ReduxContainer/Store'
import './App.css'
import {Provider} from "react-redux"
import BookContainer from './BookContainer'
function App() {


  return (
    <>
      <Provider store={store}>
        <BookContainer></BookContainer>
      </Provider>
    </>
  );
}

export default App
