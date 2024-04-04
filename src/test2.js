import { Component } from "react"

let b = 15

// function Vinay(){
//     console.log(b);
//     return b
// }
class Vinay extends Component {
    a = 10;
    
    render() {
        return (
            <>
            <Vamsi/>
                {console.log(this,"from test2")}
                <h1>test1 </h1>
            </>
        )
    }
}

export default Vinay;
function Vamsi() {

    let vin = 100;
    return <p>pain</p>


}