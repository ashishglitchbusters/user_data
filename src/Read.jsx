import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:8000/user/" + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
        <div className="w-50 rounded bg-white border shadow p-4">
            <h3>Details of Users</h3>
            <div className="me-2">
                <strong>Name: {data.name}</strong>
            </div>
            <div className="me-2">
                <strong>Email: {data.email}</strong>
            </div>
            <div className="me-2">
                <strong>Mobile: {data.phone}</strong>
            </div>
            <div className="me-2">
                <strong>User Name: {data.username}</strong>
            </div>
            <div className="me-2">
                <strong>Address: {data.address}</strong>
            </div>
            <div className="me-2">
                <strong>Password: {data.password}</strong>
            </div>
            <Link to={`/update/${id}`} className="btn btn-success mt-4">Edit</Link>
            <Link to="/" className="btn btn-info mt-4 ms-3">Back</Link>
        </div>
      </div>
    </>
  );
};
export default Read;
