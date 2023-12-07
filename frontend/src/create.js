import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import Validation from './validation.js'
import './style.css'
function Create(){
    const navigate=useNavigate();
    const[value,setValue]=useState({
      name:'',
      email:'',
      phone:''
    })
    const[errors,setErrors]=useState({});
    const handleSubmit=(e)=>{
          e.preventDefault();
          setErrors(Validation(value));
          if(errors.email=="" && errors.phone=="" && errors.name=="")
         { 
            axios.post('http://localhost:8081/users/',value)
              .then(res=>{
                console.log(res);
                navigate('/');
              })
              .catch((err)=>{
                console.log(err);
              });
        }
    }
  return(
    <div>
      <div class="formgrp" >
            <div class="formcontainer">
                <h2>Insert the data</h2>
                <div class="formcontentcontainer">
                    <form onSubmit={handleSubmit}>
                        <label for="name">Name</label>
                        <input type="text" name='name' value={value.name} onChange={(e)=>setValue({...value,name:e.target.value})}/>{errors.name?<div style={{color:'red'}}>{errors.name}</div>:null}<br/><br/>
                        
                        <label for="email">Email</label>
                        <input type="text" name="email" value={value.email} onChange={(e)=>setValue({...value,email:e.target.value})}/>{errors.email?<div style={{color:'red'}}>{errors.email}</div>:null}<br/><br/>
                        <label for="phone">Phone</label>
                        <input type="text" name="phone" value={value.phone} onChange={(e)=>setValue({...value,phone:e.target.value})}/>{errors.phone?<div style={{color:'red'}}>{errors.phone}</div>:null}<br/><br/>
                        <button type="submit">submit</button>
                    </form>
                </div>
          </div>
      </div>
    </div>
  )    
}
export default Create