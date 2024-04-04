import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
const Create = () =>
{
    const[values, setValues] = useState({
        "name":"",
        "email":"",
        "phone":"",
        "username":"",
        "address":"",
        "password":""
    })

    const navigate = useNavigate();

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        console.log(values);
        axios.post('http://localhost:8000/user',values)
        .then(res=> 
            {
                console.log(res);
                alert("User Added Successfully")
                navigate('/')
            })
        .catch(err=> console.log(err))
    }

    return(
        <div className="d-flex justify-content-center align-items-center bg-light w-100 vh-100">
            <div className="w-50 border bg-white shadow px-5 pt-5 bp-5 rounded">
                <h2>Add User</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <dl>
                            <dt>Name</dt>
                            <dd><input type="text" placeholder="Enter Your Name" name="name" 
                            onChange={e=>setValues({...values,name:e.target.value})} className="form-control" /></dd>
                            <dt>Email</dt>
                            <dd><input type="email" name="email" placeholder="Enter Your Email" 
                            onChange={e=>setValues({...values,email:e.target.value})}
                            className="form-control" /></dd>
                            <dt>Mobile</dt>
                            <dd><input type="text" name="phone" placeholder="Enter Your Mobile Number" 
                            onChange={e=>setValues({...values,phone:e.target.value})}
                            className="form-control" id="" /></dd>
                            <dt>User Name</dt>
                            <dd><input type="text" name="username" placeholder="Enter your Username"
                            onChange={e=>setValues({...values,username:e.target.value})}
                            className="form-control" id="" /></dd>
                            <dt>Address</dt>
                            <dd><input type="text" name="address" placeholder="Enter Your Address" 
                            onChange={e=>setValues({...values,address:e.target.value})}
                            className="form-control" id="" /></dd>
                            <dt>Password</dt>
                            <dd><input type="password" name="password" placeholder="Enter Your Password"
                            onChange={e=>setValues({...values,password:e.target.value})}
                            className="form-control mb-4" id="" /></dd>
                            
                        <button className="btn btn-success me-3">Submit</button>
                        <Link to='/' className="btn btn-primary">Back</Link>
                        </dl>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Create