import React,{useEffect,useState} from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import axios from 'axios';
import './style.css'
function Read(){
    const[user,setUser]=useState([]);
    const {id}=useParams();
    const navigate=useNavigate();
    useEffect(()=>{
        axios.get('http://localhost:8081/read/'+id)
        .then(res=>{
            console.log(res)
            setUser(res.data[0]);
        })
        .catch(err=>{
            console.log(err);
        })
    })
  return(
    <div className="readgrp">
        <div className='read'>
            <h1>{user.name}</h1>
            <h1>{user.id}</h1>
            <h1>{user.phone}</h1>
            <button onClick={()=>navigate(-1)} >back</button>
        </div>
    </div>
  )
}
export default Read
