import React, { Component } from "react";
export default class TableDate extends Component{

state={
    user:[
        {id:1,name:"abc"},
        {id:2,name:"adf"},
        {id:3,name:"ffj"}
    ]
}
 
    render(){
        return (
        <div>
            <h3>Buy product</h3>
        _________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
        <table className="table">
          <thead>
            <tr>
            <th>#</th>
              <th>name</th>
              <th>price</th>
              <th>quaninty</th>
              <th>Net price</th>
            </tr>
          </thead>
          <tbody>
           {this.state.user.map((item)=>{
            return(
                <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td><input type="text"/></td>
                    <td><input type="text"/></td>
                    <td></td>
                </tr>
            )
           })}

          </tbody>
        </table>
        </div>
        );
    }
}