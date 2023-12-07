import React,{useState,useEffect} from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import axios from 'axios';
import Validation from './validation.js'
function Update(){
    const {id}=useParams();
    const[value,setValue]=useState({
      name:'',
      email:'',
      phone:''
    })
    const[errors,setErrors]=useState({})
    useEffect(()=>{
        axios.get('http://localhost:8081/read/'+id)
        .then(res=>{
          setValue({
                    name:res.data[0].name,
                    email:res.data[0].email,
                    phone:res.data[0].phone})
        })
        .catch(err=>{
            console.log("error")
        })
    },[id])
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
            e.preventDefault();
            setErrors(Validation(value))
            axios.put('http://localhost:8081/update/'+id,value)
            .then(res=>{
                console.log(res)
                navigate('/')
            })
            .catch(err=>console.log(err))
    }
   
  return(
    <div class="formcontainer">
        <h2>Update the data</h2>
        <div class="formcontentcontainer">
                <form onSubmit={handleSubmit}>
                    <label for="name">Name</label>
                    <input type="text" name="name" value={value.name} onChange={(e)=>setValue({...value,name:e.target.value})}/>{errors.name?<div style={{color:'red'}}>{errors.name}</div>:null}<br/><br/>
                    <label for="email">Email</label>
                    <input type="text" name="email" value={value.email} onChange={(e)=>setValue({...value,email:e.target.value})}/>{errors.email?<div style={{color:'red'}}>{errors.email}</div>:null}<br/><br/>
                    <label for="phone">Phone</label>
                    <input type="text"  name="phone" value={value.phone} onChange={(e)=>setValue({...value,phone:e.target.value})}/>{errors.phone?<div style={{color:'red'}}>{errors.phone}</div>:null}<br/><br/>
                    <button type="submit">submit</button>
              </form>
        </div>
    </div>
  )
}
export default Update
