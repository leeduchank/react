import React, { useState ,useEffect} from 'react'
import { useParams ,Link} from 'react-router-dom';
import axios from 'axios';

export default function Update() {
    const {id} = useParams();
    const [values,setValues]= useState({
       
        firstName: '',
        lastName: ''
    })
  
    useEffect(()=>{
        axios.get('http://localhost:8080/api/actors/'+id)
        .then(res=> 
            {console.log(res)
            setValues({...values,  firstName:res.data.firstName, lastName: res.data.lastName})})
        .catch(err =>console.log(err))
    },[])
 
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8080/api/actors/'+id,values)
        .then (res=> console.log (res))
        .catch(err=> console.log(err))
    }
  return (
    <div className ='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit ={handleSubmit}>
                <h2>Update Actor</h2>
           
                <div className='mb-2'>
                    <label htmlFor ="">first Name </label>
                    <input type="text" placeholder='Enter Driver SSN' className='form-control'  value ={values.firstName}                   
                    onChange={e => setValues({...values, firstName: e.target.value})}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor ="">last Name  </label>
                    <input type="text" placeholder='Enter Driver License' className='form-control' value ={values.lastName}
                    onChange={e => setValues({...values, lastName: e.target.value})}/>
                </div>
                <button className='btn btn-success'>Submit</button>
                <Link to ='/' className='btn btn-primary mx-2'>Back</Link>
            </form>
        </div>
   </div>
  )
}
