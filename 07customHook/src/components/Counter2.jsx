import useCounter from "../useCounter";

function Counter2() {
    let [count, Increment, Decrement] = useCounter(10);

    return (
      <>
        <h1>Custom Hook Tutorial</h1>
        <h2>Count : {count}</h2>
        <button onClick={Increment}>Increment</button>
        <br />
        <button onClick={Decrement}>Decrement</button>
      </>
    );
}

export default Counter2
