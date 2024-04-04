import y, { x, v } from "./test1"


// function Test(){
//     console.log(y);
//     console.log(x);
//     console.log(v);
//     return (
//         <div> 
//         <h1>hi</h1>
//         </div>
//     )
// }


function Demo(props) {
  return (
    <h1>this is test</h1>
  )
}

export default Demo;

let Test = (props) =>

  <>
    <h2>vinay</h2>
    <h1>{props.name}</h1>
    <h1 style={{ color: "red", gap: 20, backgroundColor: "blue", diplay: "flex", margin: 20 }}>{props.children}</h1>
    {console.log(props)}
  </>






// export default Test;