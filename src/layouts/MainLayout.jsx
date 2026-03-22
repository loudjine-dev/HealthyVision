import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout() {
  const location = useLocation();

  const hideFooter = location.pathname.includes("about");

  return (
    <>
      <Navbar />
      <Outlet />
      {!hideFooter && <Footer />}
    </>
  );
}

export default MainLayout;
