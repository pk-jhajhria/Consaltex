import React from "react";
import logo from "../assets/img/svg/Logo.svg";

function Footer() {
  return (
    <>
      <footer className=" py-sm-5 py-4 bg_dark_0e mt_neg_2">
        <div className="container">
          <div className="row align-items-center flex-column-reverse flex-md-row">
            <div className="col-md-3">
              <div className="text-center text-sm-start">
                <li>
                  <a
                    className=" ff_poiret fw_regular fs_xxl text_light_white opacity_07 nav_stroke_text"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className=" my-2">
                  <a
                    className=" ff_poiret fw_regular fs_xxl text_light_white opacity_07 nav_stroke_text "
                    href="#"
                  >
                    Kundenrezensionen
                  </a>
                </li>
                <li>
                  <a
                    className=" ff_poiret fw_regular fs_xxl text_light_white opacity_07 nav_stroke_text"
                    href="#"
                  >
                    We´re hiring!
                  </a>
                </li>
              </div>
            </div>
            <div className="col-md-6">
              <div className="text-center">
                <a href="#">
                  <img src={logo} alt="logo" />
                </a>
                <p className=" ff_montserrat fw_regular fs_xxl text_light_white opacity_08 mt-3">
                  Der Sparringspartner für die Skalierung <br /> deines
                  Unternehmens.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <section className="bg_dark_0e border_color">
        <div className="container">
          <p className=" text-center ff_montserrat fw_regular fs_xxl text_light_white opacity_08 py-4 mb-0">
            Impressum | Datenschutz | AGBS
          </p>
        </div>
      </section>
    </>
  );
}

export default Footer;
