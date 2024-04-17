import { useState } from "react";

function UseMemo2(){
   let [localDate,setlocalDate] =useState(new Date())
   console.log(localDate);
    return (
        <>
        <h1>This is the example of usememo2</h1>
       {/* <div>{localDate}</div> */}
        </>
    )
}
export default UseMemo2;