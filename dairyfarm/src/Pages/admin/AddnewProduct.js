import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddnewProduct() {
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    pname: "",
    pdetails: "",
    pprice: "",
  });

  const [photoinfo, setphotoInfo] = useState({
    file: "",
  });

  const changePhoto = (e) => {
    setphotoInfo({ file: e.target.files[0] });
  };
  //console.log(photoinfo);
  const changeValue = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  //console.log(info);

  const submitHandle = (e) => {
    e.preventDefault();
    fileUpload();

    //console.log(datas);
  };

  const fileUpload = (d) => {
    let datas = new FormData();
    datas.append("mydata", JSON.stringify(info));
    datas.append("mydata1", photoinfo.file);

    axios
      .post(
        "http://localhost/Dairyfarm_react/dairyfarm/api/newupload.php",

        datas,
        { headers: { "content-type": "multipart/form-data" } }
      )
      .then((res) => {
        alert(res.data.msg);
        //console.log(res.data);
        navigate("/admin/getup");
        //console.log(res.data);
      });
  };
  return (
    <div>
      {/* <img src="/uploads/1671444658admin.png" /> */}
      <div className="col-sm-9">
        <h2 className="bg-dark text-light" style={{ padding: "20px" }}>
          Add New Products
        </h2>
        <form onSubmit={submitHandle}>
          <input
            type="text"
            name="pname"
            placeholder="Enter Name"
            className="form-control"
            onChange={changeValue}
          />
          <br />
          <input
            type="text"
            name="pdetails"
            placeholder="Enter Details"
            className="form-control"
            onChange={changeValue}
          />
          <br />

          <input
            type="file"
            name="photo"
            placeholder="Photo"
            className="form-control"
            onChange={changePhoto}
          />
          <br />
          <input
            type="text"
            name="pprice"
            placeholder="Enter price"
            className="form-control"
            onChange={changeValue}
          />
          <br />
          <input type="submit" name="submit" value="SUBMIT" />
        </form>
      </div>
    </div>
  );
}
