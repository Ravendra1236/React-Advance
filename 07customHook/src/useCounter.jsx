import { useState } from "react"

function useCounter(initialValue=0) {

    let [count ,setCount] = useState(initialValue);

    function Increment(){
        setCount(count+1)
    }
    function Decrement(){
        setCount(count-1);
    }

    return [count , Increment , Decrement]
}

export default useCounter


// Step 1 : Make CustomHook File and wirte all ur functionaliteis inside it 
// Step 2 : Always file name must be start from use keyword 
// Step 3 : Return array 
