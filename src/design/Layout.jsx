import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import CanvasModel from "../canvas/index";

const Layout = () => {
  return (
    <div className="absolute w-full h-screen z-10">
      {/* <div className="fixed top-0 left-0 w-full h-full overflow-hidden">
        <CanvasModel />
      </div> */}
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
