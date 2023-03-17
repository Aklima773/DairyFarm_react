import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Addnewservice() {
  const navigate = useNavigate();
  const [service, setService] = useState({
    name: "",
    details: "",
    hour: "",
    weekly: "",
  });

  const [serviceinfo, setserviceInfo] = useState({
    file: "",
  });

  const changePhoto = (e) => {
    setserviceInfo({ file: e.target.files[0] });
  };
  //console.log(photoinfo);
  const changeValue = (e) => {
    setService({ ...service, [e.target.name]: e.target.value });
  };
  //console.log(info);

  const submitHandle = (e) => {
    e.preventDefault();
    fileUpload();

    //console.log(datas);
  };

  const fileUpload = (d) => {
    let datas = new FormData();
    datas.append("mydata", JSON.stringify(service));
    datas.append("mydata1", serviceinfo.file);

    axios
      .post(
        "http://localhost/Dairyfarm_react/dairyfarm/api/serviceupload.php",

        datas,
        { headers: { "content-type": "multipart/form-data" } }
      )
      .then((res) => {
        alert(res.data.msg);
        //console.log(res.data);
        navigate("/admin/services");
        //console.log(res.data);
      });
  };
  return (
    <div>
      <div className="col-sm-9">
        <h2 className="bg-dark text-light" style={{ padding: "20px" }}>
          Add New Services
        </h2>
        <form onSubmit={submitHandle}>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            className="form-control"
            onChange={changeValue}
          />
          <br />
          <input
            type="text"
            name="details"
            placeholder="Enter Details"
            className="form-control"
            onChange={changeValue}
          />
          <br />
          <input
            type="text"
            name="hour"
            placeholder="Enter  Available Service Hour"
            className="form-control"
            onChange={changeValue}
          />
          <br />
          <input
            type="text"
            name="Weekly"
            placeholder="Enter  Available Service Weekly"
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

          <input type="submit" name="submit" value="SUBMIT" />
        </form>
      </div>
    </div>
  );
}
