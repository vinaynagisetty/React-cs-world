import { useLocation, useParams } from "react-router-dom";

function Login(){
  let routeParams=  useParams();
  let quaryParams=  useLocation();
  console.log(quaryParams);
     quaryParams=new URLSearchParams(quaryParams.search);
     console.log(quaryParams);
     let post=quaryParams.get('post');
     let cate=quaryParams.get('cate');
  console.log(routeParams);
  let {id,custid}=routeParams;
  
    return (
        <>
        <h1>This is Login compoent:{id}</h1>
        <h1>customer Id:{custid}</h1>
        <h1>post:{post}</h1>
        <h1>cate:{cate}</h1>
        </>
    )
}
export default Login;