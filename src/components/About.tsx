import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <section
      className="tm-about-wrap tm-bg"
      id="about"
      style={{ backgroundImage: "url(assets/img/about-bg3.jpg)" }}
    >
      <div className="empty-space col-md-b90 col-xs-b55"></div>
      <div className="container">
        <div className="row">
          {/* Left Column - About Images */}
          <div className="col-lg-6">
            <div className="tm-about-img-wrap">
              <div className="tm-about-img">
                <img
                  src="assets/img/about-img2.png"
                  alt="About ERC20 Token ICO"
                />
                <img
                  src="assets/img/green-ethereum1.png"
                  alt="Ethereum Icon"
                  className="tm-ethereum"
                />
              </div>
            </div>
          </div>

          {/* Right Column - About Content */}
          <div className="col-lg-6">
            <div className="tm-about">
              <h2
                className="tm-m0 tm-lh40 col-xs-t-1 tm-md-f28 tm-md-lh35 wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.25s"
              >
                {t("whatScalbing")}
              </h2>
              <div className="empty-space col-md-b20 col-xs-b10"></div>
              <div
                className="tm-f20 tm-md-f15 tm-m0 tm-lh30 tm-md-lh20 wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.30s"
              >
                {t("scalpingDefinition")}
              </div>
              <div className="empty-space col-md-b10 col-xs-b15"></div>
              <h2
                className="tm-m0 tm-lh60 tm-md-f28 tm-md-lh34 wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.35s"
              >
                {t("why")}
              </h2>
              <div className="empty-space col-md-b10 col-xs-b10"></div>
              <div className="tm-about-text tm-f20 tm-md-f15 tm-lh32 tm-md-lh20 col-xs-t-1">
                <p
                  className="wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.4s"
                >
                  {t("scalpingPreference")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="empty-space col-md-b85 col-xs-b55"></div>
    </section>
  );
};

export default About;
