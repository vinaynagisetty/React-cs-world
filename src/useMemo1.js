import { useMemo, useState } from "react";

function UseMemo1(){
    let num1=50;
    let num2=20;
  let [count,setCount] = useState(1)
   let sum= useMemo(
        ()=>{
            return num1+num2;
        },[num1,num2]
    )
    return (
        <>
        <h1>Use memo example</h1>
        <h5>{sum}</h5>
        <h5>{count}</h5>
        <button onClick={
            ()=>{
                setCount(count+1);
            }
        }>change</button>
        </>
    )
}
export default UseMemo1;