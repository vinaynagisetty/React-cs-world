import { useReducer } from "react";
let CounterUpdate = (state, val) => {
    console.log(state, val)
    return state + val
}

function UseReducerExample1() {
    let [counter, dispatch] = useReducer(CounterUpdate, 0)
    return (
        <>
            <div className="d-flex d-flex justify-content-center align-items-center">
                <button className="btn btn-primary"
                    onClick={
                        () => {
                            dispatch(-1)
                        }
                    } >-</button>
                <h4>{counter}</h4>
                <button className="btn btn-primary"
                    onClick={
                        () => {
                            dispatch(1)
                        }
                    }>+</button>

            </div>
        </>

    )
}
export default UseReducerExample1;