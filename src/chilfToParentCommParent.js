import { useState } from "react";
import AddTask from "./chilfToParentCommParent2";
function Parent(){

  let [Todos,setTodos]=  useState([
    "task1","task2"
  ]);
   
  
  let AddTodo=(newtask)=>{
    setTodos([...Todos,newtask]);

  }

    return (
        <>
        <h1>Parent component</h1>
        <AddTask task={AddTodo} />
        <ul>
            {
                Todos.map(
                    (t)=>{
                       return  <li>{t}</li>
                    }
                )
            }
        </ul>
        </>
    )
}
export default Parent