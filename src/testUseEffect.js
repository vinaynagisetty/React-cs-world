import { useEffect, useState } from "react";

function TestUseEffect() {
    let [Counter, setCounter] = useState(0);
    let [Timer, setTimer] = useState(0);

    useEffect(
        () => {
            console.log("inside the USeeffect");

        }, [Timer]);

    return (
        <>
            <h1>Testing Use Effect:{Counter}</h1>
            {console.log("inside the componet")}
            <button onClick={
                () => {
                    setCounter(Counter + 1);
                }
            }>Counter Click</button>
            <button onClick={
                () => {
                    setTimer(Timer + 1);
                }
            }>Timer Click</button>
        </>
    )
}
export default TestUseEffect;