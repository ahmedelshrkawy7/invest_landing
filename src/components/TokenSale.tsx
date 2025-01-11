import React from 'react';

const TokenSale = () => {
  return (
    <section className="tm-token-sale tm-dark-green-bg" id="tokensale">
      <div
        className="tm-bg"
        style={{ backgroundImage: 'url(assets/img/greeen-token-sale-bg.jpg)' }}
      >
        <div className="empty-space col-md-b85 col-xs-b45"></div>
        <div className="container">
          <div className="tm-section-heading tm-style1 tm-color2">
            <div className="tm-section-heading-left">
              <h2 className="tm-m0 tm-green-c tm-md-f28 tm-md-lh34 wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.25s">
                What <br /> is a token sale?
              </h2>
            </div>
            <div className="tm-section-heading-right">
              <div className="tm-f20 tm-md-f15 tm-lh30 tm-white-c tm-md-lh24 wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.35s">
                A token sale, sometimes referred to as an ICO, is form of crowd funding for digital currency-related projects. In token sales, purchasers buy units of a new currency in exchange for legal tender or other digital currencies, such as Bitcoin or Ethereum.
              </div>
            </div>
          </div>
          <div className="empty-space col-md-b75 col-xs-b50"></div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h2 className="text-center col-xs-b2 col-xs-t-2 tm-green-c tm-md-f28 tm-md-lh34 wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.45s">
                Token Distribution
              </h2>
              <div className="empty-space col-md-b55 col-xs-b35"></div>
              <div className="tm-token-distribution col-xs-b1">
                <div className="tm-token-distribution-left tm-green-token-color1">
                  <ul className="tm-token-distribution-list tm-f20 tm-md-f15 tm-white-c list-one">
                    <li className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.55s">
                      <span className="tm-blank tm-token-color1"></span>ICO supporters
                    </li>
                    <li className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.55s">
                      <span className="tm-blank tm-token-color2"></span>Team members
                    </li>
                    <li className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.55s">
                      <span className="tm-blank tm-token-color3"></span>Marketing
                    </li>
                    <li className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.55s">
                      <span className="tm-blank tm-token-color4"></span>Angel investors
                    </li>
                    <li className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.55s">
                      <span className="tm-blank tm-token-color5"></span>Bounty Fund
                    </li>
                  </ul>
                </div>
                <div className="tm-token-distribution-right tm-sp-token-distribution wow fadeIn" data-wow-duration="0.8s" data-wow-delay="0.65s">
                  <img
                    src="assets/img/green-token-percentage01.png"
                    alt="Token Distribution"
                    className="tm-token-distribution-img"
                  />
                </div>
              </div>
              <div className="empty-space col-lg-b90 col-xs-b55"></div>
            </div>

            <div className="col-xl-12">
              <h2 className="text-center col-xs-b2 col-xs-t-2 tm-green-c tm-md-f28 tm-md-lh34 wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.45s">
                Token Fund Usage
              </h2>
              <div className="empty-space col-md-b55 col-xs-b35"></div>
              <div className="tm-token-distribution col-xs-b1">
                <div className="tm-token-distribution-right wow fadeIn" data-wow-duration="0.8s" data-wow-delay="0.65s">
                  <img
                    src="assets/img/green-token-percentage01.png"
                    alt="Token Fund Usage"
                    className="tm-token-distribution-img"
                  />
                </div>
                <div className="tm-token-distribution-left tm-green-token-color2">
                  <ul className="tm-token-distribution-list tm-f20 tm-md-f15 tm-white-c list-two">
                    <li className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.55s">
                      <span className="tm-blank tm-token-color1"></span>Platform development
                    </li>
                    <li className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.55s">
                      <span className="tm-blank tm-token-color2"></span>Sales & marketing
                    </li>
                    <li className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.55s">
                      <span className="tm-blank tm-token-color3"></span>Operational costs
                    </li>
                    <li className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.55s">
                      <span className="tm-blank tm-token-color4"></span>Legal expenses
                    </li>
                    <li className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.55s">
                      <span className="tm-blank tm-token-color5"></span>Strategy development
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="empty-space col-md-b95 col-xs-b60"></div>
      </div>

      <div className="tm-dark-green-bg tm-bounty" id="bounty">
        <div className="empty-space col-md-b90 col-xs-b55"></div>
        <div className="container">
          <h2 className="text-center col-xs-b2 tm-green-c col-xs-t-1 tm-md-f28 tm-md-lh34">
            Bounty Fund Distribution (<span className="tm-white-c">5%</span> of the total)
          </h2>
          <div className="empty-space col-md-b55 col-xs-b30"></div>
          <div className="tm-token-distribution">
            <div className="tm-token-distribution-left tm-green-token-color3">
              <ul className="tm-token-distribution-list tm-f20 tm-md-f15 tm-white-c">
                <li className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.55s">
                  <span className="tm-blank tm-token-color1"></span>
                  <span className="tm-percentage tm-light-green-c">25%</span> Facebook bounty campaign
                </li>
                <li className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.55s">
                  <span className="tm-blank tm-token-color2"></span>
                  <span className="tm-percentage tm-light-green-c">25%</span> Telegram bounty campaign
                </li>
                <li className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.55s">
                  <span className="tm-blank tm-token-color3"></span>
                  <span className="tm-percentage tm-light-green-c">20%</span> Twitter bounty campaign
                </li>
                <li className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.55s">
                  <span className="tm-blank tm-token-color4"></span>
                  <span className="tm-percentage tm-light-green-c">15%</span> Membership bounty campaign
                </li>
                <li className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.55s">
                  <span className="tm-blank tm-token-color5"></span>
                  <span className="tm-percentage tm-light-green-c">10%</span> Authors bounty campaign
                </li>
                <li className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.55s">
                  <span className="tm-blank tm-token-color5"></span>
                  <span className="tm-percentage tm-light-green-c">05%</span> Reserve
                </li>
              </ul>
              <div className="empty-space col-lg-b0 col-xs-b40"></div>
            </div>
            <div className="tm-token-distribution-right tm-sp-token-distribution col-xs-b1 wow fadeIn" data-wow-duration="0.8s" data-wow-delay="0.65s">
              <img
                src="assets/img/green-token-percentage03.png"
                alt="Bounty Fund Distribution"
                className="tm-token-distribution-img"
              />
            </div>
          </div>
        </div>
        <div className="empty-space col-md-b95 col-xs-b60"></div>
      </div>
    </section>
  );
};

export default TokenSale;
