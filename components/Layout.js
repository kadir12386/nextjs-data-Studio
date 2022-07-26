import React from "react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar";

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
