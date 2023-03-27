import React, { useState } from "react";
import fb from "../assets/img/svg/fb.svg";
import tiktok from "../assets/img/svg/tiktok.svg";
import in_img from "../assets/img/svg/in.svg";
import insta from "../assets/img/svg/insta.svg";
import youtube from "../assets/img/svg/youtube.svg";
import logo from "../assets/img/svg/Logo.svg";
import nav_arrow from "../assets/img/svg/nav_arrow.svg";
import { Link } from "react-router-dom";
import square_red_box from "../assets/img/png/bg square box.png";
import right_layer from "../assets/img/png/right header layer.png";
import cross_btn from "../assets/img/png/cross btn.png";

function Nav(props) {
  const [navShow, setNavShow] = useState(false);
  if (navShow) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }
  return (
    <>
      <nav className="bg_green_3f  position-relative z_index3">
        <div className={props.Hidelogo}>
          <img
            className=" position-absolute square_box_position z_index1"
            src={square_red_box}
            alt="square_red_box"
          />
        </div>
        <img
          className=" position-absolute right_layer_position d-none d-sm-flex"
          src={right_layer}
          alt="right_layer"
        />
        <div className="container z_index3">
          <div className="d-md-flex justify-content-between align-items-center py-2 z_index3">
            <div className=" d-sm-flex align-items-center z_index3">
              <p className=" mb-0 me-3 ff_montserrat fw_regular fs_xl text_light_white">
                22143 Hamburg, Rahlstedter Bahnhofstraße 27-29
              </p>
              <p className="after_nav_line mb-0 position-relative ms-2 text_light_white ff_montserrat fw_regular fs_xl">
                info@consaltex.de
              </p>
            </div>
            <div className="d-flex gap-2 pt-3 pt-sm-0 z_index3">
              <a className={props.Hidelogo} href="#">
                <img className="icon_hover" src={fb} alt="fb" />
              </a>
              <a className={props.Hidelogo} href="#">
                <img className="icon_hover" src={tiktok} alt="tiktok" />
              </a>
              <a className={props.Hidelogo} href="#">
                <img className="icon_hover" src={in_img} alt="in_img" />
              </a>
              <a className={props.Hidelogo} href="#">
                <img className="icon_hover" src={insta} alt="insta" />
              </a>
              <a className={props.Hidelogo} href="#">
                <img className="icon_hover" src={youtube} alt="youtube" />
              </a>
            </div>
          </div>
        </div>
      </nav>
      <section className="pt-3 z_index3">
        <div className=" container z_index3">
          <div className=" d-flex justify-content-between align-items-center w-100  z_index3">
            <a
              className="ff_inter fw-semibold fs_18 text-white z_index3"
              href="#"
            >
              <img src={logo} alt="logo-img" />
            </a>
            <ul className="d-flex gap-3 gap-xl-4 list-unstyled d-none d-lg-flex align-items-center mb-0 justify-content-end z_index3">
              <Link to="/">
                {" "}
                <li>
                  <a
                    class=" ff_poiret fw_regular fs_xxl text_dark_gray z_index nav_stroke_text "
                    href="#"
                  >
                    Home
                  </a>
                </li>
              </Link>
              <Link to="/kunder">
                {" "}
                <li>
                  <a
                    class=" ff_poiret fw_regular fs_xxl text_dark_gray z_index nav_stroke_text "
                    href="#"
                  >
                    Kundenrezensionen
                  </a>
                </li>
              </Link>
              <Link to="/karriere">
                {" "}
                <li>
                  <a
                    class=" ff_poiret fw_regular fs_xxl text_dark_gray z_index3 nav_stroke_text "
                    href="#"
                  >
                    Karriere
                  </a>
                </li>
              </Link>
            </ul>
            <a
              className=" d-flex gap-2 align-items-center py-2 px-3 nav_btn d-none d-lg-flex z_index3 z_index3"
              href="#"
            >
              <a
                className="ff_poiret fw_regular fs_xxl text_light_white z_index3 text_white_hover"
                href="#"
              >
                Jetzt Erstgespräch vereinbaren
              </a>
              <img src={nav_arrow} alt="nav_arrow" />
            </a>
            <label
              className="menu_formatting d-flex justify-content-end d-lg-none mb-0"
              for="check"
            >
              <input
                onClick={() => setNavShow(true)}
                className="menu bg-black "
                type="checkbox"
                id="check"
              />
              <span className="span_nav1"></span>
              <span className="span_nav2"></span>
              <span className="span_nav3"></span>
            </label>
          </div>
          <div className="d-lg-none d-flex align-items-center  position-relative">
            <div className={` ${navShow ? "nav-fix" : "fix-navbar"}`}>
              <ul class="ps-0 mb-0 d-flex flex-column py-5 align-items-center list-unstyled gap-3 gap-md-5 pt-3 transition">
                <img
                  className=" cross_btn_size"
                  onClick={() => setNavShow(!navShow)}
                  src={cross_btn}
                  alt="cross_btn"
                />
                <li>
                  <a
                    class=" ff_poiret fw_regular fs_xxl text_dark_gray z_index nav_stroke_text "
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    class=" ff_poiret fw_regular fs_xxl text_dark_gray z_index nav_stroke_text "
                    href="#"
                  >
                    Kundenrezensionen
                  </a>
                </li>
                <li>
                  <a
                    class=" ff_poiret fw_regular fs_xxl text_dark_gray z_index nav_stroke_text "
                    href="#"
                  >
                    Karriere
                  </a>
                </li>
                <a
                  className=" d-flex gap-2 align-items-center py-2 px-3 nav_btn d-lg-none"
                  href="#"
                >
                  <a
                    className="ff_poiret fw_regular fs_xxl text_light_white z_index text_white_hover"
                    href="#"
                  >
                    Jetzt Erstgespräch vereinbaren
                  </a>
                  <img src={nav_arrow} alt="nav_arrow" />
                </a>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Nav;
