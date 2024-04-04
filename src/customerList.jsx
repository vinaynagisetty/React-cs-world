import React, { Component } from "react";
export default class CustomerList extends Component {
  state = {
    name: "vinay",
    count: 5,
    customer: [
      { id: 1, name: "vinay",photo:"https://picsum.photos/id/1000/100", phone: 123, address: { city: "hyd" } },
      { id: 2, name: "vamsi", photo:"https://picsum.photos/id/1001/100",phone: 3434, address: { city: "tpt" } },
      { id: 3, name: "mumar",photo:"https://picsum.photos/id/1002/100", phone: null, address: { city: "nlr" } },
      { id: 4, name: "krishna",photo:"https://picsum.photos/id/1003/100", phone: null, address: { city: "ban" } },
    ],
  };
  getCustomerStyle=(name)=>{
    if(name.startsWith("v")) return   "bg-green"
    else if(name.startsWith("k")) return "bg-red"
    else return ""
  }
  render() {
    return (
      <div>
        
        <h3 className="text-danger">
        
          {this.state.name}
          <span className="badge badge-info ml-2">{this.state.count}</span>
          <button className="btn btn-success ml-2" onClick={this.change}>
            Change
          </button>
        </h3>
        <table className="table">
          <thead>
            <tr >
              <th>id</th>
              <th>name</th>
              <th>photo</th>
              <th>phone</th>
              <th>city</th>
            </tr>
          </thead>
          <tbody>

            {this.getCustomerRow()}

          </tbody>
        </table>
        
      </div>

    );
  }
  change = () => {
    this.setState({ count: 7 });
    console.log("change value");
  };

  getCustomerRow=()=>{
    return (this.state.customer.map((element,index) => {
      return (
        <tr key={element.id}>
          <td>{element.id} </td>
          <td >{element.name}</td>
          <td><img src={element.photo} alt="Something went wrong"/>
          <div > 
          <button className="btn btn-primary mt-3" onClick={()=>{this.changePicture(element,index)}}>change Picture</button>
          </div>
          </td>
          <td>{this.getPhoneNumberRender(element.phone)}</td>
          <td>{element.address.city}</td>
        </tr>
      );
    }))
  }
  getPhoneNumberRender = (phone) => {
    
      if(phone) return phone
      else return <div className="text-danger">No Phone</div>
  
  }
  changePicture=(element,index)=>{
    var changeArr=this.state.customer;
    changeArr[index].photo="https://picsum.photos/id/100/100"
    this.setState({customer:changeArr})
  }

}
