import React from "react";
import unser_1 from "../assets/img/png/unser1.png";
import in_img from "../assets/img/svg/in btn.svg";
import { unser_cards } from "../Card";
import testimonials_img from "../assets/img/png/testimional right layer.png";
import gray_circle from "../assets/img/png/green circle.png";
import unser_layer_img from "../assets/img/png/left header layer.png";

function Unser() {
  return (
    <>
      <section className="bg_full_dark py-5 mt_neg_2 position-relative z_index2">
        <img
          className=" position-absolute testimonials_img_position"
          src={testimonials_img}
          alt="testimonials_img"
        />
        <img
          className=" position-absolute"
          src={gray_circle}
          alt="gray_circle"
        />
        <img
          className=" position-absolute unser_layer_position"
          src={unser_layer_img}
          alt="unser_layer_img"
        />
        <div className="container">
          <div className="d-flex justify-content-sm-center">
            <p
              className=" ff_montserrat fw_regular fs_xxl text_light_white  consaltex_after_line ms-sm-0  mb-0 mt-md-5 d-inline-block  position-relative"
              data-aos="zoom-in"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-delay="100"
            >
              Consaltex
            </p>
          </div>
          <h2
            className=" text-center ff_poiret fw_regular fs_6xl text_light_white mt-2"
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-delay="300"
          >
            Unser Team
          </h2>
          <div className="row mt-xl-5 pt-sm-3 justify-content-center">
            {unser_cards.map((data) => {
              return (
                <div
                  className="col-lg-4 col-sm-6 mt-4"
                  data-aos="zoom-in"
                  data-aos-duration="3000"
                  data-aos-offset="200"
                  data-aos-delay="500"
                >
                  <div className=" bg_dark_green_16 h-100 box_hover">
                    <div className="cards h-100">
                      <img className=" w-100" src={data.img} alt="unser_1" />
                      <div className="d-flex justify-content-between align-items-center pt-4 pb-3 px-3">
                        <span>
                          <h3 className=" ff_montserrat fw_semibold fs_2xxl text_light_white">
                            {data.heading}
                          </h3>
                          <h6 className=" ff_montserrat fw_semibold fs_xxl text_light_white mb-0">
                            {data.small}
                          </h6>
                        </span>
                        <img src={in_img} alt="in_img" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Unser;
