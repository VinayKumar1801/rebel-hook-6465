import React from "react";
import { useSelector } from "react-redux";
import SidebarWithHeader from "../../components/Sidebar/Sidebar";
import { Navigate, Route, Routes } from "react-router-dom";
import Email from "../Dashboard/Email";
import Contact from "../Dashboard/Contact";

const MainDashboard = () => {
  const { isAuth } = useSelector((store) => store.userLogin);
  if (!isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <SidebarWithHeader />
      <Email />
    </div>
  );
};

export default MainDashboard;
