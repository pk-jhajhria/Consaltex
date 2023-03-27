import React, { useRef } from "react";
import card_img from "../assets/img/png/card girl.png";
import play_btn from "../assets/img/svg/Play btn.svg";
import card from "../Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import nav_arrow from "../assets/img/svg/nav_arrow.svg";
import left_arrow from "../assets/img/svg/left arrow.svg";
import right_arrow from "../assets/img/svg/right arrow.svg";
import red_circle from "../assets/img/png/red circle right.png";

function Testimonials() {
  const mysliderbtn = useRef();

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoPlay: false,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className=" py-5 bg_full_dark overflow-hidden position-relative">
        <img
          className=" position-absolute red_circle_position_right z_index3 gray_circle"
          src={red_circle}
          alt="red_circle"
        />
        <div className="container">
          <div className="row z_index3">
            <div className="col-md-8">
              <div className=" row">
                <Slider ref={mysliderbtn} {...settings}>
                  {" "}
                  {card.map((value) => {
                    return (
                      <div
                        className="col-6 px-2"
                        data-aos="zoom-in"
                        data-aos-duration="3000"
                        data-aos-offset="200"
                        data-aos-delay="100"
                      >
                        <div className=" bg_dark_green_16 h_408 h_285 h_310 h_345 h_380">
                          <div className="position-relative">
                            <img
                              className=" w-100"
                              src={value.img}
                              alt="card_img"
                            />
                            <img
                              className=" position-absolute play_btn_position"
                              src={value.playBtn}
                              alt="play_btn"
                            />{" "}
                          </div>
                          <p className=" ff_montserrat fw_regular fs_xxl text_light_white opacity_08 px-3 py-3">
                            {value.lorem}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </Slider>
                <div
                  className=" mb-3 d-md-none mt-5"
                  data-aos="zoom-in"
                  data-aos-duration="3000"
                  data-aos-offset="200"
                  data-aos-delay="200"
                >
                  {" "}
                  <button
                    onClick={() => mysliderbtn.current.slickPrev()}
                    className=" bg_dark_green_36 border border-0"
                  >
                    <img
                      className=" px-3 py-3"
                      src={left_arrow}
                      alt="left_arrow"
                    />
                  </button>
                  <button
                    onClick={() => mysliderbtn.current.slickNext()}
                    className=" bg_dark_green_36 border border-0 ms-3"
                    data-aos="zoom-in"
                    data-aos-duration="3000"
                    data-aos-offset="200"
                    data-aos-delay="400"
                  >
                    <img
                      className=" px-3 py-3"
                      src={right_arrow}
                      alt="left_arrow"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex flex-column justify-content-between h-100">
                <div>
                  <div className="d-flex ms-sm-5 ps-1">
                    <p
                      className=" ff_montserrat fw_regular fs_xxl text_light_white  wir_para_after_line ms-5 ms-sm-0 mb-0 d-inline-block position-relative mb-0"
                      data-aos="zoom-in"
                      data-aos-duration="3000"
                      data-aos-offset="200"
                      data-aos-delay="100"
                    >
                      Das sagen unsere Kunden
                    </p>
                  </div>
                  <h2
                    className=" ff_poiret fw_regular fs_6xl text_light_white mt-1"
                    data-aos="zoom-in"
                    data-aos-duration="3000"
                    data-aos-offset="200"
                    data-aos-delay="300"
                  >
                    Testimonials
                  </h2>
                  <p
                    className=" ff_montserrat fw_regular fs_xxl text_dark_white mt-3 pt-1"
                    data-aos="zoom-in"
                    data-aos-duration="3000"
                    data-aos-offset="200"
                    data-aos-delay="500"
                  >
                    Unsere Kunden berichten über die Zusammenarbeit
                  </p>
                  <a
                    className=" nav_btn  px-3 py-2 mt-sm-4 d-inline-block"
                    href="#"
                    data-aos="zoom-in"
                    data-aos-duration="3000"
                    data-aos-offset="200"
                    data-aos-delay="700"
                  >
                    <a
                      className="text_white_hover ff_poiret fw_regular fs_xxl text_light_white"
                      href="#"
                    >
                      Mehr ansehen
                    </a>
                    <img className=" ms-3" src={nav_arrow} alt="nav_arrow" />
                  </a>
                </div>
                <div className=" mb-3 d-none d-md-flex">
                  {" "}
                  <button
                    onClick={() => mysliderbtn.current.slickPrev()}
                    className=" bg_dark_green_36 border border-0"
                    data-aos="zoom-in"
                    data-aos-duration="3000"
                    data-aos-offset="200"
                    data-aos-delay="800"
                  >
                    <img
                      className=" px-3 py-3"
                      src={left_arrow}
                      alt="left_arrow"
                    />
                  </button>
                  <button
                    onClick={() => mysliderbtn.current.slickNext()}
                    className=" bg_dark_green_36 border border-0 ms-3"
                    data-aos="zoom-in"
                    data-aos-duration="3000"
                    data-aos-offset="200"
                    data-aos-delay="900"
                  >
                    <img
                      className=" px-3 py-3"
                      src={right_arrow}
                      alt="left_arrow"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
