import React from "react";
import nav_arrow from "../assets/img/svg/nav_arrow.svg";
import white_statue from "../assets/img/png/white statue.png";

function Liefern() {
  return (
    <>
      <section className=" py-5 bg_full_dark mt_neg_2 position-relative">
        <div className="container">
          <div className="row justify-content-between align-items-center z_index3">
            <div className="col-md-6">
              <h2
                className=" ff_poiret fw_regular fs_6xl text_light_white"
                data-aos="fade-down"
                data-aos-duration="3000"
                data-aos-offset="200"
                data-aos-delay="100"
              >
                Wir liefern Ergebnisse
              </h2>
              <p
                className=" ff_montserrat fw_regular fs_xxl text_light_white opacity_08 mt-3 mb-0"
                data-aos="fade-right"
                data-aos-duration="3000"
                data-aos-offset="200"
                data-aos-delay="200"
              >
                Wir sind vielleicht nicht der größte Player in der Branche, aber
                auf dem Weg dorthin. Aber vor allem sind wir hungrig darauf,
                gemeinsam mit Unternehmern wie dir Erfolgsgeschichten zu
                schreiben.
              </p>
              <p
                className=" ff_montserrat fw_regular fs_xxl text_light_white opacity_08 mt-2 mb-0"
                data-aos="fade-left"
                data-aos-duration="3000"
                data-aos-offset="200"
                data-aos-delay="200"
              >
                Wenn andere aufgeben, werden wir erst richtig warm. Wir sind der
                Ansprechpartner für umkämpfte Märkte, komplizierte Kunden,
                erklärungsbedürftige Services und scheinbar aussichtslose Fälle.
                Wir sind das Spezialeinsatzkommando für Agenturen.
              </p>
              <p
                className=" ff_montserrat fw_regular fs_xxl text_light_white opacity_08 mt-2"
                data-aos="fade-right"
                data-aos-duration="3000"
                data-aos-offset="200"
                data-aos-delay="200"
              >
                Unser Herz schlägt für den Underdog: David gegen Goliath -
                Marketing, Vertrieb, interne Prozesse: Unser Team gibt für dich
                110 Prozent - weil dein Erfolg unsere Motivation ist.
              </p>
              <a
                className=" nav_btn  px-3 py-2 mt-sm-4 d-inline-block"
                href="#"
                data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-offset="200"
                data-aos-delay="200"
              >
                <a
                  className="text_white_hover ff_poiret fw_regular fs_xxl text_light_white"
                  href="#"
                >
                  Jetzt Erstgespräch vereinbaren
                </a>
                <img className=" ms-3" src={nav_arrow} alt="nav_arrow" />
              </a>
            </div>
            <div className="col-md-5">
              <img
                data-aos="fade-left"
                data-aos-duration="3000"
                data-aos-offset="200"
                data-aos-delay="200"
                className=" w-100 mt-4 mt-md-0 z_index3"
                src={white_statue}
                alt="white_statue"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Liefern;
