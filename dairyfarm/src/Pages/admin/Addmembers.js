import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { API_PATH } from "../../API_PATH";

export default function Addmembers() {
  const navigate = useNavigate();
  const [members, setMembers] = useState({
    name: "",
    designation: "",
    Activity: "",
  });
  const onChangeValue = (e) => {
    setMembers({ ...members, [e.target.name]: e.target.value });
  };
  const SubmitValue = async (e) => {
    e.preventDefault();
    e.persist();
    axios
      .post(`${API_PATH}/addmem.php`, {
        name: members.name,
        designation: members.designation,
        Activity: members.Activity,
      })
      .then((res) => {
        alert(res.data.msg);
        navigate("/admin/team_mem");
      });
  };
  return (
    <div>
      <div className="col-sm-12">
        <h2 className="bg-dark text-light" style={{ padding: "20px" }}>
          Add New Members
        </h2>
        <form onSubmit={SubmitValue}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              onChange={onChangeValue}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Designation</label>
            <textarea
              className="form-control"
              name="designation"
              onChange={onChangeValue}
              type="text"
            ></textarea>
          </div>
          <div className="form-group">
            <label>Activity</label>
            <input
              type="text"
              className="form-control"
              onChange={onChangeValue}
              name="Activity"
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
