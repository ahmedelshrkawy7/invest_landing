import { useTranslation } from "react-i18next";

const HowItWorks = () => {
  const { t } = useTranslation();
  return (
    <section
      className="tm-ocher-work tm-bg"
      id="howitworks"
      style={{ backgroundImage: "url(assets/img/greeen-adventages3.jpg)" }}
    >
      <div className="empty-space col-md-b85 col-xs-b50"></div>
      <div className="container">
        <div className="tm-section-heading tm-style1">
          <div className="tm-section-heading-left">
            <h2
              className="tm-m0 tm-md-f28 tm-md-lh34 wow fadeInUp"
              data-wow-duration="0.8s"
              data-wow-delay="0.25s"
            >
              {t("gameChanger")}
            </h2>
          </div>
          <div className="tm-section-heading-right">
            <h2
              className="col-xs-b20 tm-md-f28 tm-md-lh34 wow fadeInUp"
              data-wow-duration="0.8s"
              data-wow-delay="0.35s"
            >
              {t("why")}
            </h2>
            <div
              className="tm-f20 tm-md-f15 tm-lh30 tm-md-lh24 wow fadeInUp"
              data-wow-duration="0.8s"
              data-wow-delay="0.45s"
            >
              {t("choose")}
            </div>
          </div>
        </div>
        <div className="empty-space col-md-b75 col-xs-b50"></div>
        <div className="tm-section-heading tm-style2">
          <h2
            className="text-center col-xs-b2 col-xs-t-2 tm-md-f28 tm-md-lh34 wow fadeInUp"
            data-wow-duration="0.8s"
            data-wow-delay="0.45s"
          >
            انظر للمزايا
          </h2>
        </div>
        <div className="empty-space col-md-b55 col-xs-b35"></div>
      </div>
      <div className="container">
        <div className="row">
          {[
            {
              icon: "flaticon-ethereum",
              text: t("features.blockchainWallet"),
              delay: "0.55s",
            },
            {
              icon: "flaticon-strategy",
              text: t("features.uniqueDepositWithdrawal"),
              delay: "0.65s",
            },
            {
              icon: "flaticon-block",
              text: t("features.fastProfits"),
              delay: "0.75s",
            },
            {
              icon: "flaticon-decentralized",
              text: t("features.easyFlexible"),
              delay: "0.85s",
            },
          ].map((item, index) => (
            <div className="col-lg-3 col-sm-6" key={index}>
              <div
                className="tm-single-work wow fadeIn"
                data-wow-duration="0.8s"
                data-wow-delay={item.delay}
              >
                <div className="tm-single-work-icon">
                  <i className={item.icon}></i>
                </div>
                <div className="tm-single-work-text tm-f20 tm-md-f18 tm-md-lh28 tm-lh30">
                  {item.text}
                </div>
              </div>
              <div className="empty-space col-md-b30 col-xs-b30"></div>
            </div>
          ))}
        </div>
      </div>
      <div className="empty-space col-md-b60 col-xs-b30"></div>
      {/* <div className="tm-section-heading tm-style2">
        <h2
          className="text-center col-xs-b2 col-xs-t-1 tm-md-f28 tm-md-lh34 wow fadeInUp"
          data-wow-duration="0.8s"
          data-wow-delay="0.95s"
        >
          Comparison with other solutions
        </h2>
      </div> */}
      <div className="empty-space col-md-b55 col-xs-b35"></div>
      {/* <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="tm-comparison-table text-center wow fadeIn"
              data-wow-duration="0.8s"
              data-wow-delay="1s"
            >
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Traditional</th>
                      <th>BlockBit</th>
                      <th>ICOBlock</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        label: "Decentralized Database",
                        values: [false, false, false],
                      },
                      {
                        label: "Unique Numeric ID",
                        values: [false, false, false],
                      },
                      {
                        label: "Primary Target Market",
                        values: ["UK", "USA", "Australia"],
                      },
                      {
                        label: "Target Market Size",
                        values: [
                          "Country Specific",
                          "123 Million",
                          "1.5 Billion",
                        ],
                      },
                      {
                        label: "Information Liability",
                        values: ["High", "Medium", "Low"],
                      },
                    ].map((row, index) => (
                      <tr key={index}>
                        <td>{row.label}</td>
                        {row.values.map((value, i) =>
                          typeof value === "boolean" ? (
                            <td key={i}>
                              {value ? (
                                <div className="tm-check"></div>
                              ) : (
                                <div className="tm-blank"></div>
                              )}
                            </td>
                          ) : (
                            <td key={i}>{value}</td>
                          )
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="empty-space col-md-b95 col-xs-b60"></div>
    </section>
  );
};

export default HowItWorks;
