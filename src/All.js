import React from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Wir from "./components/Wir";
import Schritten from "./components/Schritten";
import Testimonials from "./components/Testimonials";
import Unser from "./components/Unser";
import Liefern from "./components/Liefern";
import So from "./components/So";
import Videos from "./components/Videos";
import Faq from "./components/Faq";
import Calender from "./components/Calender";
import Footer from "./components/Footer";

function All() {
  return (
    <>
      <div className=" hero_bg_img min_vh_100">
        <Nav />
        <Header />
      </div>
      <Wir />
      <Schritten />
      <Testimonials />
      <Unser />
      <Liefern />
      <So />
      <Videos />
      <Faq />
      <Calender />
      <Footer />
    </>
  );
}

export default All;
