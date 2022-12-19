import React from "react";
import { Routes, Route } from "react-router-dom";
import MainDashboard from "../pages/MainDashboard/MainDashboard";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import Email from "../pages/Dashboard/Email";

import Checkout from "../pages/Checkout/Checkout";
import Pricing from "../pages/Pricing";
import MainHome from "../components/Home/MainHome";
import PageNotFound from "../pages/PageNotFound";
import Contact from "../pages/Dashboard/Contact";
const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainHome />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/pricing" element={<Pricing />}></Route>
        <Route path="/dashboard">
          <Route index element={<MainDashboard />} />
          <Route path="/dashboard/contact" element={<Contact />} />
        </Route>
        {/* <Route path="/email" element={<Email />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </>
  );
};

export default Routers;
