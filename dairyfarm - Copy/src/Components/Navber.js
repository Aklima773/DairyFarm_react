import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Navber() {
  let fullname = sessionStorage.getItem("fullname");
  let navigate = useNavigate();

  const logOut = () => {
    sessionStorage.clear();
    navigate("/adminlogin");
  };
  const email = sessionStorage.getItem("email");

  useEffect(() => {
    if (email == null) {
      navigate("adminlogin");
    }
  }, []);
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container-fluid">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <div className="nav-item dropdown">
                    <Link
                      to="#"
                      className="nav-link dropdown-toggle admin"
                      style={{
                        color: "white",
                        padding: "20px",
                        margin: "-10px",
                      }}
                      data-bs-toggle="dropdown"
                    >
                      All Products
                    </Link>
                    <div className="dropdown-menu bg-light m-0">
                      {/* <Link className="dropdown-item drop" to="products">
                        Available Products
                      </Link> */}
                      {/* <Link className="dropdown-item drop" to="addproducts">
                        Add New Products
                      </Link> */}
                      <Link className="dropdown-item drop" to="getup">
                        Available Product
                      </Link>
                      <Link className="dropdown-item drop" to="adpro">
                        Add New Products
                      </Link>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav-item dropdown">
                    <Link
                      to="#"
                      className="nav-link dropdown-toggle admin"
                      style={{
                        color: "white",
                        padding: "20px",
                        margin: "-10px",
                      }}
                      data-bs-toggle="dropdown"
                    >
                      Team Members
                    </Link>
                    <div className="dropdown-menu bg-light m-0">
                      <Link className="dropdown-item drop" to="team_mem">
                        All Members
                      </Link>
                      <Link className="dropdown-item drop" to="addmem">
                        Add New Members
                      </Link>
                      <Link className="dropdown-item drop" to="promanage">
                        Manage Profiles
                      </Link>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav-item dropdown">
                    <Link
                      to="review"
                      className="nav-link  admin"
                      style={{
                        color: "white",
                        padding: "20px",
                        margin: "-10px",
                      }}
                    >
                      Customers Review
                    </Link>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav-item dropdown">
                    <Link
                      to="userlist"
                      className="nav-link  admin"
                      style={{
                        color: "white",
                        padding: "20px",
                        margin: "-10px",
                      }}
                    >
                      Users List
                    </Link>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav-item dropdown">
                    <Link
                      to="orders"
                      className="nav-link  admin"
                      style={{
                        color: "white",
                        padding: "20px",
                        margin: "-10px",
                      }}
                    >
                      Orders
                    </Link>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav-item dropdown">
                    <Link
                      to="#"
                      className="nav-link dropdown-toggle admin"
                      style={{
                        color: "white",
                        padding: "20px",
                        margin: "-10px",
                      }}
                      data-bs-toggle="dropdown"
                    >
                      All Services
                    </Link>
                    <div className="dropdown-menu bg-light m-0">
                      <Link className="dropdown-item drop" to="services">
                        Available Services
                      </Link>
                      <Link className="dropdown-item drop" to="adservice">
                        Add New services
                      </Link>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 text-end ">
              <span
                style={{
                  padding: "18.3px",
                  color: "#404a3d",
                  background: "#eddd5e",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                {fullname}
              </span>
              {fullname ? (
                <a
                  style={{
                    padding: "18.3px",
                    color: "whitesmoke",
                    background: "red",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                  href=""
                  onClick={logOut}
                >
                  Logout
                </a>
              ) : (
                <Link className="btn btn-link text-light" to="adminlogin">
                  <img
                    src="assets/img/admin1.png"
                    style={{ width: "50px", hight: "50px" }}
                  />
                  Admin
                </Link>
              )}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
