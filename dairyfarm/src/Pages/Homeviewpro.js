import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Homeviewpro() {
  const [product, setProduct] = useState([]);

  //console.log(product);

  useEffect(() => {
    allprod();
  }, []);

  const allprod = async () => {
    axios
      .get("http://localhost/Dairyfarm_react/dairyfarm/api/homeallpro.php")
      .then((res) => {
        setProduct(res.data.datas.pr);
      });
  };
  return (
    <>
      <div className="row gx-4">
        {product.map((item, index) => (
          <div
            className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="product-item" key={item.id}>
              <div className="position-relative">
                <img src={`/uploads/${item.photo}`} width="100%" />
                <div className="product-overlay">
                  <a
                    className="btn btn-square btn-secondary rounded-circle m-1"
                    href=""
                  >
                    <i className="bi bi-link"></i>
                  </a>
                  <a
                    className="btn btn-square btn-secondary rounded-circle m-1"
                    href=""
                  >
                    <i className="bi bi-cart"></i>
                  </a>
                </div>
              </div>
              <div className="text-center p-4">
                <a className="d-block h5" href="">
                  {item.name}
                </a>
                <span className="text-primary me-1">${item.price}</span>
                <span className="text-decoration-line-through">$29.00</span>
              </div>
            </div>
          </div>
        ))}

        <br />
        <Link to="/product">
          <button
            className="btn btn-primary"
            style={{
              width: "20%",
              marginLeft: "450px",
              marginTop: "30px",
              fontWeight: "bold",
            }}
          >
            View All Product
          </button>
        </Link>
      </div>

      {/* <!-- Product End --> */}

      {/* <!-- Features Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <p className="section-title bg-white text-start text-primary pe-3">
                Why Us!
              </p>
              <h1 className="mb-4">Few Reasons Why People Choosing Us!</h1>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <p>
                <i className="fa fa-check text-primary me-3"></i>Justo magna
                erat amet
              </p>
              <p>
                <i className="fa fa-check text-primary me-3"></i>Aliqu diam amet
                diam et eos
              </p>
              <p>
                <i className="fa fa-check text-primary me-3"></i>Clita erat
                ipsum et lorem et sit
              </p>
              <a
                className="btn btn-secondary rounded-pill py-3 px-5 mt-3"
                href=""
              >
                Explore More
              </a>
            </div>
            <div className="col-lg-6">
              <div className="rounded overflow-hidden">
                <div className="row g-0">
                  <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                    <div className="text-center bg-primary py-5 px-4">
                      <img
                        className="img-fluid mb-4"
                        src="assets/img/experience.png"
                        alt=""
                      />
                      <h1
                        className="display-6 text-white"
                        data-toggle="counter-up"
                      >
                        25
                      </h1>
                      <span className="fs-5 fw-semi-bold text-secondary">
                        Years Experience
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                    <div className="text-center bg-secondary py-5 px-4">
                      <img
                        className="img-fluid mb-4"
                        src="assets/img/award.png"
                        alt=""
                      />
                      <h1 className="display-6" data-toggle="counter-up">
                        183
                      </h1>
                      <span className="fs-5 fw-semi-bold text-primary">
                        Award Winning
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-6 wow fadeIn" data-wow-delay="0.5s">
                    <div className="text-center bg-secondary py-5 px-4">
                      <img
                        className="img-fluid mb-4"
                        src="assets/img/animal.png"
                        alt=""
                      />
                      <h1 className="display-6" data-toggle="counter-up">
                        2619
                      </h1>
                      <span className="fs-5 fw-semi-bold text-primary">
                        Total Animals
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-6 wow fadeIn" data-wow-delay="0.7s">
                    <div className="text-center bg-primary py-5 px-4">
                      <img
                        className="img-fluid mb-4"
                        src="assets/img/client.png"
                        alt=""
                      />
                      <h1
                        className="display-6 text-white"
                        data-toggle="counter-up"
                      >
                        51940
                      </h1>
                      <span className="fs-5 fw-semi-bold text-secondary">
                        Happy Clients
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Features End --> */}
    </>
  );
}
