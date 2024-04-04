import { useState } from "react";

 function TwoWayDataBinding(){
    
    let [num,updateNum]=useState(10);

    // function upDateTheInputValue(e){
    //     let temp=e.target.value;
    //     updateNum(temp);
    // }
    return (
        <>
       <h1>{num}</h1>
       <input type="text"  onChange={
        (e)=>{
            let temp=e.target.value;
             updateNum(temp);
        }
       } value={num}/>
       <button onClick={
        ()=>{
            updateNum(2002)
       }}
       >change</button>
        </>
    )
}
export default TwoWayDataBinding;
