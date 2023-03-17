import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { API_PATH } from "../../API_PATH";

export default function Getup() {
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
      .get(`${API_PATH}/allup.php`)
      .then((res) => {
        setProduct(res.data.datas.pr);
      });
  };
  const delconfirm = (id) => {
    delprod(id);
  };

  const delprod = async (id) => {
    axios
      .post(`${API_PATH}/delproduct.php`, {
        id: id,
      })
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
        <div className="col-md-4  " style={{ padding: "20px" }}>
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
            <th>Photo</th>
            <th>Price</th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {searchedProduct.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.details}</td>

              <td>
                <img src={`/uploads/${item.photo}`} width="80px" />
              </td>
              <td>${item.price}</td>

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
      <Link to="/admin/adpro" className="btn btn-secondary">
        Add new product
      </Link>
    </div>
  );
}
