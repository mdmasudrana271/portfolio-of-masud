import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../pages/Header/Header";
import Footer from "../pages/Footer/Footer";

const Main = () => {
  return (
    <div className=" bg-hero-bg bg-cover bg-no-repeat">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
