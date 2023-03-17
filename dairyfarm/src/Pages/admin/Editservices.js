import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_PATH } from "../../API_PATH";

export default function Editservices() {
  const params = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState([]);

  const submitValue = (e) => {
    e.preventDefault();
    productsubmit();
  };

  const productsubmit = () =>
    axios
      .post(`${API_PATH}/updateservice.php`,
        {
          id: service.id,
          name: service.name,
          details: service.details,
          hour: service.hour,
          weekly: service.weekly,
        }
      )
      .then((res) => {
        navigate("/admin/services");
        // console.log(res.data);
      });
  useEffect(() => {
    productone(params.id);
  }, []);
  //console.log("MyID:" + params.pid);
  const changeValue = (e) => {
    setService({ ...service, [e.target.name]: e.target.value });
  };
  const productone = (id) =>
    axios
      .post("http://localhost/Dairyfarm_react/dairyfarm/api/getservice.php", {
        id: id,
      })
      .then((res) => {
        setService(res.data.service.data[0]);
        //console.log(res.data.product.prdata[0]);
      })
      .catch((error) => console.log(error));
  return (
    <div className="col-sm-8">
      <h1>Edit Services</h1>
      <form onSubmit={submitValue}>
        <div className="form-group">
          <label>Product Name</label>
          <input
            type="text"
            name="name"
            value={service.name}
            onChange={changeValue}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Product Details</label>
          <textarea
            className="form-control"
            name="details"
            value={service.details}
            onChange={changeValue}
            type="text"
          ></textarea>
        </div>

        <div className="form-group">
          <label>Service Availabe Hour</label>
          <input
            type="text"
            className="form-control"
            onChange={changeValue}
            name="hour"
            value={service.hour}
          />
        </div>
        <div className="form-group">
          <label>Service Availabe Weekly</label>
          <input
            type="text"
            className="form-control"
            onChange={changeValue}
            name="weekly"
            value={service.weekly}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
}
