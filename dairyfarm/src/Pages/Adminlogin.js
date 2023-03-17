import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_PATH } from "../API_PATH";

export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  //console.log(user);
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(user);
    axios
      .post(`${API_PATH}/adminlogin.php`,
        user
      )
      .then((res) => {
        if (res.data.success) {
          console.log(res.data.user.email);

          sessionStorage.setItem("email", res.data.user.email);
          sessionStorage.setItem("fullname", res.data.user.fullname);

          navigate("/admin");
        } else {
          alert(res.data.error);
        }
      });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-lg-3">
          <h1>Admin Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="text"
                name="email"
                onChange={handleChange}
                className="form-control"
                id="exampleInputEmail1"
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
                onChange={handleChange}
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <button type="submit" className="btn btn-primary btn-lg">
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
