import React from "react";
import { useTranslation } from "react-i18next";

const Roadmap = () => {
  const { t } = useTranslation();

  const features = t("appAdvantages", { returnObjects: true });
  return (
    <section
      className="tm-roadmap-wrap tm-gray-bg tm-bg"
      id="roadmap"
      style={{ backgroundImage: "url(assets/img/greeen-roadmap3.png)" }}
    >
      <div className="empty-space col-md-b90 col-xs-b55"></div>
      <div className="container">
        <div className="tm-section-heading tm-style2 text-center col-xs-t-1">
          <h2
            className="tm-f34 col-xs-b2 tm-md-f28 tm-md-lh34 wow fadeIn"
            data-wow-duration="0.8s"
            data-wow-delay="0.25s"
          >
            مميزات تطبيق "Smart Trade"{" "}
          </h2>
          <div className="empty-space col-md-b25 col-xs-b10"></div>
          <div
            className="tm-f20 tm-md-f15 col-xs-t-4 col-xs-b1 wow fadeIn"
            data-wow-duration="0.8s"
            data-wow-delay="0.3s"
          ></div>
        </div>
      </div>
      <div className="empty-space col-md-b85 col-xs-b45"></div>
      <div className="container">
        <div className="tm-green-roadmap">
          <div
            className="green-slider-nav-wrap wow fadeIn"
            data-wow-duration="0.8s"
            data-wow-delay="0.5s"
          >
            {/* <div className="slider green-slider-nav">
              <div>
                <div className="tm-green-year">
                  <span>2018</span>
                </div>
              </div>
              <div>
                <div className="tm-green-year">
                  <span>2017</span>
                </div>
              </div>
              <div>
                <div className="tm-green-year">
                  <span>2016</span>
                </div>
              </div>
            </div> */}
          </div>
          <div className="slider green-slider-for">
            <div>
              <div
                className="tm-green-roadmap-text"
                style={{ direction: "rtl" }}
              >
                <div className="tm-green-roadmap-text-in">
                  {Object.entries(features).map(([key, feature], index) => (
                    <div
                      key={key}
                      className="tm-gr-single-text wow fadeInUp"
                      data-wow-duration="0.8s"
                      data-wow-delay={`${0.3 + index * 0.15}s`}
                    >
                      <div className="tm-gr-yr">
                        {feature.title}
                        <span className="tm-gr-ball"></span>
                      </div>
                      <div className="tm-gr-text">{feature.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div className="tm-green-roadmap-text">
                <div className="tm-green-roadmap-text-in">
                  <div
                    className="tm-gr-single-text wow fadeIn"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.45s"
                  >
                    <div className="tm-gr-yr">
                      March<span className="tm-gr-ball"></span>
                    </div>
                    <div className="tm-gr-text">Launch of the project</div>
                  </div>
                  <div
                    className="tm-gr-single-text wow fadeIn"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.5s"
                  >
                    <div className="tm-gr-yr">
                      June<span className="tm-gr-ball"></span>
                    </div>
                    <div className="tm-gr-text">
                      Blockchain reputational module implementation
                    </div>
                  </div>
                  <div
                    className="tm-gr-single-text wow fadeIn"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.55s"
                  >
                    <div className="tm-gr-yr">
                      September<span className="tm-gr-ball"></span>
                    </div>
                    <div className="tm-gr-text">
                      Inventory Management Systems
                    </div>
                  </div>
                  <div
                    className="tm-gr-single-text wow fadeIn"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.6s"
                  >
                    <div className="tm-gr-yr">
                      October<span className="tm-gr-ball"></span>
                    </div>
                    <div className="tm-gr-text">
                      Major partnerships in the entertainment industry
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="tm-green-roadmap-text">
                <div className="tm-green-roadmap-text-in">
                  <div
                    className="tm-gr-single-text wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.45s"
                  >
                    <div className="tm-gr-yr">
                      June<span className="tm-gr-ball"></span>
                    </div>
                    <div className="tm-gr-text">Launch of the project</div>
                  </div>
                  <div
                    className="tm-gr-single-text wow fadeIn"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.5s"
                  >
                    <div className="tm-gr-yr">
                      September<span className="tm-gr-ball"></span>
                    </div>
                    <div className="tm-gr-text">
                      Blockchain reputational module implementation
                    </div>
                  </div>
                  <div
                    className="tm-gr-single-text wow fadeIn"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.55s"
                  >
                    <div className="tm-gr-yr">
                      October<span className="tm-gr-ball"></span>
                    </div>
                    <div className="tm-gr-text">
                      Inventory Management Systems
                    </div>
                  </div>
                  <div
                    className="tm-gr-single-text wow fadeIn"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.6s"
                  >
                    <div className="tm-gr-yr">
                      November<span className="tm-gr-ball"></span>
                    </div>
                    <div className="tm-gr-text">
                      Major partnerships in the entertainment industry
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="empty-space col-md-b95 col-xs-b60"></div>
    </section>
  );
};

export default Roadmap;
