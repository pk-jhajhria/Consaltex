import React from "react";
import hgk_logo from "../assets/img/png/hgk logo.png";
import trust_logo from "../assets/img/png/trust logo.png";
import labx_logo from "../assets/img/png/marketing logo.png";
import febka_logo from "../assets/img/png/fibeka logo.png";
import media_logo from "../assets/img/png/media logo.png";

function Wir() {
  return (
    <>
      <section className=" py-5 bg_full_dark overflow-hidden mt_neg_2">
        <div className="container">
          <div className="pt-md-5">
            <div className="d-flex justify-content-sm-center">
              <p
                className=" ff_montserrat fw_regular fs_xxl text_light_white  wir_para_after_line ms-5 ms-sm-0  mb-0 mt-md-5 d-inline-block  position-relative"
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-offset="200"
                data-aos-delay="200"
              >
                Wir arbeiten mit den besten
              </p>
            </div>

            <div className="row justify-content-lg-between justify-content-sm-center  align-items-center z_index3">
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div
                  className=" mt-4 pe-3 px-sm-3 px-lg-0"
                  data-aos="zoom-in"
                  data-aos-duration="800"
                  data-aos-offset="200"
                  data-aos-delay="200"
                >
                  <img className=" w-100" src={hgk_logo} alt="hgk_logo" />
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div
                  className=" mt-4 ps-3 px-sm-3 px-lg-0"
                  data-aos="zoom-in"
                  data-aos-duration="800"
                  data-aos-offset="200"
                  data-aos-delay="300"
                >
                  <img className=" w-100" src={trust_logo} alt="trust_logo" />
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div
                  className=" mt-4 pe-3 px-sm-3 px-lg-0"
                  data-aos="zoom-in"
                  data-aos-duration="800"
                  data-aos-offset="200"
                  data-aos-delay="400"
                >
                  <img className=" w-100" src={labx_logo} alt="labx_logo" />
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div
                  className=" mt-4 ps-3 px-sm-3 px-lg-0"
                  data-aos="zoom-in"
                  data-aos-duration="800"
                  data-aos-offset="200"
                  data-aos-delay="500"
                >
                  <img className=" w-100" src={febka_logo} alt="febka_logo" />
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div
                  className=" mt-4 pe-3 px-sm-3 px-lg-0"
                  data-aos="zoom-in"
                  data-aos-duration="800"
                  data-aos-offset="200"
                  data-aos-delay="600"
                >
                  <img className=" w-100" src={media_logo} alt="media_logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Wir;
