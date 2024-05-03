import { useEffect } from "react";
import axios from 'axios'

function AxiosExample(){
    let api=axios.create(
        {
            baseURL: 'https://fakestoreapi.com',
            
          }
        )

    useEffect(
        ()=>{
               getProducts()
        },[]
    );
   async function getProducts(){
     let res=await api.get('/products',)
     console.log(res.data)

    }
    return (
        <>
        <h1>example of axios usage</h1>
        </>
    )
}
export default AxiosExample;