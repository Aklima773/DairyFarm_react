import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Addproducts() {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    details: "",
    price: "",
    image: "",
  });

  const onChangeValue = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const SubmitValue = async (e) => {
    e.preventDefault();
    e.persist();
    axios
      .post("http://localhost/Dairyfarm_react/dairyfarm/api/addproducts.php", {
        pname: product.name,
        pdetails: product.details,
        pprice: product.price,
        pimage: product.image,
      })
      .then((res) => {
        alert(res.data.msg);
        navigate("/admin/products");
      });
  };
  return (
    <div>
      <div className="col-sm-12">
        <h2 className="bg-dark text-light" style={{ padding: "20px" }}>
          Add New Products
        </h2>
        <form onSubmit={SubmitValue}>
          <div className="form-group">
            <label>Product Name</label>
            <input
              type="text"
              name="name"
              onChange={onChangeValue}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Product Details</label>
            <textarea
              className="form-control"
              name="details"
              onChange={onChangeValue}
              type="text"
            ></textarea>
          </div>
          <div className="form-group">
            <label>Product Price</label>
            <input
              type="text"
              className="form-control"
              onChange={onChangeValue}
              name="price"
            />
            <input
              type="file"
              className="form-control"
              onChange={onChangeValue}
              name="image"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
