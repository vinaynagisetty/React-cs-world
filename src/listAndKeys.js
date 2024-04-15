function List(){
    const list=[
        {id:1,name:"vina1"},
        {id:2,name:"vinay2"},
        {id:3,name:"vinay3"},
    ]
    return <>
    <h1>list of elements
        {
            list.map(
                (item,index)=>{
                    return <>
                    <li key={item.id}>{item.name}</li>
                    <li key={index+5}> {item.id}</li>
                    </>
                    
                }
            )
        }

    </h1>
    </>
}
export default List;