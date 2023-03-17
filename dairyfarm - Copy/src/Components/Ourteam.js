import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Ourteam() {
  const [allmem, setMem] = useState([]);

  useEffect(() => {
    allmembers();
  }, []);

  const allmembers = async () => {
    axios
      .get("http://localhost/react/dairyfarm/dairyfarm/api/allmem.php")
      .then((res) => {
        setMem(res.data.datas.pr);
      });
  };
  return (
    <>
      {/* <!-- Team Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "500px" }}
          >
            <h1 className="mb-5">Experienced Team Members</h1>
          </div>
          <div className="row g-4">
            {allmem.map((item, index) => (
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
                key={item.id}
              >
                <div className="team-item rounded p-4">
                  {/* <img className="img-fluid rounded mb-4" src="../assets/img/team-1.jpg" alt=""/> */}
                  <img
                    className="img-fluid rounded mb-4"
                    src={`/profile/${item.photo}`}
                    style={{ width: "100%" }}
                  />
                  <h4>{item.name}</h4>
                  <h5 className="text-primary">{item.designation}</h5>
                  <p className="text-primary" style={{ fontWeight: "bold" }}>
                    Age:
                    {item.age}
                  </p>
                  <div className="d-flex justify-content-center">
                    <button className="btn btn-success">{item.Activity}</button>
                  </div>
                </div>
              </div>
            ))}
            {/* <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="team-item rounded p-4">
                    <img className="img-fluid rounded mb-4" src="../assets/img/team-2.jpg" alt=""/>
                    <h5>Doris Jordan</h5>
                    <p className="text-primary">Veterinarian</p>
                    <div className="d-flex justify-content-center">
                    <button className='btn btn-success'>Active</button>
                    </div>
                </div>
            </div> */}
            {/* <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="team-item rounded p-4">
                    <img className="img-fluid rounded mb-4" src="../assets/img/team-3.jpg" alt=""/>
                    <h5>Jack Dawson</h5>
                    <p className="text-primary">Farmer</p>
                    <div className="d-flex justify-content-center">
                        <button className='btn btn-success'>Active</button>
                    </div>
                </div>
            </div> */}
          </div>
          <br />
        </div>
      </div>
      {/* <!-- Team End --> */}
    </>
  );
}
