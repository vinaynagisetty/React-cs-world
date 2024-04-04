import { Link } from "react-router-dom";
import "./condtions.css"

function ConditionalRendering(){
    let isAdmin=false;
    return(
        <>
        <NavBar/>
        {isAdmin && <IsAdmin />}
        </>
    )
}
function NavBar(){
    let isLoggedIn=true;
return (

   <ul >
         <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/about">About</Link> </li>
           <li><Link to="login">Login</Link> </li>
           <li><Link to="logOut">LOgout</Link> </li>
           {  isLoggedIn?(<li>Logout</li>):(<li>LoggIn</li>)}
</ul>
)

}
function IsAdmin(){
    return (
        <h1 className="text-danger">this is admin section</h1>
    )
}
export default ConditionalRendering;