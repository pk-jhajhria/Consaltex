import React from "react";
import { Accordion } from "react-bootstrap";
import men_img from "../assets/img/png/2men.png";
import red_circle_right from "../assets/img/png/red circle right.png";
import faq_layer_left from "../assets/img/png/left header layer.png";
import green_circle from "../assets/img/png/right green circle.png";

function Faq() {
  return (
    <>
      <section className=" py-5 bg_full_dark position-relative overflow-hidden">
        <img
          className=" position-absolute green_square_box_position z_index1 red_circle_right_position animayion_scale"
          src={red_circle_right}
          alt="red_circle_right"
        />
        <img
          className=" position-absolute faq_layer_position z_index1"
          src={faq_layer_left}
          alt="faq_layer_left"
        />
        <img
          className=" position-absolute green_circle_position_right d-none d-sm-flex gray_circle"
          src={green_circle}
          alt="green_circle"
        />
        <div className="container z_index3">
          <div className="d-flex justify-content-sm-center ms-sm-5 ps-1 z_index3">
            <p
              className=" ff_montserrat fw_regular fs_xxl text_light_white wir_para_after_line ms-sm-0 mb-0 d-inline-block position-relative mb-0"
              data-aos="fade-down"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-delay="200"
            >
              Du hast noch Fragen?
            </p>
          </div>
          <h2
            className=" ff_poiret fw_regular fs_6xl text_light_white text-sm-center mt-1 z_index3"
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-delay="200"
          >
            Häufig gestellte Fragen
          </h2>
          <div className="row justify-content-center mt-sm-5 pt-3 z_index3">
            <div className="col-md-8">
              <Accordion defaultActiveKey={["0"]}>
                <Accordion.Item
                  eventKey="0"
                  className=" mb-4 pb-0 "
                  data-aos="zoom-in"
                  data-aos-duration="3000"
                  data-aos-offset="200"
                  data-aos-delay="200"
                >
                  <Accordion.Header>
                    <p className=" ff_montserrat fw_semibold fs_2xl text_light_white mb-0 ps-0">
                      Was unterscheidet euch von anderen Agenturen?
                    </p>
                  </Accordion.Header>
                  <Accordion.Body className=" pt-0 ps-0">
                    <p className="mb-0 ff_montserrat fw_regular fs_xxl text_light_white opacity_08 pt-0 ps-0">
                      Consaltex ist keine Agentur, sondern eine ganzheitliche
                      Unternehmensberatung. Wir helfen dir nicht nur
                      imMarketing, im Vertrieb oder in der Kundenbetreuung,
                      sondern betrachten die Geschäftsprozesse in ihrem
                      Zusammenhang und optimieren sie von Grund auf.
                      Dasbedeutet: Wir verstehen uns als Partner, nicht
                      alsDienstleister und laufen nicht nur die extra Meile,
                      sondern wenn nötig einen ganzen Marathon, damit dein
                      Unternehmen zu einer echten Umsatzmaschine wird!
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                  eventKey="1"
                  className=" mb-4 "
                  data-aos="zoom-in"
                  data-aos-duration="3000"
                  data-aos-offset="200"
                  data-aos-delay="300"
                >
                  <Accordion.Header>
                    <p className=" mb-0 ff_montserrat fw_semibold fs_2xl text_light_white pt-0 ps-0">
                      Brauche ich eure Hilfe?
                    </p>
                  </Accordion.Header>
                  <Accordion.Body className=" pt-0 ps-0">
                    <p className=" mb-0 ff_montserrat fw_regular fs_xxl text_light_white opacity_08 pt-0">
                      Consaltex ist keine Agentur, sondern eine ganzheitliche
                      Unternehmensberatung. Wir helfen dir nicht nur im
                      Marketing, im Vertrieb oder in der Kundenbetreuung,
                      sondern betrachten die Geschäftsprozesse in ihrem
                      Zusammenhang und optimieren sie von Grund auf. Das
                      bedeutet: Wir verstehen uns als Partner, nicht als
                      Dienstleister und laufen nicht nur die extra Meile,
                      sondern wenn nötig einen ganzen Marathon, damit dein
                      Unternehmen zu einer echten Umsatzmaschine wird!
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                  eventKey="2"
                  className=" mb-4 "
                  data-aos="zoom-in"
                  data-aos-duration="3000"
                  data-aos-offset="200"
                  data-aos-delay="400"
                >
                  <Accordion.Header>
                    <p className="  mb-0 ff_montserrat fw_semibold fs_2xl text_light_white pt-0">
                      Wie könnt ihr mir helfen?
                    </p>
                  </Accordion.Header>
                  <Accordion.Body className=" pt-0 ps-0">
                    <p className="mb-0 ff_montserrat fw_regular fs_xxl text_light_white opacity_08 pt-0">
                      Consaltex ist keine Agentur, sondern eine ganzheitliche
                      Unternehmensberatung. Wir helfen dir nicht nur im
                      Marketing, im Vertrieb oder in der Kundenbetreuung,
                      sondern betrachten die Geschäftsprozesse in ihrem
                      Zusammenhang und optimieren sie von Grund auf. Das
                      bedeutet: Wir verstehen uns als Partner, nicht als
                      Dienstleister und laufen nicht nur die extra Meile,
                      sondern wenn nötig einen ganzen Marathon, damit dein
                      Unternehmen zu einer echten Umsatzmaschine wird!
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                  eventKey="3"
                  className=" mb-4 "
                  data-aos="zoom-in"
                  data-aos-duration="3000"
                  data-aos-offset="200"
                  data-aos-delay="500"
                >
                  <Accordion.Header>
                    <p className="  mb-0 ff_montserrat fw_semibold fs_2xl text_light_white pt-0">
                      Kann man im Internet noch neue Kunden gewinnen?
                    </p>
                  </Accordion.Header>
                  <Accordion.Body className=" pt-0 ps-0">
                    <p className="mb-0 ff_montserrat fw_regular fs_xxl text_light_white opacity_08 pt-0">
                      Consaltex ist keine Agentur, sondern eine ganzheitliche
                      Unternehmensberatung. Wir helfen dir nicht nur im
                      Marketing, im Vertrieb oder in der Kundenbetreuung,
                      sondern betrachten die Geschäftsprozesse in ihrem
                      Zusammenhang und optimieren sie von Grund auf. Das
                      bedeutet: Wir verstehen uns als Partner, nicht als
                      Dienstleister und laufen nicht nur die extra Meile,
                      sondern wenn nötig einen ganzen Marathon, damit dein
                      Unternehmen zu einer echten Umsatzmaschine wird!
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                  eventKey="4"
                  className=" mb-4 "
                  data-aos="zoom-in"
                  data-aos-duration="3000"
                  data-aos-offset="200"
                  data-aos-delay="600"
                >
                  <Accordion.Header className=" ps-0">
                    <p className="  mb-0 ff_montserrat fw_semibold fs_2xl text_light_white pt-0 ps-0">
                      Gibt es eine eins-zu-eins Betreuung?
                    </p>
                  </Accordion.Header>
                  <Accordion.Body className=" pt-0 ps-0">
                    <p className=" mb-0 ff_montserrat fw_regular fs_xxl text_light_white opacity_08 pt-0 ps-0">
                      Consaltex ist keine Agentur, sondern eine ganzheitliche
                      Unternehmensberatung. Wir helfen dir nicht nur im
                      Marketing, im Vertrieb oder in der Kundenbetreuung,
                      sondern betrachten die Geschäftsprozesse in ihrem
                      Zusammenhang und optimieren sie von Grund auf. Das
                      bedeutet: Wir verstehen uns als Partner, nicht als
                      Dienstleister und laufen nicht nur die extra Meile,
                      sondern wenn nötig einen ganzen Marathon, damit dein
                      Unternehmen zu einer echten Umsatzmaschine wird!
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
          <div className="row justify-content-center mt-5 z_index3">
            <div className="col-md-6 z_index3">
              <img
                className=" w-100"
                data-aos="zoom-in"
                data-aos-duration="3000"
                data-aos-offset="200"
                data-aos-delay="200"
                src={men_img}
                alt="men_img"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
