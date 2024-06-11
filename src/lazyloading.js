import { Suspense, lazy, useState } from "react";
// import Form from "./form1"
const Form=lazy(()=>import("./form1"))
function LazyLoading(){
   let[show,setShow] =useState(false);
    return (
        <>
            <div className="text-center">
                <h1 >Lazy loading with conditional Rendering</h1>
                <button className="btn btn-primary" 
                onClick={()=>{
                    setShow(true);
                }}
                >Open</button>
            </div>
           {
            show===true &&
            <Suspense>
                <Form />
            </Suspense>
           }
        </>
    )
}
export default LazyLoading;