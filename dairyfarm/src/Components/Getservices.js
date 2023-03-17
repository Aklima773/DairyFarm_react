import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Getservices() {
  const navigate = useNavigate();
  const [service, setService] = useState([]);
  useEffect(() => {
    allservice();
  }, []);
  const allservice = async () => {
    axios
      .get("http://localhost/react/dairyfarm/dairyfarm/api/allservices.php")
      .then((res) => {
        setService(res.data.datas.pr);
      });
  };
  return (
    <>
      <div className="row gy-5 gx-4">
        {service.map((item, index) => (
          <div
            className="col-lg-4 col-md-6 pt-5 wow fadeInUp"
            data-wow-delay="0.1s"
            key={item.id}
          >
            <div className="service-item d-flex h-100">
              <div className="service-img">
                <img
                  className="img-fluid"
                  src={`/service/${item.photo}`}
                  width="80px"
                />
              </div>
              <div className="service-text p-5 pt-0">
                <div className="service-icon">
                  <img
                    className="img-fluid rounded-circle"
                    src={`/service/${item.photo}`}
                    style={{ width: "150px", height: "110px" }}
                  />
                </div>
                <h5 className="mb-3">{item.name}</h5>
                <p className="mb-4">{item.details}</p>
                <h4 className="mb-4">{item.hour}</h4>
                <h4 className="mb-4">{item.weekly}</h4>
                <a className="btn btn-square rounded-circle" href="">
                  <i className="bi bi-chevron-double-right"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
