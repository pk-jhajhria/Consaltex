import React from "react";
import location_img from "../assets/img/svg/location.svg";
import mail_box from "../assets/img/svg/mail.svg";
import left_arrow from "../assets/img/svg/calender left.svg";
import right_arrow from "../assets/img/svg/calender right.svg";
import nav_arrow from "../assets/img/svg/nav_arrow.svg";
import red_circle_left from "../assets/img/png/red circle.png";
import right_layer from "../assets/img/png/testimional right layer.png";

function Calender() {
  return (
    <>
      <section className=" py-5 bg_full_dark mt_neg_2 position-relative overflow-hidden">
        <img
          className=" position-absolute red_circle_position_footer gray_circle"
          src={red_circle_left}
          alt="red_circle_left"
        />
        <img
          className=" position-absolute footer_right_layer"
          src={right_layer}
          alt="right_layer"
        />
        <div className="container z_index3">
          <div className="row">
            <div className="col-md-5">
              <div className="d-flex ms-sm-5 ps-1">
                <p className=" ff_montserrat fw_regular fs_xxl text_light_white Noch_after_line ms-sm-0 mb-0 d-inline-block position-relative mb-0">
                  Noch Fragen?
                </p>
              </div>
              <h2 className=" ff_poiret fw_regular fs_6xl text_light_white">
                Jetzt Erstgespräch vereinbaren
              </h2>
              <p className=" ff_montserrat fw_regular fs_xxl text_light_white opacity_08 pe-sm-5 me-sm-5 mt-2">
                Fülle das Formular aus und ein Experte aus unserem Team wird
                sich zum ausgewählten Zeitfenster bei dir melden.
              </p>
              <div className="h_1 bg_light_white opacity_03 ms-5 me-5"></div>
              <div className="d-flex mt-4 pt-2">
                <img src={location_img} alt="location_img" />
                <p className=" ff_montserrat fw_regular fs_xxl text_light_white mb-0 ms-4 pe-sm-5 me-sm-5">
                  22143 Hamburg, Rahlstedter Bahnhofstraße 27-29{" "}
                </p>
              </div>
              <div className="d-flex mt-4 pt-2 mb-4 mb-sm-0">
                <img src={mail_box} alt="mail_box" />
                <p className=" ff_montserrat fw_regular fs_xxl text_light_white mb-0 ms-4 pe-sm-5 me-sm-5">
                  info@consaltex.de
                </p>
              </div>
            </div>
            <div className="col-md-5">
              <div className=" bg_dark_0e pt-4 pb-3 px-4">
                <div className="d-flex justify-content-between align-items-center">
                  <img src={left_arrow} alt="left_arrow" />
                  <p className=" mb-0 ff_montserrat fw_semibold fs_xxl text_light_white">
                    October
                  </p>
                  <img src={right_arrow} alt="right_arrow" />
                </div>
                <div className="d-flex justify-content-between align-items-center mt-4">
                  <p className=" text_light_white ff_montserrat fw_semibold fs_xxl">
                    Sun
                  </p>
                  <p className=" text_light_white ff_montserrat fw_semibold fs_xxl">
                    Mon
                  </p>
                  <p className=" text_light_white ff_montserrat fw_semibold fs_xxl">
                    Tue
                  </p>
                  <p className=" text_light_white ff_montserrat fw_semibold fs_xxl">
                    Wed
                  </p>
                  <p className=" text_light_white ff_montserrat fw_semibold fs_xxl">
                    Thu
                  </p>
                  <p className=" text_light_white ff_montserrat fw_semibold fs_xxl">
                    Fri
                  </p>
                  <p className=" text_light_white ff_montserrat fw_semibold fs_xxl">
                    Sat
                  </p>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <p className=" text_light_white ff_montserrat fw_regular opacity_03 fs_xxl calender_hover">
                    25
                  </p>
                  <p className=" text_light_white ff_montserrat fw_regular opacity_03 fs_xxl calender_hover">
                    26
                  </p>
                  <p className=" text_light_white ff_montserrat fw_regular opacity_03 fs_xxl calender_hover">
                    27
                  </p>
                  <p className=" text_light_white ff_montserrat fw_regular opacity_03 fs_xxl calender_hover">
                    28
                  </p>
                  <p className=" text_light_white ff_montserrat fw_regular opacity_03 fs_xxl calender_hover">
                    29
                  </p>
                  <p className=" text_light_white ff_montserrat fw_regular opacity_03 fs_xxl calender_hover">
                    30
                  </p>
                  <p className=" text_light_white ff_montserrat fw_regular fs_xxl">
                    01
                  </p>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <p className=" text_light_white ff_montserrat fw_regular fs_xxl">
                    02
                  </p>
                  <p className=" text_light_white ff_montserrat fw_regular fs_xxl">
                    03
                  </p>
                  <p className=" text_light_white ff_montserrat fw_regular fs_xxl">
                    04
                  </p>
                  <p className=" text_light_white ff_montserrat fw_regular fs_xxl">
                    05
                  </p>
                  <p className=" text_light_white ff_montserrat fw_regular fs_xxl">
                    06
                  </p>
                  <p className=" text_light_white ff_montserrat fw_regular fs_xxl">
                    07
                  </p>
                  <p className=" text_light_white ff_montserrat fw_regular fs_xxl">
                    08
                  </p>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <p className=" text_light_white ff_montserrat fw_regular fs_xxl">
                    09
                  </p>
                  <p className=" text_light_white ff_montserrat fw_regular fs_xxl">
                    10
                  </p>
                  <p className=" text_light_white ff_montserrat fw_regular fs_xxl">
                    11
                  </p>
                  <p className=" text_light_white ff_montserrat fw_regular fs_xxl">
                    12
                  </p>
                  <p className=" text_light_white ff_montserrat fw_regular fs_xxl">
                    13
                  </p>
                  <p className=" text_light_white ff_montserrat fw_regular fs_xxl">
                    14
                  </p>
                  <p className=" text_light_white ff_montserrat fw_regular fs_xxl">
                    15
                  </p>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <p className=" text_light_white ff_montserrat fw_regular fs_xxl">
                    16
                  </p>
                  <p className=" text_light_white ff_montserrat fw_regular fs_xxl">
                    17
                  </p>
                  <p className=" text_light_white ff_montserrat fw_regular fs_xxl">
                    18
                  </p>
                  <p className=" text_light_white ff_montserrat fw_regular fs_xxl">
                    19
                  </p>
                  <p className=" text_light_white ff_montserrat fw_regular fs_xxl">
                    20
                  </p>
                  <p className=" text_light_white ff_montserrat fw_regular fs_xxl">
                    21
                  </p>
                  <p className=" text_light_white ff_montserrat fw_regular fs_xxl">
                    22
                  </p>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <p className=" text_light_white ff_montserrat fw_regular fs_xxl">
                    23
                  </p>
                  <p className=" text_light_white ff_montserrat fw_regular fs_xxl">
                    24
                  </p>
                  <p className=" text_light_white ff_montserrat fw_regular fs_xxl">
                    25
                  </p>
                  <p className=" text_light_white ff_montserrat fw_regular fs_xxl">
                    26
                  </p>
                  <p className=" text_light_white ff_montserrat fw_regular fs_xxl">
                    27
                  </p>
                  <p className=" text_light_white ff_montserrat fw_regular fs_xxl">
                    28
                  </p>
                  <p className=" text_light_white ff_montserrat fw_regular fs_xxl">
                    29
                  </p>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <p className=" text_light_white ff_montserrat fw_regular fs_xxl">
                    30
                  </p>
                  <p className=" text_light_white ff_montserrat fw_regular fs_xxl">
                    31
                  </p>
                  <p className=" text_light_white ff_montserrat fw_regular fs_xxl opacity_03">
                    01
                  </p>
                  <p className=" text_light_white ff_montserrat fw_regular fs_xxl opacity_03">
                    02
                  </p>
                  <p className=" text_light_white ff_montserrat fw_regular fs_xxl opacity_03">
                    03
                  </p>
                  <p className=" text_light_white ff_montserrat fw_regular fs_xxl opacity_03">
                    04
                  </p>
                  <p className=" text_light_white ff_montserrat fw_regular fs_xxl opacity_03">
                    05
                  </p>
                </div>
                <p className=" ff_montserrat fw_semibold fs_xxl text_light_white text-center mt-4 pt-2">
                  Timings
                </p>
                <div className="d-flex">
                  <button className=" bg_dark_17 border border-0 py-2 px-xl-4 px-xxl-5 px-2 ff_montserrat fw_regular fs_xxl text_light_white">
                    1.00 PM-2.00 PM
                  </button>
                  <button className=" bg_dark_17 border border-0 py-2 px-xl-4 px-xxl-5 px-2 ff_montserrat fw_regular fs_xxl text_light_white ms-3">
                    3.00 PM-4.00 PM
                  </button>
                </div>
                <button className=" bg_dark_17 border border-0 py-2 px-xl-4 px-xxl-5 px-2 white_space ff_montserrat fw_regular fs_xxl text_light_white mt-3">
                  3.00 PM-4.00 PM
                </button>
                <div className=" d-flex justify-content-center mt-4">
                  <a
                    className=" px-3 py-2 calender_btn d-inline-block"
                    href="#"
                  >
                    <a
                      className=" ff_poiret fw_regular fs_xxl text_light_white"
                      href="#"
                    >
                      Submit
                    </a>
                    <img
                      className=" ms-5 ps-4"
                      src={nav_arrow}
                      alt="nav_arrow"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Calender;
