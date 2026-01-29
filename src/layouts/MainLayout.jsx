import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout() {
  const location = useLocation();

  // تحقق من أن الصفحة الحالية هي About
  const hideFooter = location.pathname === "/about";

  return (
    <>
      <Navbar />
      <Outlet /> {/* هنا تتغير الصفحات */}
      {!hideFooter && <Footer />} {/* Footer مخفي في صفحة About */}
    </>
  );
}

export default MainLayout;
