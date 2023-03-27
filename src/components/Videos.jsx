import React from "react";
import nav_arrow from "../assets/img/svg/nav_arrow.svg";
import { themen } from "../Card";
import green_square_box from "../assets/img/png/green square box.png";

function Videos() {
  return (
    <>
      <section className="py-5 bg_full_dark mt_neg_2 position-relative overflow-hidden">
        <img
          className=" position-absolute green_square_box_position z_index1 d-none d-sm-flex gray_circle"
          src={green_square_box}
          alt="green_square_box"
        />
        <div className="container">
          <div className="d-flex justify-content-sm-center">
            <p
              className=" ff_montserrat fw_regular fs_xxl text_light_white  videos_after_line mb-0 mt-md-5 d-inline-block  position-relative"
              data-aos="fade-down"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-delay="200"
            >
              Videos
            </p>
          </div>
          <h2
            className=" ff_poiret fw_regular fs_6xl text_light_white text-center mt-2"
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-delay="200"
          >
            Aktuelle Themen
          </h2>
          <div className="row mt-sm-5 pt-2 justify-content-center z_index3">
            {themen.map((value) => {
              return (
                <div
                  className="col-md-4 col-sm-6 mt-3"
                  data-aos="zoom-in"
                  data-aos-duration="3000"
                  data-aos-offset="200"
                  data-aos-delay="200"
                >
                  <div className=" bg_dark_green_16 h-100 d-flex flex-column justify-content-between box_hover">
                    <div className=" cards h-100">
                      <div className="">
                        {" "}
                        <img className=" w-100" src={value.img} alt="videos1" />
                        <p className=" px-3 pt-3 ff_montserrat fw_regular fs_xxl text_light_white opacity_08">
                          <em> {value.heading}</em>
                        </p>
                        <p className=" ff_montserrat fw_semibold fs_2xl text_light_white mb-0 px-3">
                          {value.lorem}
                        </p>
                      </div>
                      <div className=" px-3 pb-4">
                        <p className=" ff_montserrat fs_2xl fw_semibold text_green mb-0 mt-4">
                          {value.btn}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            className="d-flex justify-content-center mt-5"
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-delay="200"
          >
            <a className=" nav_btn  px-3 py-2 mt-sm-4 d-inline-block" href="#">
              <a
                className="text_white_hover ff_poiret fw_regular fs_xxl text_light_white"
                href="#"
              >
                Mehr ansehen
              </a>
              <img className=" ms-3" src={nav_arrow} alt="nav_arrow" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Videos;
