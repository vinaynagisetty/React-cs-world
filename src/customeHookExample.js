import useGetData from "./utils";
function CustomeHook(){
    let product=useGetData("https://fakestoreapi.com/products/1");
    let {id,title}=product;
    console.log(product);
    return (
        <>
        <h1>Custome hook example</h1>
        <h3>{id}</h3>
        <h3>{title}</h3>
        </>

    )
}
export default CustomeHook;