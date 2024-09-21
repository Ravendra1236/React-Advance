
import { useContext } from "react";
import {DataContext , DataContext1} from "../App";

// function ClassC({name}) {
//   return (
//     <div>
//       <h1>Hello THis is {name}</h1>
//     </div>
//   )
// }

function ClassC() {
    // return (
    
    //     // <DataContext.Consumer>
    //     //     {
    //     //         (name)=>{
    //     //             return(
    //     //                 <h1>My Name is {name}</h1>
    //     //             )
    //     //         }
    //     //     }
    //     // </DataContext.Consumer>
    
    // );
    let name = useContext(DataContext);
    let surname = useContext(DataContext1);
    return (
        <h1>My name is {name} and my surname is {surname}</h1>
    )
}
export default ClassC
