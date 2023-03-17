import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { API_PATH } from "../../API_PATH";

export default function Customerreview() {
  const [review, setReview] = useState([]);

  useEffect(() => {
    allreview();
  }, []);

  const allreview = async () => {
    axios
      .get(`${API_PATH}/allreview.php`)
      .then((res) => {
        setReview(res.data.datas.pr);
      });
  };

  const delconfirm = (id) => {
    delreview(id);
  };
  const delreview = async (id) => {
    axios
      .post(`${API_PATH}/delreview.php`, {
        id: id,
      })
      .then((res) => {
        alert(res.data.msg);
        allreview();
      });
  };

  return (
    <div className="col-sm-12">
      <h2 className="bg-dark text-light" style={{ padding: "20px" }}>
        All Team Members
      </h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Reviews</th>
            <th>Product Id</th>
            <th>Product Name</th>
            <th>Product Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {review.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.review}</td>
              <td>{item.pid}</td>
              <td>{item.pname}</td>
              <td>{item.address}</td>

              <td>
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
    </div>
  );
}
