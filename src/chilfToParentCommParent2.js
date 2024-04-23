import { useState } from "react"

function AddTask({task}){
   let[newTask,setnewTask]= useState("");
    return (
        <>
        <input value={newTask}  onChange={
            (e)=>{
               let task= e.target.value;
               setnewTask(task);
            }
        } type="text" />
        <button onClick={()=>{
            task(newTask)
        }}>Add Task</button>
        </>
    )
}
export default AddTask