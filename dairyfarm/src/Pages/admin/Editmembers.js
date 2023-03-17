import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_PATH } from "../../API_PATH";

export default function Editmembers() {
  const params = useParams();
  const navigate = useNavigate();
  const [members, setMembers] = useState([]);

  const submitValue = (e) => {
    e.preventDefault();
    memberssubmit();
  };

  const memberssubmit = () =>
    axios
      .post(`${API_PATH}/updatemembers.php`,
        {
          id: members.id,
          name: members.name,
          designation: members.designation,
          Activity: members.Activity,
        }
      )
      .then((res) => {
        navigate("/admin/team_mem");
        // console.log(res.data);
      });
  useEffect(() => {
    productone(params.id);
  }, []);
  //console.log("MyID:" + params.pid);
  const changeValue = (e) => {
    setMembers({ ...members, [e.target.name]: e.target.value });
  };
  const productone = (id) =>
    axios
      .post(`${API_PATH}/getmembers.php`, {
        id: id,
      })
      .then((res) => {
        setMembers(res.data.members.data[0]);
        //console.log(res.data.product.prdata[0]);
      })
      .catch((error) => console.log(error));

  return (
    <div className="col-sm-8">
      <h1>Edit Members</h1>
      <form onSubmit={submitValue}>
        <div className="form-group">
          <label>Member Name</label>
          <input
            type="text"
            name="name"
            value={members.name}
            onChange={changeValue}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Member's Designation</label>
          <textarea
            className="form-control"
            name="designation"
            value={members.designation}
            onChange={changeValue}
            type="text"
          ></textarea>
        </div>

        <div className="form-group">
          <label>Member's Activity</label>
          <input
            type="text"
            className="form-control"
            onChange={changeValue}
            name="Activity"
            value={members.Activity}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
}
