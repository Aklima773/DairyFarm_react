import React from "react";
import { Link } from "react-router-dom";
import Getservices from "../Components/Getservices";
import Ourteam from "../Components/Ourteam";
import Homeviewpro from "./Homeviewpro";

export default function Home() {
  return (
    <>
      {/* Carousel */}
      <div className="container-fluid px-0 mb-5">
        <div
          id="header-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="w-100"
                src="assets/img/carousel-1.jpg"
                alt="Image"
              />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-lg-8 text-start">
                      <p className="fs-4 text-white">
                        Welcome to our dairy farm
                      </p>
                      <h1 className="display-1 text-white mb-5 animated slideInRight">
                        The Farm of Dairy products
                      </h1>
                      <Link
                        to=""
                        className="btn btn-secondary rounded-pill py-3 px-5 animated slideInRight"
                      >
                        Explore More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="w-100"
                src="assets/img/carousel-2.jpg"
                alt="Image"
              />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-end">
                    <div className="col-lg-8 text-end">
                      <p className="fs-4 text-white">
                        Welcome to our dairy farm
                      </p>
                      <h1 className="display-1 text-white mb-5 animated slideInRight">
                        Best Organic Dairy Products
                      </h1>
                      <Link
                        to=""
                        className="btn btn-secondary rounded-pill py-3 px-5 animated slideInLeft"
                      >
                        View All Products
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* about us */}
      <div classNameName="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-end">
            <div className="col-lg-6">
              <div className="row g-2">
                <div
                  className="col-6 position-relative wow fadeIn"
                  data-wow-delay="0.7s"
                >
                  <div className="about-experience bg-secondary rounded">
                    <h1 className="display-1 mb-0">25</h1>
                    <small className="fs-5 fw-bold">Years Experience</small>
                  </div>
                </div>
                <div className="col-6 wow fadeIn" data-wow-delay="0.1s">
                  <img
                    className="img-fluid rounded"
                    src="assets/img/service-1.jpg"
                  />
                </div>
                <div className="col-6 wow fadeIn" data-wow-delay="0.3s">
                  <img
                    className="img-fluid rounded"
                    src="assets/img/service-2.jpg"
                  />
                </div>
                <div className="col-6 wow fadeIn" data-wow-delay="0.5s">
                  <img
                    className="img-fluid rounded"
                    src="assets/img/service-3.jpg"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <p className="section-title bg-white text-start text-primary pe-3">
                About Us
              </p>
              <h1 className="mb-4">Know About Our Dairy Farm & Our History</h1>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <div className="row g-5 pt-2 mb-5">
                <div className="col-sm-6">
                  <img
                    className="img-fluid mb-4"
                    src="assets/img/service.png"
                    alt=""
                  />
                  <h5 className="mb-3">Dedicated Services</h5>
                  <span>
                    Clita erat ipsum et lorem et sit, sed stet lorem sit clita
                  </span>
                </div>
                <div className="col-sm-6">
                  <img
                    className="img-fluid mb-4"
                    src="assets/img/product.png"
                    alt=""
                  />
                  <h5 className="mb-3">Organic Products</h5>
                  <span>
                    Clita erat ipsum et lorem et sit, sed stet lorem sit clita
                  </span>
                </div>
              </div>
              <Link className="btn btn-secondary rounded-pill py-3 px-5" to="">
                Explore More
              </Link>
            </div>
          </div>
        </div>
      </div>
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
      {/* <!-- Banner Start --> */}
      <div
        className="container-fluid banner my-5 py-5"
        data-parallax="scroll"
        data-image-src="assets/img/banner.jpg"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.3s">
              <div className="row g-4 align-items-center">
                <div className="col-sm-4">
                  <img
                    className="img-fluid rounded"
                    src="assets/img/banner-1.jpg"
                    alt=""
                  />
                </div>
                <div className="col-sm-8">
                  <h2 className="text-white mb-3">
                    We Sell Best Dairy Products
                  </h2>
                  <p className="text-white mb-4">
                    Clita erat ipsum et lorem et sit, sed stet lorem sit clita
                    duo justo magna dolore erat amet
                  </p>
                  <a
                    className="btn btn-secondary rounded-pill py-2 px-4"
                    href=""
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <div className="row g-4 align-items-center">
                <div className="col-sm-4">
                  <img
                    className="img-fluid rounded"
                    src="assets/img/banner-2.jpg"
                    alt=""
                  />
                </div>
                <div className="col-sm-8">
                  <h2 className="text-white mb-3">
                    We Deliver Fresh Mild Worldwide
                  </h2>
                  <p className="text-white mb-4">
                    Clita erat ipsum et lorem et sit, sed stet lorem sit clita
                    duo justo magna dolore erat amet
                  </p>
                  <a
                    className="btn btn-secondary rounded-pill py-2 px-4"
                    href=""
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Banner End --> */}

      {/* <!-- Service Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto pb-4 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "500px" }}
          >
            <p className="section-title bg-white text-center text-primary px-3">
              Our Services
            </p>
            <h1 className="mb-5">Services That We Offer For Entrepreneurs</h1>
          </div>
          <Getservices />
        </div>
      </div>
      {/* <!-- Service End --> */}
      {/* <!-- Gallery Start --> */}
      <div className="container-xxl py-5 px-0">
        <div className="row g-0">
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="row g-0">
              <div className="col-12">
                <a
                  className="d-block"
                  href="img/gallery-5.jpg"
                  data-lightbox="gallery"
                >
                  <img
                    className="img-fluid"
                    src="assets/img/gallery-5.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-12">
                <a
                  className="d-block"
                  href="img/gallery-1.jpg"
                  data-lightbox="gallery"
                >
                  <img
                    className="img-fluid"
                    src="assets/img/gallery-1.jpg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="row g-0">
              <div className="col-12">
                <a
                  className="d-block"
                  href="img/gallery-2.jpg"
                  data-lightbox="gallery"
                >
                  <img
                    className="img-fluid"
                    src="assets/img/gallery-2.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-12">
                <a
                  className="d-block"
                  href="img/gallery-6.jpg"
                  data-lightbox="gallery"
                >
                  <img
                    className="img-fluid"
                    src="assets/img/gallery-6.jpg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="row g-0">
              <div className="col-12">
                <a
                  className="d-block"
                  href="img/gallery-7.jpg"
                  data-lightbox="gallery"
                >
                  <img
                    className="img-fluid"
                    src="assets/img/gallery-7.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-12">
                <a
                  className="d-block"
                  href="img/gallery-3.jpg"
                  data-lightbox="gallery"
                >
                  <img
                    className="img-fluid"
                    src="assets/img/gallery-3.jpg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
            <div className="row g-0">
              <div className="col-12">
                <a
                  className="d-block"
                  href="img/gallery-4.jpg"
                  data-lightbox="gallery"
                >
                  <img
                    className="img-fluid"
                    src="assets/img/gallery-4.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-12">
                <a
                  className="d-block"
                  href="img/gallery-8.jpg"
                  data-lightbox="gallery"
                >
                  <img
                    className="img-fluid"
                    src="assets/img/gallery-8.jpg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Gallery End --> */}
      {/* <!-- Product Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "500px" }}
          >
            <p className="section-title bg-white text-center text-primary px-3">
              Our Products
            </p>
            <h1 className="mb-5">Our Dairy Products For Healthy Living</h1>
          </div>
          <div className="row gx-4">
            <Homeviewpro />
          </div>
        </div>
      </div>
      {/* <!-- Product End --> */}
      {/* <!-- Team Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "500px" }}
          >
            <p className="section-title bg-white text-center text-primary px-3">
              Our Team
            </p>

            <Ourteam />
          </div>
        </div>
      </div>
      {/* <!-- Team End --> */}
      {/* <!-- Testimonial Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "500px" }}
          >
            <p className="section-title bg-white text-center text-primary px-3">
              Testimonial
            </p>
            <h1 className="mb-5">What People Say About Our Dairy Farm</h1>
          </div>
          <div className="row g-5 align-items-center">
            <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
              <div className="testimonial-img">
                <img
                  className="img-fluid animated pulse infinite"
                  src="assets/img/testimonial-1.jpg"
                  alt=""
                />
                <img
                  className="img-fluid animated pulse infinite"
                  src="assets/img/testimonial-2.jpg"
                  alt=""
                />
                <img
                  className="img-fluid animated pulse infinite"
                  src="assets/img/testimonial-3.jpg"
                  alt=""
                />
                <img
                  className="img-fluid animated pulse infinite"
                  src="assets/img/testimonial-4.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-7 wow fadeInUp" data-wow-delay="0.5s">
              <div className="carousel slide testimonial-carousel">
                <div className="testimonial-item carousel-item active">
                  <img
                    className="img-fluid mb-3"
                    src="assets/img/testimonial-1.jpg"
                    alt=""
                  />
                  <p className="fs-5">
                    Dolores sed duo clita tempor justo dolor et stet lorem kasd
                    labore dolore lorem ipsum. At lorem lorem magna ut et,
                    nonumy et labore et tempor diam tempor erat.
                  </p>
                  <h5>Client Name</h5>
                  <span className="text-primary">Profession</span>
                </div>
                <div className="testimonial-item">
                  <img
                    className="img-fluid mb-3"
                    src="assets/img/testimonial-2.jpg"
                    alt=""
                  />
                  <p className="fs-5">
                    Dolores sed duo clita tempor justo dolor et stet lorem kasd
                    labore dolore lorem ipsum. At lorem lorem magna ut et,
                    nonumy et labore et tempor diam tempor erat.
                  </p>
                  <h5>Client Name</h5>
                  <span className="text-primary">Profession</span>
                </div>
                <div className="testimonial-item">
                  <img
                    className="img-fluid mb-3"
                    src="assets/img/testimonial-3.jpg"
                    alt=""
                  />
                  <p className="fs-5">
                    Dolores sed duo clita tempor justo dolor et stet lorem kasd
                    labore dolore lorem ipsum. At lorem lorem magna ut et,
                    nonumy et labore et tempor diam tempor erat.
                  </p>
                  <h5>Client Name</h5>
                  <span className="text-primary">Profession</span>
                </div>
                <div className="testimonial-item">
                  <img
                    className="img-fluid mb-3"
                    src="assets/img/testimonial-4.jpg"
                    alt=""
                  />
                  <p className="fs-5">
                    Dolores sed duo clita tempor justo dolor et stet lorem kasd
                    labore dolore lorem ipsum. At lorem lorem magna ut et,
                    nonumy et labore et tempor diam tempor erat.
                  </p>
                  <h5>Client Name</h5>
                  <span className="text-primary">Profession</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Testimonial End --> */}
    </>
  );
}
