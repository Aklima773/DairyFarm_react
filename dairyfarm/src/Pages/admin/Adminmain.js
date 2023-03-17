import React from "react";
import { Outlet } from "react-router-dom";
import Adfooter from "../../Components/Adfooter";
import Navber from "../../Components/Navber";
import Sidebar from "./Sidebar";

export default function Adminmain() {
  return (
    <>
     <Navber />
      <div className="p-5 bg-primary text-white text-center">
        <h1 style={{ color: "white" }}>Welcome to Admin Pannel</h1>
        <p>Hello! {sessionStorage.getItem("fullname")}</p>
      </div>
     

      <div className="container mt-2">
        <div className="row">
          <div className="col-sm-2">
            <Sidebar />
            <hr className="d-sm-none" />
          </div>
          <div className="col-sm-10">
            <Outlet />
          </div>
        </div>
      </div>
      <Adfooter />
    </>
  );
}
