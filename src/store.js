import { createStore } from "redux"
let intialAccount={
    balance:0,
    name:'',
    phoneNumber:null
}

function AccountReducer(state=intialAccount,action){
    switch(action.type){
        case "deposit":
            return {...state,balance:state.balance+action.payload};
        case "withdraw":
             return {...state,balance:state.balance-action.payload};
        case "mobile_update":
            return {...state,phoneNumber:action.payload};
        case "name_update":
            return {...state,name:action.payload}     
        default :
             return state            
    }
   

}
const store=createStore(AccountReducer);

console.log(store.getState());
store.dispatch({type:"deposit",payload:10000});
console.log(store.getState());
store.dispatch({type:"withdraw",payload:100});
console.log(store.getState());
store.dispatch({type:"mobile_update",payload:99594555});
console.log(store.getState());
store.dispatch({type:"name_update",payload:"vinay"});
console.log(store.getState());
store.dispatch({type:"name_update12",payload:"vinay"});
console.log(store.getState());