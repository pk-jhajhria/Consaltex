import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
function Loader() {
  const [loading, setLoading] = useState(1);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  if (loading) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }
  return (
    <>
      {" "}
      <section className="preloader">
        {" "}
        {loading ? (
          <div id="root">
            {" "}
            <div class="loader-wrapper">
              {" "}
              <div class="loader">
                <div class="dot"></div>
              </div>
              <div class="loader">
                <div class="dot"></div>
              </div>
              <div class="loader">
                <div class="dot"></div>
              </div>
              <div class="loader">
                <div class="dot"></div>
              </div>
              <div class="loader">
                <div class="dot"></div>
              </div>
              <div class="loader">
                <div class="dot"></div>
              </div>
            </div>{" "}
          </div>
        ) : (
          <></>
        )}{" "}
      </section>{" "}
    </>
  );
}
export default Loader;
