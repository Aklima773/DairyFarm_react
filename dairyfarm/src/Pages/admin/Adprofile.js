import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_PATH } from "../../API_PATH";

export default function Adprofile() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    name: "",
    designation: "",
    Activity: "",
    age: "",
  });
  const [profileinfo, setprofileInfo] = useState({
    file: "",
  });
  const changePhoto = (e) => {
    setprofileInfo({ file: e.target.files[0] });
  };
  //console.log(photoinfo);
  const changeValue = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const submitHandle = (e) => {
    e.preventDefault();
    fileUpload();

    //console.log(datas);
  };

  const fileUpload = (d) => {
    let datas = new FormData();
    datas.append("mydata", JSON.stringify(profile));
    datas.append("mydata1", profileinfo.file);

    axios
      .post(`${API_PATH}/adprofile.php`,

        datas,
        { headers: { "content-type": "multipart/form-data" } }
      )
      .then((res) => {
        alert(res.data.msg);
        //console.log(res.data);
        navigate("/admin/promanage");
        //console.log(res.data);
      });
  };
  return (
    <div>
      {/* <img src="/uploads/1671444658admin.png" /> */}
      <div className="col-sm-9">
        <h2 className="bg-dark text-light" style={{ padding: "20px" }}>
          Add New Members
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
            name="designation"
            placeholder="Enter Designation"
            className="form-control"
            onChange={changeValue}
          />
          <br />
          <input
            type="text"
            name="Activity"
            placeholder="Active or Deactive"
            className="form-control"
            onChange={changeValue}
          />
          <br />

          <input
            type="text"
            name="age"
            placeholder="Enter Age"
            className="form-control"
            onChange={changeValue}
          />
          <br />
          <input
            type="file"
            name="photo"
            placeholder="Enter Photo"
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
