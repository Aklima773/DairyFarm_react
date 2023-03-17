import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  let navigate = useNavigate();
  let email = sessionStorage.getItem("email");

  useEffect(() => {
    if (email == null) {
      navigate("adminlogin");
    }
  }, []);
  return <div></div>;
}
