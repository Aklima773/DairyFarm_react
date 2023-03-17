import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Available_products = () => {
  const [product, setProduct] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const searchedProduct = product.filter(
    (pr) =>
      pr.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pr.price.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  //console.log(product);

  useEffect(() => {
    allprod();
  }, []);

  const allprod = async () => {
    axios
      .get("http://localhost/Dairyfarm_react/dairyfarm/api/allproducts.php")
      .then((res) => {
        setProduct(res.data.datas.pr);
      });
  };

  const delconfirm = (id) => {
    delprod(id);
  };

  const delprod = async (id) => {
    axios
      .post(
        "http://localhost:81/react/dairyfarm/dairyfarm/api/delproduct.php",
        {
          id: id,
        }
      )
      .then((res) => {
        alert(res.data.msg);
        allprod();
      });
  };

  return (
    <div className="col-sm-12">
      <div className="row bg-dark text-light">
        <div className="col-md-8">
          <h2 className="bg-dark text-light" style={{ padding: "20px" }}>
            All Products
          </h2>
        </div>
        <div className="col-md-4 " style={{ padding: "20px" }}>
          <label htmlFor="search">Search:</label>
          <input
            id="search"
            type="text"
            name="searchTerm"
            onChange={handleSearch}
          />
        </div>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Details</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {searchedProduct.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.details}</td>
              <td>{item.price}</td>
              <td>{item.quantity}Litter</td>
              <td>
                {/* <img src={item.image} width="100px" /> */}
                <img src={`/uploads/${item.image}`} width="80px" />
              </td>

              {/* <button type="button" class="btn btn-primary">Submit</button>
            <button type="button" class="btn btn-warning">Cancel</button> */}

              <td>
                <Link
                  to={`/admin/products/editpro${item.id}`}
                  className="btn btn-primary"
                >
                  Edit
                </Link>

                <button
                  onClick={() => delconfirm(item.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/admin/addproducts" className="btn btn-secondary">
        Add new product
      </Link>
    </div>
  );
};

export default Available_products;
