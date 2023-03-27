import "./App.css";
import "./Root.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Route, Routes } from "react-router-dom";
// // import Nav from "./components/Nav";
// import Nav from "./components/Nav";
// import Header from "./components/Header";
import All from "./All";
import PageSecond from "./PageSecond";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import Heiring from "./Heiring";
import BackToTop from "./components/BackTop";
import Loader from "./components/Loader";

function App() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <>
      <div className=" overflow-hidden">
        <Loader></Loader>
        <BackToTop />
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/kunder" element={<PageSecond />} />
          <Route path="/karriere" element={<Heiring />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
