import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { API_PATH } from "../../API_PATH";

export default function Available_services() {
  const navigate = useNavigate();
  const [service, setService] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const searchedProduct = service.filter(
    (pr) =>
      pr.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pr.hour.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
      pr.weekly.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  useEffect(() => {
    allservice();
  }, []);

  const allservice = async () => {
    axios
      .get(`${API_PATH}/allservices.php`)
      .then((res) => {
        setService(res.data.datas.pr);
      });
  };
  const delconfirm = (id) => {
    delprod(id);
  };
  const delprod = async (id) => {
    axios
      .post(`${API_PATH}/delservices.php`, {
        id: id,
      })
      .then((res) => {
        alert(res.data.msg);
        allservice();
      });
  };

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
            <th>Name</th>
            <th>Details</th>
            <th>Hour</th>
            <th>Weekly</th>
            <th>Service's Image</th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {searchedProduct.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.details}</td>
              <td>{item.hour}</td>
              <td>{item.weekly}</td>
              <td>
                {" "}
                <img src={`/service/${item.photo}`} width="80px" />
              </td>

              <td>
                <Link
                  to={`/admin/services/editservice${item.id}`}
                  className="btn btn-primary"
                >
                  Edit
                </Link>

                <button
                  onClick={() => delconfirm(item.id)}
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
