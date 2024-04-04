import React,{Component} from "react"

export default class Product extends Component{
    state={products:this.props.products}
    render(){
      console.log(this.props);
        return<div className="col-md-6"> 
        <div className="card m-3"> 
        <div className="card-body">
                  
                  <div className="text-muted"># {this.state.products.id}
                  <span className="pull-right hand-icon" onClick={()=>{this.props.DeleteProduct(this.state.products);}}> <i className="fa fa-times" ></i> </span>
                  </div>
                  
                  <h4 className="pt-5 border-top">{this.state.products.name}</h4>
                  <div>${this.state.products.price}</div>
                {/*crd body end */}
                  </div>
                  <div className="card-footer ">
                    <div className="float-left">
                      <span className="badge">{this.props.products.quantity}</span>
                     
                     <div className="btn-group">
                      <button className="btn btn-outline-success" onClick={()=>{this.props.handleIncrement(this.state.products,10);}}>+</button>
                      <button className="btn btn-outline-danger" onClick={()=>{this.props.handleDecrement(this.state.products,0);}}>-</button>
                     </div>
                    </div>
                    <div className="float-right">
                    {this.props.children}
                    </div>
                    
                  </div>
                  </div>
        </div>
         
    }
    componentWillUnmount(){
      console.log("componentWillUnmount-product cart")
  }
}