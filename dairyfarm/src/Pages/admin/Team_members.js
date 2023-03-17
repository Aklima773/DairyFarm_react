import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { API_PATH } from "../../API_PATH";
export default function Team_members() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    allmem();
  }, []);

  const allmem = async () => {
    axios
      .get(`${API_PATH}/allmembers.php`)
      .then((res) => {
        setTeam(res.data.datas.teamm);
      });
  };

  const delconfirm = (id) => {
    delmem(id);
  };
  const delmem = async (id) => {
    axios
      .post(`${API_PATH}/delmem.php`, {
        id: id,
      })
      .then((res) => {
        alert(res.data.msg);
        allmem();
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
            <th>Designation</th>
            <th>Activity</th>
            {/* <th>Profile</th> */}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {team.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.designation}</td>
              <td>{item.Activity}</td>
              {/* <td><Link to={`/admin/team_mem/profile${item.id}`} className="btn btn-primary">
              
                  View
                </Link></td> */}

              {/* <button type="button" class="btn btn-primary">Submit</button>
            <button type="button" class="btn btn-warning">Cancel</button> */}

              <td>
                <Link
                  to={`/admin/team_mem/editmem${item.id}`}
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
      <Link to="/admin/addmem" className="btn btn-secondary">
        Add new Members
      </Link>
    </div>
  );
}
