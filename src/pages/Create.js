import React, { useState } from 'react'
import axios from 'axios';
 function Create() {
    const [values,setValues]= useState({
        firstName: '',
        lastName: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/api/actors',values)
        .then (res=> console.log (res))
        .catch(err=> console.log(err))
    }
  return (
   <div className ='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit ={handleSubmit}>
                <h2>Add Driver</h2>
                <div className='mb-2'>
                    <label htmlFor ="">first name </label>
                    <input type="text" placeholder='Enter Driver Name' className='form-control'
                    onChange={e => setValues({...values, firstName: e.target.value})}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor ="">last name </label>
                    <input type="text" placeholder='Enter Driver SSN' className='form-control'                    
                    onChange={e => setValues({...values, lastName: e.target.value})}/>
                </div>
             
                <button className='btn btn-success'>Submit</button>
            </form>
        </div>
   </div>
  )
}

export default Create;
