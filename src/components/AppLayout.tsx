import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};
export default AppLayout;
