import React, { useState } from 'react'
import { adduser } from './services/allAPI'
import { Link } from 'react-router-dom'

function Forms() {

  const [user,setuser]= useState({
    id:  '',
    name: '',
    email: '',
    designation: '',
    salary: ''
  })
 const handleSubmit = async()=>{
  const {id,name,email,designation,salary}=user
  if(!id || !name || !email || !designation |!salary){
    alert("please fill the form")
  }else{
    const response = await adduser(user)
    if(response.status === 201){
      alert("user added")
      setuser({id:'',name:'',email:'',designation:'',salary:''})
    }else{
      console.log(response);
      
    }
  }
 }
  
  return (
    <div>
         <div className='container'>
  <div className='box'>
  <form class="container1">
  <h1 style={{textAlign:"center"}}>EMPLOYEE</h1>

  <div class="row mb-4">
   <div class="col-12">
     <div data-mdb-input-init class="form-outline">
       <input type="number" value={user.id} id="employeeName" onChange={(e)=>setuser({...user,id:e.target.value})} class="form-control" />
       <label class="form-label" for="employeeId">Employee Id</label>
     </div>
   </div>
 </div>

 <div class="row mb-4">
   <div class="col-12">
     <div data-mdb-input-init class="form-outline">
       <input type="text" value={user.name} id="employeeName" onChange={(e)=>setuser({...user,name:e.target.value})} class="form-control" />
       <label class="form-label" for="employeeName">Employee Name</label>
     </div>
   </div>
 </div>


 <div class="row mb-4">
   <div class="col-12">
     <div data-mdb-input-init class="form-outline">
       <input type="email" value={user.email} id="employeeEmail" onChange={(e)=>setuser({...user,email:e.target.value})} class="form-control" />
       <label class="form-label" for="employeeEmail">Email</label>
     </div>
   </div>
 </div>


 <div class="row mb-4">
   <div class="col-12">
     <div data-mdb-input-init class="form-outline">
       <input type="text" value={user.salary} id="employeeSalary" onChange={(e)=>setuser({...user,salary:e.target.value})} class="form-control" />
       <label class="form-label" for="employeeSalary">Salary</label>
     </div>
   </div>
 </div>


 <div class="row mb-4">
   <div class="col-12">
     <div data-mdb-input-init class="form-outline">
       <input type="text" value={user.designation} id="employeeDesignation" onChange={(e)=>setuser({...user,designation:e.target.value})} class="form-control" />
       <label class="form-label" for="employeeDesignation">Designation</label>
     </div>
   </div>
 </div>

 <div class="row">
   <div class="col-6">
     <button onClick={handleSubmit}
       data-mdb-ripple-init
       type="button"
       class="btn btn-primary btn-block mb-4 w-100">
       Submit
     </button>
   </div>
   <div className='col-6'>
    <Link to={'/'}><button data-mdb-ripple-init type='button' className='btn btn-primary btn-block mb-4 w-100'>Table</button></Link>
   </div>
 </div>
</form>
</div>
</div>
    </div>
  )
}

export default Forms