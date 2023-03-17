import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Editproducts() {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);

  const submitValue = (e) => {
    e.preventDefault();
    productsubmit();
  };

  const productsubmit = () =>
    axios
      .post(
        "http://localhost/Dairyfarm_react/dairyfarm/api/updateproduct.php",
        {
          id: product.id,
          pname: product.name,
          pdetails: product.details,
          // photo: product.photo,
          pprice: product.price,
        }
      )
      .then((res) => {
        navigate("/admin/getup");
        // console.log(res.data);
      });
  useEffect(() => {
    productone(params.id);
  }, []);
  //console.log("MyID:" + params.pid);
  const changeValue = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  const productone = (id) =>
    axios
      .post("http://localhost/Dairyfarm_react/dairyfarm/api/getproduct.php", {
        id: id,
      })
      .then((res) => {
        setProduct(res.data.product.data[0]);
        //console.log(res.data.product.prdata[0]);
      })
      .catch((error) => console.log(error));

  return (
    <div className="col-sm-8">
      <h1>Edit Product</h1>
      <form onSubmit={submitValue}>
        <div className="form-group">
          <label>Product Name</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={changeValue}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Product Details</label>
          <textarea
            className="form-control"
            name="details"
            value={product.details}
            onChange={changeValue}
            type="text"
          ></textarea>
        </div>
        {/* <div className="form-group">
          <label>Product Price</label>
          <input
            type="text"
            className="form-control"
            onChange={changeValue}
            name="price"
            value={product.image}
          />
        </div> */}
        <div className="form-group">
          {/* <label>Product Image</label>
          <input
            type="text"
            className="form-control"
            onChange={changeValue}
            name="photo"
            value={product.photo}
          /> */}
            {/* <img src={`/uploads/${product.image}`} width="80px" /> */}
        </div>
        <div className="form-group">
          <label>Product Price</label>
          <input
            type="text"
            className="form-control"
            onChange={changeValue}
            name="price"
            value={product.price}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
}
