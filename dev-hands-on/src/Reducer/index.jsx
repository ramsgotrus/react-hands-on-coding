import React,{useReducer, useState} from "react";
 function reducer (state, action){
    if(action.type === 'increment'){
        return {age : state.age +1}
    }
    else if(action.type === 'decrement'){
        return{age:state.age-1}
    }
 }

export const Reducer =({})=>{
    const [state, dispatch] = useReducer(reducer, {age})
    return(<div>
        <button onClick={()=> {dispatch({type:'increment'})}}>++</button>
        <button onClick={()=> {dispatch({type:'decrement'})}}>++</button>
    </div>)
}