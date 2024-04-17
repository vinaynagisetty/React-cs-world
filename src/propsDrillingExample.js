import { createContext } from "react";
import PropsDrilling2 from "./propsDrill2";
export const context1= createContext()
 function PropsDrilling(){
    let name="vinay1"
    return (
        <>
        
        <>This is parent component</>
        {/* <PropsDrilling2 data={value} /> */}
        <context1.Provider value={name}>
            <PropsDrilling2 />
        </context1.Provider>
        </>
    )
}
export default PropsDrilling;