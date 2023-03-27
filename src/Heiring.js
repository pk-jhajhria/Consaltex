import React from "react";
import Heiringheader from "./components/Heiringheader";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

function Heiring() {
  return (
    <>
      <Nav Hidelogo={"d-none"} />
      <Heiringheader />
      <Footer />
    </>
  );
}

export default Heiring;
