import React from "react";
import { Container } from "react-bootstrap";
import statue_img from "../assets/img/png/statue_img.png";
import nav_arrow from "../assets/img/svg/nav_arrow.svg";
import gray_box from "../assets/img/png/bg box gray.png";
import left_gray_layer from "../assets/img/png/left header layer.png";
import gray_circle from "../assets/img/png/gray circle box.png";
import circle_red from "../assets/img/png/red circle.png";

function Header() {
  return (
    <>
      <header className=" py-sm-5 pb-5 pt-4 position-relative z_index1">
        <img
          className=" position-absolute gray_box_position"
          src={gray_box}
          alt="gray_box"
        />
        <img
          className=" position-absolute left_layer_position z_index1 d-none d-sm-flex"
          src={left_gray_layer}
          alt="left_gray_layer"
        />
        <img
          className=" position-absolute end-0 top-50 z_index1 gray_circle"
          src={gray_circle}
          alt="gray_circle"
        />
        <img
          className=" position-absolute red_circle_position animayion_scale"
          src={circle_red}
          alt="circle_red"
        />
        <Container className=" z_index3">
          <div className="ms-xl-5">
            <p
              className=" ff_montserrat fw_regular fs_xxl text_light_white  header_para_after_line position-relative ms-xl-5 ps-5"
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              Wie Testosteron für deine Agentur
            </p>
            <h1
              className=" ff_poiret fw_regular fs_10xl text_light_white text-en d text-xl-center me-xl-5 mb-md-0"
              data-aos="zoom-in"
              data-aos-duration="3000"
            >
              Wir verhelfen{" "}
              <span className=" bg_red border_radius pb-2 mb-0 px-4">
                Agenturen
              </span>
            </h1>
            <h1
              className="ff_poiret fw_regular fs_10xl text_light_white text-e nd text-xl-center ms-xl-5 ps-xl-5 mb_neg_70"
              data-aos="zoom-in"
              data-aos-duration="3000"
            >
              zu Rekordumsätzen
            </h1>
          </div>
          <div className="row align-items-center justify-content-between justify-content-md-start z_index3">
            <div
              className="col-md-6 position-relative z_index3"
              data-aos="fade-right"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-delay="200"
            >
              <img
                className=" w-100 px-xl-5 mx-xxl-5 py-4 py-xxl-0 pb-md-0 statue_img"
                src={statue_img}
                alt="statue_img"
              />
            </div>
            <div className="col-md-5 z_index3">
              <div className="pe-xxl-5 me-xxl-5 min_vh_30">
                <p
                  className=" ff_montserrat fw_regular fs_xxl text_light_white me-xl-5 pe-xl-5"
                  data-aos="fade-down"
                  data-aos-duration="3000"
                  data-aos-offset="200"
                  data-aos-delay="200"
                >
                  Zünde die Wachstumsrakete und katapultiere deinen Umsatz in
                  eine neue Dimension!
                </p>
                <a
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  data-aos-offset="200"
                  data-aos-delay="200"
                  className=" nav_btn  px-3 py-2 mt-sm-4 d-inline-block"
                  href="#"
                >
                  <a
                    className="text_white_hover ff_poiret fw_regular fs_xxl text_light_white"
                    href="#"
                  >
                    Sprich jetzt mit unserem Team
                  </a>
                  <img className=" ms-3" src={nav_arrow} alt="nav_arrow" />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
}

export default Header;
