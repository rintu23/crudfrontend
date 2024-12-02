import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Modalsemp from './Modalsemp'
import { delUser, getUser } from './services/allAPI'

function Tables() {
 const [data,setdata]=useState([])
 const [editdata,seteditdata]=useState('')
  const getuserdata= async()=>{
    const response = await getUser()
    // console.log(response);
    setdata(response.data)

  }
  useEffect(()=>{
    getuserdata()
  },[editdata])
  console.log(data);

  const handleDelete = async(id)=>{
    const response = await delUser(id)
    console.log(response)
    getuserdata()
  }
  
  return (
    <div>
         <table class="table">
    <thead>
      <tr>
        <th>id</th>
        <th>Employee Name</th>
        <th>Email</th>
        <th>Salary</th>
        <th>Designation</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
     { data.map((data)=>(
         <tr>
         <td >{data.id}</td>
         <td>{data.name}</td>
         <td>{data.email}</td>
         <td>{data.salary}</td>
         <td>{data.designation}</td>
         <td><Modalsemp user={data} seteditdata={seteditdata}/></td>
         <td><Button onClick={()=>handleDelete(data.id)}>Delete</Button></td>
       </tr>
     ))
     }
     
    </tbody>
  </table>

<Link to={'/forms'}><Button>Add employee</Button></Link>
<div>

</div>
    </div>
  )
}

export default Tables