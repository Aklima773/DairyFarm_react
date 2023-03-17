import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { API_PATH } from "../API_PATH";

export default function GetOrders() {
  const [orders, setOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const searchedProduct = orders.filter(
    (pr) => pr.uid.toLowerCase().includes(searchTerm.toLowerCase())
    // pr.price.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  );
  useEffect(() => {
    allorders();
  }, []);

  const allorders = async () => {
    axios
      .get(
        `${API_PATH}/getorders.php`)
      .then((res) => {
        setOrders(res.data.data.product);
      });
  };
  const delconfirm = (id) => {
    delprod(id);
  };

  const delprod = async (id) => {
    axios
      .post(`${API_PATH}/delorder.php`, {
        id: id,
      })
      .then((res) => {
        alert(res.data.msg);
        allorders();
      });
  };
  return (
    <>
      <div
        className="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center py-5">
          <h1 className="display-3 text-white mb-4 animated slideInDown">
            View Bills
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/">Pages</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Products
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "500px" }}
          >
            <h1 className="mb-5">Orderd Product</h1>
          </div>
          <div className=" " style={{ padding: "20px", width: "50px" }}>
            <label htmlFor="search">Search:</label>
            <input
              id="search"
              type="text"
              name="searchTerm"
              onChange={handleSearch}
            />
          </div>
          <div className="row gx-4">
            {searchedProduct.map((item, index) => (
              <div
                className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="product-item" key={item.id}>
                  <div className="position-relative">
                    <div className="product-overlay">
                      <a
                        className="btn btn-square btn-secondary rounded-circle m-1"
                        href=""
                      >
                        <i className="bi bi-link"></i>
                      </a>
                      <a
                        className="btn btn-square btn-secondary rounded-circle m-1"
                        href=""
                      >
                        <i className="bi bi-cart"></i>
                      </a>
                    </div>
                  </div>
                  <div className="text-center p-4">
                    <p className="d-block h5" href="">
                      {item.uid}
                    </p>
                    <p className="d-block h5" href="">
                      {item.username}
                    </p>
                    <p className="d-block h5" href="">
                      {item.name}
                    </p>
                    <span className="text-primary me-1">${item.price}</span>
                    <span className="text-primary me-1">
                      ${item.quantity}liter
                    </span>
                    <span className="text-primary me-1">${item.address}</span>

                    <br />
                    <button
                      onClick={() => delconfirm(item.id)}
                      className="btn btn-danger"
                    >
                      Remove Order
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
