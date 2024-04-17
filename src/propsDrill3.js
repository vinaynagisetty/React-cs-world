import { useContext } from "react";
import {context1} from "./propsDrillingExample"
function PropsDrilling3({data}){
  let value=useContext(context1);

    return (
        <>
        <h1>{data}</h1>
        <h2>{value}</h2>
        </>
    )
}
export default PropsDrilling3;