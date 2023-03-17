import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { API_PATH } from "../../API_PATH";

export default function Getuserlist() {
  const navigate = useNavigate();
  const [userlist, setUserlist] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const searchedProduct = userlist.filter((pr) =>
    pr.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const allservice = async () => {
    axios
      .get(`${API_PATH}/allservices.php`)
      .then((res) => {
        setUserlist(res.data.datas.pr);
      });
  };

  

  useEffect(() => {
    allservice();
  }, []);
  return (
    <div className="col-sm-12">
      <div className="row bg-dark text-light">
        <div className="col-md-8">
          <h2 className="bg-dark text-light" style={{ padding: "20px" }}>
            Avaialable Services
          </h2>
        </div>
        <div className="col-md-4  " style={{ padding: "20px" }}>
          <label htmlFor="search">Search:</label>
          <input
            id="search"
            type="text"
            name="searchTerm"
            onChange={handleSearch}
          />
        </div>
      </div>
      <table className="table table-striped">
        {/* <img src="/service/1671536199bric.jpg"></img> */}
        <thead>
          <tr>
            <th>ID</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {searchedProduct.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>

             <td>
                <Link
                  to={`/admin/services/editservice${item.id}`}
                  className="btn btn-primary"
                >
                  Edit
                </Link>

                <button
                  // onClick={() => delconfirm(item.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/admin/adservice" className="btn btn-secondary">
        Add new Service
      </Link>
    </div>
  );
}
