import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Myorders() {

  let username = sessionStorage.getItem("username");
   

  let navigates = useNavigate();
 const userlogOut = () => {
    sessionStorage.clear();
    navigate("/");
  };
  const useremail = sessionStorage.getItem("email");
  

  useEffect(() => {
    if (useremail == null) {
      navigates("/");
    }
  }, []);

  //
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const searchedProduct = orders.filter(
    (pr) =>
      pr.pname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pr.pprice.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
      pr.totalprice.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  useEffect(() => {
    allorders();
  }, []);

  const allorders = async () => {
    axios
      .get("http://localhost/Dairyfarm_react/dairyfarm/api/allorders.php")
      .then((res) => {
        setOrders(res.data.datas.pr);
      });
  };
  const delconfirm = (id) => {
    delprod(id);
  };
  const delprod = async (id) => {
    axios
      .post("http://localhost/Dairyfarm_react/dairyfarm/api/delorders.php", {
        id: id,
      })
      .then((res) => {
        alert(res.data.msg);
        allorders();
      });
  };

  return (
    <div className="col-lg-6 offset-lg-3">
      <div className="row bg-dark text-light">
        <div className="col-md-8">
          <h2 className="bg-dark text-light" style={{ padding: "20px" }}>
            All Orders
          </h2>
        </div>
        <div className="col-md-4  " style={{ padding: "20px" }}>
          <label htmlFor="search">Search: </label>
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
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Quantity</th>
            <th>Total Price</th>
            
            

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {searchedProduct.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.pname}</td>
              <td>${item.pprice}</td>
              <td>{item.quantity} litter</td>
              <td>${item.totalprice}</td>
            

              <td>
             

                <button
                  onClick={() => delconfirm(item.id)}
                  className="btn btn-danger"
                >
                  Cancel Order
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    
    </div>
  );
}
