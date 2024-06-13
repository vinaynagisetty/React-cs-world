import ReactDom from "react-dom"
function PoratalMain(){
    return (
        <div className="parent">
        <h1>portain mail componet</h1>
        <Portalsub />
        </div>
    )
}

function Portalsub(){
    return (
    ReactDom.createPortal
    (<>
    <h1>portal sub component</h1>
    </>,document.getElementById("portal")))
}


export default PoratalMain;