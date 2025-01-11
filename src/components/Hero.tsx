import React from "react";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section
      className="tm-hero-section tm-style1 tm-bg"
      id="home"
      style={{ backgroundImage: "url(assets/img/hero-bg-v3.jpg)" }}
    >
      <div className="container">
        <div className="row">
          {/* Left Column */}
          <div className="col-lg-6">
            <div className="tm-hero-text">
              <div className="tm-overflow-hidden">
                <h1
                  className="tm-hero-title tm-white-c tm-f42 tm-lg-f38 tm-fw-medium tm-m0 tm-lh60 col-xs-t-14 tm-md-f30 tm-md-lh40 wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.7s"
                >
                  {t("intro")}
                </h1>
              </div>
              <div className="empty-space col-xs-b10"></div>
              <div className="tm-overflow-hidden">
                <h2
                  className="tm-hero-sub-title tm-white-c tm-f24 tm-m0 tm-lh36 tm-md-f18 tm-md-lh26 wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.9s"
                >
                  {t("smallBrief")}
                </h2>
              </div>
              <div className="empty-space col-xs-b25"></div>
              {/* <div className="tm-overflow-hidden">
                <div
                  className="tm-btn-group wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="1.15s"
                >
                  <a href="#" className="tm-btn tm-style1">
                    Buy Token
                  </a>
                  <a href="#" className="tm-btn tm-style1 tm-with-border">
                    Learn More
                  </a>
                </div>
              </div> */}
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-6">
            <div className="tm-about-img-wrap">
              <div className="tm-about-img">
                <img src="assets/img/about-img3.png" alt="" />
                <img
                  src="assets/img/purple-ethereum1.png"
                  alt=""
                  className="tm-ethereum"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper Component for Countdown Elements
const CountdownElement = ({ id, label }: { id: string; label: string }) => (
  <div className="countdown-element">
    <div
      id={id}
      className="tm-f50 tm-md-f50 tm-green-c tm-fw-medium tm-lh62 tm-oswald-fonts"
    ></div>
    <span className="tm-white-c">{label}</span>
  </div>
);

// Helper Component for Separator
const Separator = () => <span className="tm-sep tm-f60 tm-green-c">:</span>;

export default HeroSection;
