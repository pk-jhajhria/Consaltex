import React, { useState } from "react";
import logo from "../assets/img/svg/Logo.svg";
import nav_arrow from "../assets/img/svg/nav_arrow.svg";
import location_img from "../assets/img/svg/location.svg";
import mail_box from "../assets/img/svg/mail.svg";
import heiring_left_layer from "../assets/img/png/left header layer.png";
import red_circle_heiring_right from "../assets/img/png/red circle right.png";

function Heiringheader() {
  const [navShow, setNavShow] = useState(false);
  if (navShow) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }
  return (
    <>
      <section className="bg_full_dark hero_bg_img min_vh_100 position-relative overflow-hidden">
        <img
          className=" position-absolute"
          src={heiring_left_layer}
          alt="heiring_left_layer"
        />
        <img
          className=" position-absolute red_circle_heiring_right"
          src={red_circle_heiring_right}
          alt="red_circle_heiring_right"
        />
        <div className="container pt-5 z_index3">
          <div className="d-flex justify-content-sm-center">
            <p
              className=" ff_montserrat fw_regular fs_xxl text_light_white  wir_para_after_line ms-5 ms-sm-0  mb-0 mt-md-5 d-inline-block  position-relative ps-2"
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-offset="200"
              data-aos-delay="200"
            >
              Initiativbewerbung | Consaltex
            </p>
          </div>
          <h2 className=" text-center text_light_white ff_poiret fw_regular fs_6xl w_md_75 mx-auto">
            Werde ein Teil unserer Erfolgsgeschichte
          </h2>
          <div className="row mt-5 justify-content-around mb-5">
            <div className="col-md-5 d-flex">
              <div className=" d-flex py-5 flex-column justify-content-between">
                <p className=" ff_montserrat fw_regular fs_xxl text_light_white opacity_08">
                  Wir suchen nach Menschen, die wissen, was sie wollen, wohin
                  sie wollen und die ein klares Warum haben.
                </p>
                <div>
                  <div className="d-flex mt-4 pt-2">
                    <img src={location_img} alt="location_img" />
                    <p className=" ff_montserrat fw_regular fs_xxl text_light_white mb-0 ms-4 pe-5 me-5">
                      22143 Hamburg, Rahlstedter Bahnhofstraße 27-29{" "}
                    </p>
                  </div>
                  <div className="d-flex mt-4 pt-2">
                    <img src={mail_box} alt="mail_box" />
                    <p className=" ff_montserrat fw_regular fs_xxl text_light_white mb-0 ms-4 pe-5 me-5">
                      info@consaltex.de
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className=" py-4 px-4 bg_dark_0e">
                <p className=" ff_montserrat fw_semibold fs_xxl text_light_white">
                  Vor- und Nachname
                </p>
                <label className=" w-100">
                  <input
                    className=" w-100 py-2 bg_dark_17 border border-0 outline_none px-md-4 text_light_white ff_montserrat fw_regular fs_xxl"
                    type="text"
                  />
                </label>
                <p className=" ff_montserrat fw_semibold fs_xxl text_light_white mt-4">
                  Vor- und Nachname
                </p>
                <label className=" w-100 border_green">
                  <input
                    className=" w-100 py-2 bg_dark_17 border border-0 outline_none px-md-4 text_light_white ff_montserrat fw_regular fs_xxl"
                    type="text"
                    placeholder="example@mail.com "
                  />
                </label>
                <p className=" ff_montserrat fw_semibold fs_xxl text_light_white mt-4">
                  Erzähl uns von dir
                </p>
                <label className=" w-100">
                  <textarea
                    className=" w-100 bg_dark_17 border border-0 outline_none resize_none px-4 py-2 ff_montserrat fw_regular fs_xxl text_light_white"
                    name=""
                    id=""
                    cols="0"
                    rows="4"
                  ></textarea>
                </label>
                <span className=" d-flex justify-content-center mt-4 pt-3 mb-2">
                  <a
                    className="gap-2 align-items-center py-2 px-3 nav_btn d-inline-block"
                    href="#"
                  >
                    <a
                      className="ff_poiret fw_regular fs_xxl text_light_white z_index text_white_hover d-inline-block"
                      href="#"
                    >
                      Absenden
                    </a>
                    <img className=" ms-5" src={nav_arrow} alt="nav_arrow" />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Heiringheader;
