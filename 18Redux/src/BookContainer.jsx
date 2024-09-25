import { useDispatch, useSelector } from "react-redux"
import { purchase_book } from "./ReduxContainer/BookAction";


function BookContainer() {
    const numberofbooks = useSelector((state) => state.NumberOfBooks);
    const dispatch = useDispatch()
  return (
    <div>
      <h1>Hello</h1>
      <p>Total books are : {numberofbooks}</p>
      <button onClick={() => {dispatch(purchase_book())}}>Buy Book</button>
    </div>
  );
}

export default BookContainer
