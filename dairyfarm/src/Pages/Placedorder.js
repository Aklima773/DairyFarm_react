import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Placedorder() {
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    username: "",
    name: "",
    quantity: "",
    price: "",
    address: "",
  });
  const changeValue = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    console.log(info);

    axios
      .post(
        "http://localhost/Dairyfarm_react/dairyfarm/api/orderplace.php",
        info
      )
      .then((res) => {
        if (res.data) {
          if (res.data.empty) {
            alert(res.data.empty);
          }
          if (res.data.duplicated) {
            alert(res.data.duplicated);
          }
          if (res.data.success) {
            alert(res.data.success);
            navigate("/product");
          }
        }
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-lg-3">
          <h1>Fill the Form</h1>
          <form onSubmit={formSubmit}>
            {/* <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                User ID
              </label>
              <input
                type="text"
                name="uid"
                onChange={changeValue}
                className="form-control"
                id="uid"
                aria-describedby="emailHelp"
              />
            </div> */}
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                User Name
              </label>
              <input
                type="text"
                name="username"
                onChange={changeValue}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Product Name
              </label>
              <input
                type="text"
                name="name"
                onChange={changeValue}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Product Quantity In Litter
              </label>
              <input
                type="text"
                name="quantity"
                onChange={changeValue}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Product Price
              </label>
              <input
                type="text"
                name="price"
                onChange={changeValue}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                User Address
              </label>
              <input
                type="text"
                name="address"
                onChange={changeValue}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>

            <div className="row">
              <button type="submit" className="btn btn-primary btn-lg">
                Placed Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
