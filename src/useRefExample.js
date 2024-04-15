import { useRef, useState } from "react";
import "./useRef.css"

function UseRef(){
//    let heading= useRef(100);
//    let [x,setX]=useState(10);
//    let y1=useRef(10);
//    let y=200;

   let arr=new Array(10).fill(null);
   let mul=useRef([]);
   function checkef(ele){
    for(let val of mul.current){
        console.log(mul.current);
        val.classList.remove('selected');
    }
    ele.target.classList.add('selected');
   }
   console.log(mul);
    return (
        <>
        {/* <h1 ref={heading} className="active">This is heading</h1>
        <button onClick={
            ()=>{
                // console.log(heading);
                // console.log(heading.current);
                // heading.current.innerHTML="chnaged"
                // heading.current.classList.toggle('active');
                // heading.current.classList.toggle('inactive');
            
                setX(x+10);
                y1.current=y1.current+100;
                // console.log(heading.current);
            }
        }>change</button>
        <h1>{x}</h1>
        <h1>{y1.current}</h1>
        <h1>{y}</h1> */}

        {
            arr.map(
                (ele,index)=>{
                    return( <h1 ref={(ele)=>{
                        mul.current[index]=ele;
                    }} key={index}  onClick={(ele)=>{
                        checkef(ele)
                    }
                        
                    }  >This is heading{index+1}</h1>)
                    
                }
            )
        }


  
        </>
    )
}
export default UseRef;