import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Profileview() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    allprod();
  }, []);

  const allprod = async () => {
    axios
      .get("http://localhost/Dairyfarm_react/dairyfarm/api/profileview.php")
      .then((res) => {
        setProduct(res.data.data.product);
      });
  };
  //   const delconfirm = (id) => {
  //     delprod(id);
  //   };
  //   const delprod = async (id) => {
  //     axios
  //       .post("http://localhost:81/react/dairyfarm/dairyfarm/api/delproduct.php", {
  //         id: id,
  //       })
  //       .then((res) => {
  //         alert(res.data.msg);
  //         allprod();
  //       });
  //   };
  return (
    <div className="col-sm-12">
      <h2 className="bg-dark text-light" style={{ padding: "20px" }}>
        Members Profile
      </h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Activity</th>
            <th>Profile Image</th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {product.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.designation}</td>

              <td>
                {/* <img src={`/uploads/${item.photo}`} width="100px" /> */}
              </td>
              <td>{item.Activity}</td>

              {/* <button type="button" class="btn btn-primary">Submit</button>
            <button type="button" class="btn btn-warning">Cancel</button> */}

              <td>
                {/* <Link
                  to={`/admin/products/editpro${item.id}`}
                  className="btn btn-primary"
                >
                  Edit
                </Link> */}

                <button
                //   onClick={() => delconfirm(item.id)}
                //   className="btn btn-danger"
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
}
