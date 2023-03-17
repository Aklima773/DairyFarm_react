import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_PATH } from "../API_PATH";

export default function Orderplace() {
  const params = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState([]);

  const submitValue = (e) => {
    e.preventDefault();
    productsubmit();
  };
  const productsubmit = () =>
    axios
      .post(
        `${API_PATH}/placeorder.php`, {
        id: order.id,
        username: order.username,
        name: order.name,
        quantity: order.quantity,
        price: order.price,
        address: order.address,
      })
      .then((res) => {
        alert(res.data.msg);
        navigate("/product");
        // console.log(res.data);
      });
  useEffect(() => {
    productone(params.id);
  }, []);
  //console.log("MyID:" + params.pid);
  const changeValue = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };
  const productone = (id) =>
    axios
      .post(
        `${API_PATH}/getpro.php`, {
        id: id,
      })
      .then((res) => {
        setOrder(res.data.order.data[0]);
        //console.log(res.data.product.prdata[0]);
      })
      .catch((error) => console.log(error));
  return (
    <div className="col-sm-8">
      <h1>Edit Services</h1>
      <form onSubmit={submitValue}>
        <div className="form-group">
          <label>User Name</label>
          <input
            type="text"
            name="username"
            value={order.username}
            onChange={changeValue}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Product Name</label>
          <textarea
            className="form-control"
            name="name"
            value={order.name}
            onChange={changeValue}
            type="text"
          ></textarea>
        </div>

        <div className="form-group">
          <label>Enter Quantity</label>
          <input
            type="text"
            className="form-control"
            onChange={changeValue}
            name="quantity"
            value={order.quantity}
          />
        </div>
        <div className="form-group">
          <label>Enter Price</label>
          <input
            type="text"
            className="form-control"
            onChange={changeValue}
            name="price"
            value={order.price}
          />
        </div>
        <div className="form-group">
          <label>Enter Address</label>
          <input
            type="text"
            className="form-control"
            onChange={changeValue}
            name="address"
            value={order.address}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Placed Order
        </button>
      </form>
    </div>
  );
}
