import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Orders() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const searchedProduct = orders.filter(
    (pr) =>
      pr.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pr.hour.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
      pr.weekly.toLowerCase().includes(searchTerm.toLocaleLowerCase())
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
  const orderconfirm = (id) => {
    delprod(id);
  };
  const delprod = async (id) => {
    axios
      .post("http://localhost/Dairyfarm_react/dairyfarm/api/orderconfirm.php", {
        id: id,
      })
      .then((res) => {
        alert(res.data.msg);
        allorders();
      });
  };

  return (
    <div className="col-sm-12">
      <h2 className="bg-dark text-light" style={{ padding: "20px" }}>
        Orders In Procecing
      </h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>User Name</th>
            <th>Product Name</th>
            <th>Product Quantity</th>
            <th>Product Price</th>
            <th>User Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.username}</td>
              <td>{item.name}</td>

              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>{item.address}</td>
              <td>
                <button
                  onClick={() => orderconfirm(item.id)}
                  className="btn btn-success"
                >
                  Order Confirm
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
