import React, { useState } from "react";
import bigGirl from "../assets/img/png/girl img big.png";
import nav_arrow from "../assets/img/svg/nav_arrow.svg";
import logo from "../assets/img/svg/Logo.svg";
import vdoBtn from "../assets/img/svg/Play btn.svg";
import red_circle_right from "../assets/img/png/red circle right.png";

function TestimonialsHeader() {
  const [navShow, setNavShow] = useState(false);
  if (navShow) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }
  return (
    <>
      <section className=" pb-5 bg_full_dark position-relative overflow-hidden">
        <img
          className=" position-absolute red_circle_second_page"
          src={red_circle_right}
          alt="red_circle_right"
        />
        <div className="container z_index3">
          <div className=" bg_dark_green_16 mt-5 z_index3">
            <div className=" position-relative z_index3">
              <img className=" w-100  z_index3" src={bigGirl} alt="bigGirl" />
              <a href="#">
                {" "}
                <img
                  className=" vdo_btn_classes position-absolute z_index3"
                  src={vdoBtn}
                  alt="vdoBtn"
                />
              </a>
            </div>
            <p className=" ff_montserrat fw_semibold fs_xxl text_light_white opacity_08 py-3 px-3 z_index2">
              Sit nec cras varius leo sit consectetur eros. Odio egestas
              malesuada interdum scelerisque sed facilisis tincidunt arcu. Ut
              scelerisque sodales senectus feugiat sem nec consequat. Sed erat
              aliquet euismod sed pellentesque ut ornare integer risus. Nam
              varius et scelerisque amet a suscipit felis. Amet odio aliquam
              orci et et ac. Quam non neque condimentum consequat augue odio
              malesuada. Est sit faucibus egestas pretium ipsum elementum turpis
              ultrices lacus. Leo aliquam, orci, in facilisis venenatis enim.
              Feugiat dictumst eget amet eget. Molestie mollis risus porta a
              magna a. Pellentesque at enim ultricies tortor enim.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default TestimonialsHeader;
