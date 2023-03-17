import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Header() {
  let username = sessionStorage.getItem("username");
  let navigate = useNavigate();

  const userlogOut = () => {
    sessionStorage.clear();
    navigate("/");
  };
  const email = sessionStorage.getItem("email");

  useEffect(() => {
    if (email == null) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <div className="container-fluid bg-dark px-0">
        <div className="row g-0 d-none d-lg-flex">
          <div className="col-lg-6 ps-5 text-start">
            <div className="h-100 d-inline-flex align-items-center text-light">
              <span>Follow Us:</span>
              <a className="btn btn-link text-light" href="a">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-link text-light" href="a">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="btn btn-link text-light" href="a">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="btn btn-link text-light" href="a">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-6 text-end">
            <span
              style={{
                padding: "10px",
                color: "#404a3d",
                background: "#eddd5e",
                fontWeight: "bold",
              }}
            >
              {username}
            </span>
            {username ? (
              <a
                style={{
                  padding: "15px",
                  color: "whitesmoke",
                  background: "red",
                  fontWeight: "bold",
                  border: "2px solid",
                }}
                href=""
                onClick={userlogOut}
              >
                Logout
              </a>
            ) : (
              <Link className="btn btn-link text-light" to="userlogin" >
                <img
                  src="assets/img/client.png"
                  style={{ width: "40px", hight: "40px", padding:"8px" }}
                />
                Login User
              </Link>
            )}
            <div className="h-100 bg-secondary d-inline-flex align-items-center text-dark py-2 px-4">
              <span className="me-2 fw-semi-bold">
                <i className="fa fa-phone-alt me-2"></i>Call Us:
              </span>
              <span>+012 345 6789</span>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <h1 className="m-0">Milky Farm</h1>
        </Link>
        <button
          type="button"
          className="navbar-toggler me-0"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <Link to="/" className="nav-item nav-link active">
              Home
            </Link>
            <Link to="about" className="nav-item nav-link">
              About
            </Link>
            <Link to="service" className="nav-item nav-link">
              Services
            </Link>
            <Link to="product" className="nav-item nav-link">
              Products
            </Link>
            <Link to="myorders" className="nav-item nav-link">
              My Orders
            </Link>
            <div className="nav-item dropdown">
              <Link
                to="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </Link>
              <div className="dropdown-menu bg-light m-0">
                <Link to="gallery" className="dropdown-item">
                  Gallery
                </Link>
                <Link to="feature" className="dropdown-item">
                  Features
                </Link>
                <Link to="team" className="dropdown-item">
                  Our Team
                </Link>
                <Link to="testimonial" className="dropdown-item">
                  Testimonial
                </Link>
                <Link to="notfound" className="dropdown-item">
                  404 Page
                </Link>
              </div>
            </div>
            <Link to="contact" className="nav-item nav-link">
              Contact
            </Link>
          </div>
          <div className="border-start ps-4 d-none d-lg-block">
            <button type="button" className="btn btn-sm p-0">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
