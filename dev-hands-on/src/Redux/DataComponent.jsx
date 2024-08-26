import React, { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { fetchData } from "./dataSlice";


export const DataComponent = () =>{
    const dispatch = useDispatch()
    const {loading, data, error} = useSelector((state)=> state.data)

    useEffect(() =>{
        dispatch(fetchData())
    },[dispatch])

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error}</p>
    return(<div>
        <h1>Data:</h1>
        <ul>
            {data.map((item)=>(
                <li>{item.nam}</li>
            ))}
        </ul>
    </div>)
}