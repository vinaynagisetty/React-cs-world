import { useRef, useState } from "react";

function Login(){
   let[email,setEmail]= useState('');
//    let[password,setpassword]= useState('');   //using useState hook
  let psd=useRef();   //using useRef hook

    return (
        <>
        <div className="w-25 mt-5 m-auto border pt-4 ">
         <div className="p-5">
            <div className="text-center"> 
                <label>Login Form</label>
            </div>
            <div className="mb-3"> 
                <label>Email</label>
                <input type="email" value={email} onChange={
                    (e)=>{
                        setEmail(e.target.value);
                    }
                    } className="form-control" />
            </div>
            <div  className="mb-3">
                <label>Password</label>
                <input type="password" ref={psd} className="form-control" />
            </div>
            <div className="mt-3 " >
               <button className="btn btn-primary w-100" onClick={
                ()=>{
                    console.log("Email  :"+email)
                    console.log("Password  :"+psd.current.value)
                }
               }>Login</button>
            </div>
         </div>
        </div>
        </>
    )
}
export default Login;