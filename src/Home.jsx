import axios from "axios"
import { useEffect, useState } from "react"
import { Link} from "react-router-dom";

const Home = () =>
{
    const[data, setData] = useState([]);
    useEffect(()=>
    {
        axios.get('http://localhost:8000/user')
        .then(res=> setData(res.data))
        .catch(err=> console.log(err))
    },[])

    // const navigate = useNavigate();
    const handleDelete = (id) =>
    {
        const confirm = window.confirm("Would you like to Delete?")
        if(confirm)
        {
            axios.delete('http://localhost:8000/user/'+id)
            .then(res=>{
              window.location.reload();
            })
            .catch(err => console.log(err))
        }
        else
        {
            alert('You Cancelled')
        }
    }
    return(
        <div>
            <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100"  >
                <h2>List Of Users</h2>
                <div className=" rounded bg-white border shadow p-4">
                    <div className=" d-flex justify-content-end">
                    <Link to='/create' className="btn btn-sm btn-success"><span className="bi bi-person-fill-add"></span> Add</Link>
                    </div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Username</th>
                            <th>Address</th>
                            <th>Password</th>  
                            <th>Read</th>                            
                            <th>Edit</th>   
                            <th>Delete</th>                            
                        </tr>
                    </thead>
                    <tbody>                      
                          {
                            data.map((data)=>                            
                                <tr key={data}>
                                    <td>{data.id}</td>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>{data.phone}</td>
                                    <td>{data.username}</td>
                                    <td>{data.address}</td>
                                    <td>{data.password}</td>
                                <td><Link to={`/read/${data.id}`} className="btn btn-sm btn-info">Read</Link></td>
                                <td><Link to={`/update/${data.id}`} className="btn btn-sm btn-primary">Edit</Link></td>
                                <td><Link onClick={e => handleDelete(data.id)} className="btn btn-sm btn-danger">Delete</Link></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    )
}   
export default Home