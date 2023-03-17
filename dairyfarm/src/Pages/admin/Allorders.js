import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { API_PATH } from "../../API_PATH";

export default function Allorders() {
    
    
  




    const shoot = () => {
        alert("Great Shot!");
      }
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
      .get(`${API_PATH}/allorders.php`)
      .then((res) => {
        setOrders(res.data.datas.pr);
      });
  };
  
  const delconfirm = (id) => {
    delprod(id);
  };
  const deliverd = (id) => {
    deliver(id);
  };
  const delprod = async (id) => {
    axios
      .post(`${API_PATH}/delorders.php`, {
        id: id,
      })
      .then((res) => {
        alert(res.data.msg);
        allorders();
      });
  };



  const deliver = async (id) => {
    axios
      .post(`${API_PATH}/deliver.php`, {
        id: id,
      })
      .then((res) => {
        alert(res.data.msg);
        allorders();
      });
  };


  const [buttonText, setButtonText] = useState('Confirm');

  const handleClick= (id) => {
    setButtonText('Delivered');


  }


  
  return (
    <div className="col-md-8 offset-lg-2 " style={{ width:"900px"}}>
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
      <div className="overflow-auto" style={{height:"600px"}} >
      <table className="table table-striped">
        {/* <img src="/service/1671536199bric.jpg"></img> */}
        <thead>
          <tr>
            <th>ID</th>
            <th>User Name</th>
            <th>User Email</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Quantity</th>
            <th>Total Price</th>
            <th>Cancel Order</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {searchedProduct.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{username}</td>
              <td>{useremail}</td>
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
              <td>
             

             {/* <button
               onClick={() => shoot(item.id)}
               className="btn btn-success"
             >
               Confirm
             </button> */}

             <button onClick={() => handleClick(item.id)} className="btn btn-success">{buttonText}</button>
           </td>


            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <button onClick={shoot}>Confirm</button>
      <button id="del">Delivered</button>
     
    </div>
  );
}
