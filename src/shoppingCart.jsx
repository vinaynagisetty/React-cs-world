import React,{Component} from"react"
import Product from "./product"
export default class ShoppingCart extends Component{
    constructor(props){
        super(props);
        console.log("constrcutor -shopping cart");
        this.state={
            products:[
                {id:1,name:"mi",price:1000,quantity:0},
                {id:2,name:"apple",price:10200,quantity:0},
                {id:3,name:"samsung",price:10300,quantity:0},
                {id:4,name:"oppo",price:10040,quantity:0},
                {id:5,name:"poco",price:10500,quantity:0}
            ]
        }
    }


render(){
    console.log(this,"for this");
    console.log(this.props,"for this");
    return(
        
        <div className="container-fluid">
            <h4>Shopping Cart</h4>
        <div className="row">
        {this.state.products.map((product)=>{
          return <Product key={product.id} products={product} handleIncrement={this.handleIncrement} handleDecrement={this.handleDecrement} DeleteProduct={this.DeleteProduct} >
            <button className="btn btn-primary">Buy Now</button>
          </Product>
        })} 
        </div>
       
         </div>
    )
}
handleIncrement=(product,maxValue)=>{
    console.log("Incremented",product);
    console.log(maxValue);
    let allProduct=[...this.state.products]
    let index=allProduct.indexOf(product);
    console.log(index);
    if(allProduct[index].quantity<maxValue){
        allProduct[index].quantity++;
        this.setState({products:allProduct});
    }
    

}
handleDecrement=(product,minValue)=>{
    console.log("Decremented",product);
    let allProduct=[...this.state.products]
    let index=allProduct.indexOf(product);
    console.log(index);
    if(allProduct[index].quantity>minValue){
        allProduct[index].quantity--;
        this.setState({products:allProduct});
    }
    
}
DeleteProduct=(product)=>{
    let allProduct=[...this.state.products]
    let index=allProduct.indexOf(product);
    if(window.confirm("Are you sure ?")){
        allProduct.splice(index,1);
        this.setState({products:allProduct});
    }
    
}
componentDidMount(){
    console.log("componentDidMount-shopping cart ");
}
componentDidUpdate(prevState,prevProps){
    console.log("componnet did update-shopping cart",prevProps,prevState,this.props,this.state);
    

}
componentWillUnmount(){
    console.log("componentWillUnmount-shopping cart")
}
}