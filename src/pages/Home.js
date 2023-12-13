import React, { useEffect ,useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
function Home ()
{
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8080/api/actors')
        .then(res=>setData(res.data))
        .catch(err =>console.log(err))
    })

    const handleDelete =(id) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this driver?');

        if (confirmDelete) {
            axios.delete(`http://localhost:8080/api/actors/${id}`)
                .then(res => {
                  
                    window.location.reload(); 
                })
                .catch(err => console.log(err));
        }
    }

    const handleSearch =(id) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this driver?');

        if (confirmDelete) {
            axios.delete(`http://localhost:3001/book/${id}`)
                .then(res => {
                  
                    window.location.reload(); 
                })
                .catch(err => console.log(err));
        }
    }
    return (
       <div className ='d-flex vh-200 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <h2>Actor List</h2>
                <div>
                    <Link to="/create " className='btn btn-success'>Create </Link>
                    <input type="text" className='btn btn-sm btn-primary mx-2'
                    onChange={handleSearch} />
                </div>
                
                <table className='table'>
                    <thead>
                        
                        <tr>
                            <th>NAME</th>
                            <th>SSN</th>
                            <th>LICENSE</th>
                            <th>ACTION</th>

                        </tr>
                  
                    </thead>
                    <tbody>
                        {data.map((actor,index)=>{
                        return <tr key = {index}>
                                <td>{actor.id}</td>
                                <td>{actor.firstName}</td>
                                <td>{actor.lastName}</td>
                                <td>
                                    <Link to = {`/read/${actor.id}`} className='btn btn-sm btn-info'>Read</Link>
                                    <button onClick={ ()=> handleDelete (actor.id)} className='btn btn-sm btn-primary mx-2'>Delete</button>
                                    <Link to ={`/update/${actor.id}`} className='btn btn-sm btn-danger'>Update</Link>
                                </td>
                                </tr>
                        })}
                    </tbody>
                </table>
            </div>
       </div>
    )
}

export default Home