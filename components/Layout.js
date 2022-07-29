import React from "react";
// import Footer from "./Footer/Footer";
import Navbar from "./Navbar";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("./Footer/Footer"));
const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />

      <div className="container_height">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
