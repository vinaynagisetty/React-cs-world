import { useState } from "react";

function Increment() {
    let counter = 0;
    let [inc, Incre] = useState(0);
    return (
        <>
            <h1>{inc}</h1>
            <button onClick={() => {
                console.log(counter + 1);
                Incre(inc + 1);
            }}>Change</button>
            <Render />
        </>

    )
}
let loggedIn = true;
function Render() {
    return (
        <>
            <h1>Condtional render</h1>
            {
                loggedIn ? <p>login</p> : null  //for true only
            }
            {
                loggedIn ? <p>login</p> : <p>logout</p> //for true and false using ternary
            }
            {
                loggedIn && <p>login</p> //for true only using and operaor
            }
        </>
    )
}
export default Increment;