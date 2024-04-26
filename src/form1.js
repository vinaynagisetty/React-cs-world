import { useRef, useState } from "react";

function Login(){
   let[email,setEmail]= useState('');
   let[password,setpassword]= useState('');   //using useState hook
//   let psd=useRef();   //using useRef hook
 let Pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let [errrors,setErrors]=useState({
    email:'',
    password:''
  })
  function formHandling(){
    if(email.trim()===''){
        setErrors({...errrors,email:"Enter a email"});

    }
    else if(!Pattern.test(email)){
        setErrors({...errrors,email:"Enter a valid email"});
    }
    else{
        setErrors({...errrors,email:""});
    }
    if(password.trim()===''){
        setErrors({...errrors,password:"Enter a password"});

    }
    else if(password.trim().length<8){
        setErrors({...errrors,password:"password must be 8 characters"});
    }
    else{
        setErrors({...errrors,password:""});
    }
  }

    return (
        <>
    <div className="mt-5">
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
                 {errrors.email&&<span className="text-danger">{errrors.email}</span>}
            </div>
            <div  className="mb-3">
                <label>Password</label>
                <input type="password" value={password} onChange={
                    (e)=>{
                        setpassword(e.target.value);
                    }
                } className="form-control" />
                     {errrors.password&&<span className="text-danger">{errrors.password}</span>}
            </div>
            <div className="mt-3 " >
               <button className="btn btn-primary w-100" onClick={formHandling}>Login</button>
            </div>
         </div>
        </div>
    </div>
        </>
    )
}
export default Login;
