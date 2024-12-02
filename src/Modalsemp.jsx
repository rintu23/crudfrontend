import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { editUser } from './services/allAPI';

function Modalsemp({user,seteditdata}) {
  console.log(user);
  const [updateUser,setUpdateUser]=useState({
    id: user.id,
    name: user.name,
    email: user.email,
    designation: user.designation,
    salary: user.salary
  })
  
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleupdate = async()=>{
      const {id,name,email,designation,salary} = updateUser
      if(!id || !name || !email || !designation || !salary){
        alert("please edit your details")
      }else{
        const response = await editUser(id,updateUser)
        console.log(response);
        if(response.status === 200){
          handleClose()
          seteditdata(response)
        }else{
          console.log(response);
          
        }
        
      }
    }
    console.log(updateUser);
    
  return (
    <div>
      
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='container'>
  <div className='box'>
  <form class="container1">
  <h1 style={{textAlign:"center"}}>EMPLOYEE</h1>

  <div class="row mb-4">
   <div class="col-12">
     <div data-mdb-input-init class="form-outline">
       <input type="number" value={updateUser.id} id="employeeName" class="form-control" />
       <label class="form-label" for="employeeId">Employee Id</label>
     </div>
   </div>
 </div>

 <div class="row mb-4">
   <div class="col-12">
     <div data-mdb-input-init class="form-outline">
       <input type="text" onChange={(e)=>setUpdateUser({...updateUser,name:e.target.value})} value={updateUser.name} id="employeeName" class="form-control" />
       <label class="form-label" for="employeeName">Employee Name</label>
     </div>
   </div>
 </div>


 <div class="row mb-4">
   <div class="col-12">
     <div data-mdb-input-init class="form-outline">
       <input type="email" onChange={(e)=>setUpdateUser({...updateUser,email:e.target.value})} value={updateUser.email} id="employeeEmail" class="form-control" />
       <label class="form-label" for="employeeEmail">Email</label>
     </div>
   </div>
 </div>


 <div class="row mb-4">
   <div class="col-12">
     <div data-mdb-input-init class="form-outline">
       <input type="text" onChange={(e)=>setUpdateUser({...updateUser,salary:e.target.value})} value={updateUser.salary} id="employeeSalary" class="form-control" />
       <label class="form-label" for="employeeSalary">Salary</label>
     </div>
   </div>
 </div>


 <div class="row mb-4">
   <div class="col-12">
     <div data-mdb-input-init class="form-outline">
       <input type="text" onChange={(e)=>setUpdateUser({...updateUser,designation:e.target.value})} value={updateUser.designation} id="employeeDesignation" class="form-control" />
       <label class="form-label" for="employeeDesignation">Designation</label>
     </div>
   </div>
 </div>


</form>
</div>
</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleupdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Modalsemp