import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_PATH } from "../API_PATH";

export default function Orderplace() {
    const navigat = useNavigate();
    const [products, setProducts] = useState({
        username: "",
        useremail: "",
        name: "",
        price: "",
        quantity: "",
        totalprice:"",
       
        
      });
      
  const onChangeValue = (e) => {
    setProducts({ ...products, [e.target.name]: e.target.value });
  };


  const SubmitValue = async (e) => {
    e.preventDefault();
    e.persist();
    axios
      .post(
        `${API_PATH}/cartorder.php`, {
        username: username,
        useremail: useremail,
        pname: product.name,
        pprice: product.price,
        quantity: product.quantity,
        totalprice: product.price *  product.quantity,
      
      
       
      })
      .then((res) => {
        alert(res.data.msg);
        navigat("/product");
      });
  };




    ///
    let username = sessionStorage.getItem("username");
   

    let navigates = useNavigate();
   const userlogOut = () => {
      sessionStorage.clear();
      navigate("/");
    };
    const useremail = sessionStorage.getItem("email");
    
  
    useEffect(() => {
      if (useremail == null) {
        navigates("/userlogin");
      }
    }, []);
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    productone(params.id);
  }, []);

  const productone = (id) =>
    axios
      .post(
        `${API_PATH}/getorder.php`, {
        id: id,
      })
      .then((res) => {
        setProduct(res.data.product.data[0]);
        //console.log(res.data.product.prdata[0]);
      })
      .catch((error) => console.log(error));


      

  return (
    
    <div className="col-lg-6 offset-lg-3">
      <h1>Edit Product</h1>

     
      <form onSubmit={SubmitValue} >
        <div className="form-group">
          <label>User Name</label>
          <input
            type="text"
            name="username"
            onChange={onChangeValue}
            value={username}
           
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>User Email</label>
          <input
            type="text"
            name="useremail"
            onChange={onChangeValue}
            value={useremail}
           
            className="form-control"
          />
        </div>
     
        <div className="form-group">
          <label>Product Name</label>
          <input
            type="text"
            name="pname"
            value={product.name}
            onChange={onChangeValue}
            className="form-control"
          />
        </div>
     
        <div className="form-group">
          <label>Product Price in $</label>
          <input
            type="text"
            className="form-control"
            onChange={onChangeValue}
            name="pprice"
            value={product.price}
          />
        </div>
        <div className="form-group">
          <label>Product Quantity in Litter</label>
          <input
            type="number"
            className="form-control"
            onChange={onChangeValue}
            name="quantity"
            value={product.quantity}
          />
        </div>

        <div className="form-group">
          <label>Total Price in $</label>
          <input
            type="number"
            className="form-control"
            onChange={onChangeValue}
            name="totalprice"
            value={product.quantity * product.price}
          />
        
        </div>
        <br/>
        
        <button type="submit" className="btn btn-secondary">
         Place Order
        </button>
      </form>
    </div>
  );
}
