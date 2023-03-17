import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_PATH } from "../API_PATH";

export default function Registration() {
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    username: "",
    email: "",
    address: "",
    password: "",
  });
  const changeValue = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    console.log(info);
    axios
      .post(`${API_PATH}/register.php`, info)
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
            navigate("/userlogin");
          }
        }
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-lg-3">
          <h1>User Registration</h1>
          <form onSubmit={formSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                User Name
              </label>
              <input
                type="text"
                name="username"
                onChange={changeValue}
                className="form-control"
                id="username"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                name="email"
                onChange={changeValue}
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                User address
              </label>
              <input
                type="text"
                name="address"
                onChange={changeValue}
                className="form-control"
                id="address"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                onChange={changeValue}
                className="form-control"
                id="password"
              />
            </div>
            <div className="row">
              <button type="submit" className="btn btn-primary btn-lg">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
