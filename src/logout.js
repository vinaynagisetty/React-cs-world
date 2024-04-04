import { Link, Outlet } from "react-router-dom";


function Logout(){
    return (
        <>
        <h1>This is Logout compoent</h1>
        <h2>nested roting concept</h2>
        <button><Link to="chganePassword">change password</Link></button>
        <button><Link to="ChganeUserName">change UserName</Link></button>
        <Outlet />
        </>
    )
}
export function ChganePassword(){
    return(
        <h1>this is change password </h1>
    )
}
export function ChganeUserName(){
    return(
        <h1>this is chganeUserName </h1>
    )
}
export default Logout;