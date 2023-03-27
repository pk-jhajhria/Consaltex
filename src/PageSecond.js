import React from "react";
import Kundenstimmen from "./components/Kundenstimmen";
import TestimonialsHeader from "./components/TestimonialsHeader";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

function PageSecond() {
  return (
    <>
      <Nav Hidelogo={"d-none"} width={"w-100"} />
      <TestimonialsHeader />
      <Kundenstimmen />
      <Footer />
    </>
  );
}

export default PageSecond;
