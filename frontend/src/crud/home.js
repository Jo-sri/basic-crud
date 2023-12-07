import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
import './style.css'
function Home(){
   const[data,setData]=useState([])
   useEffect(()=>{
      axios.get('http://localhost:8081/use')
      .then(res=>{
           setData(res.data)
      })
      .catch(err=>{
        console.log(err)
      })
   },[])
   const handleDelete=(id)=>{
         axios.delete('http://localhost:8081/delete/'+id)
         .then(res=>{
            window.location.reload();
         })
         .catch(err=>{
            console.log(err);
        })
   }
   return(
    <>
         <div className='create'>
            <Link to='/create' style={{ textDecoration: 'none' }}>Create</Link> 
        </div>
    <div className='table-group'>
            <table >
                <thead >
                    <tr >
                        <th>Id</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th colspan="3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item,i)=>{return(
                        <>
                            <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.email}</td>
                                    <td ><Link to={`/read/${item.id}`} style={{ textDecoration: 'none' }}>Read</Link></td>
                                    <td><Link to={`/edit/${item.id}`} style={{ textDecoration: 'none' }}>Edit</Link></td>
                                    <td><button onClick={()=>handleDelete(item.id)}>delete</button></td>
                            </tr>
                        </> )
                        })
                    }
                </tbody>
            </table>
    </div>
    </>
   )
}
export default Home
