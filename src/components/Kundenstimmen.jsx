import React from "react";
import { vdoSection } from "../Card";
import left_layer from "../assets/img/png/left header layer.png";
import gray_square_box from "../assets/img/png/bg box gray.png";

function Kundenstimmen() {
  return (
    <>
      <section className=" py-sm-5 bg_full_dark position-relative z_index3">
        <img
          className=" position-absolute z_index1 left_layer_second_page z_index1"
          src={left_layer}
          alt="left_layer"
        />
        <img
          className=" position-absolute gray_square_box_position"
          src={gray_square_box}
          alt="gray_square_box"
        />
        <div className="container z_index3">
          <h2 className=" ff_poiret fw_regular fs_6xl text_light_white">
            Kundenstimmen
          </h2>
          <div className="row mb-sm-5 pb-5 mt-sm-5 mt-4">
            {vdoSection.map((value) => {
              return (
                <div className="col-md-4 col-sm-6 px-2">
                  <div className=" bg_dark_green_16">
                    <div className="position-relative">
                      <img className=" w-100" src={value.img} alt="card_img" />
                      <a href="#">
                        {" "}
                        <img
                          className=" position-absolute play_btn_position"
                          src={value.playBtn}
                          alt="play_btn"
                        />{" "}
                      </a>
                    </div>
                    <p className=" ff_montserrat fw_regular fs_xxl text_light_white opacity_08 ps-3 pe-2 py-4">
                      {value.lorem}
                    </p>
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

export default Kundenstimmen;
