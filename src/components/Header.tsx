import { useTranslation } from "react-i18next";
// import { mobileLogo } from "../imports.js";
import { useState } from "react";

const Header = () => {
  const [show, setShow] = useState(false);

  const { t, i18n } = useTranslation();

  function changeLang(e: any, lang: string) {
    console.log("🚀 ~ changeLang ~ lang:", lang);
    i18n.changeLanguage(lang);
    setShow(false);
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    e.stopPropagation();
  }

  return (
    <header className="tm-site-header">
      {/* <h1>{t("Welcome to React")}</h1> */}
      <div className="tm-header-menu">
        <div className="container tm-header-menu-container">
          <div className="tm-site-branding">
            {/* For Image Logo */}
            <a href="index.html" className="tm-logo-link">
              {/* <img src={logo} alt="" className="tm-logo" /> */}
              <h2>Smart Trade</h2>
              <img
                src="assets/img/green-logo-mobile.png"
                alt=""
                className="tm-mobile-logo"
              />
            </a>
            {/* For Site Title */}
            {/* <span className="tm-site-title">
                <a href="index.html">Ocher</a>
              </span> */}
          </div>
          <nav className="tm-primary-nav tm-section-active">
            <ul className="tm-primary-nav-list">
              <li className="menu-item">
                <a href="#about" className="nav-link">
                  {t("About")}
                </a>
              </li>
              <li className="menu-item">
                <a href="#howitworks" className="nav-link">
                  {t("How It Works")}
                </a>
              </li>
              {/* <li className="menu-item">
                <a href="#tokensale" className="nav-link">
                  {t("Token Sale")}
                </a>
              </li> */}
              {/* <li className="menu-item">
                <a href="#bounty" className="nav-link">
                  {t("Bounty")}
                </a>
              </li> */}
              <li className="menu-item">
                <a href="#roadmap" className="nav-link">
                  {t("Roadmap")}
                </a>
              </li>
              {/* <li className="menu-item">
                <a href="#team" className="nav-link">
                  {t("Team")}
                </a>
              </li> */}
              {/* <li className="menu-item">
                <a href="#faq" className="nav-link">
                  {t("Faq")}
                </a>
              </li> */}
            </ul>
            <div className={`tm-language  ${show ? "tm-active" : ""}`}>
              <div
                className="tm-active-language"
                onClick={() => setShow(!show)}
              >
                {i18n.language.toUpperCase()}
              </div>
              <div className="tm-lenguage-dropdown">
                <a onClick={(e) => changeLang(e, "ar")}>AR</a>
                <a onClick={(e) => changeLang(e, "en")}>EN</a>
                {/* <a onClick={(e)=>changeLang(e,"ar")}>HI</a> */}
              </div>
            </div>
            {/* .tm-language */}
            {/* <div className="tm-menu-meta">
              <button
                className="tm-btn tm-style1 tm-with-border"
                data-toggle="modal"
                data-target="#tm-login"
              >
                LOGIN
              </button>
              <button
                className="tm-btn tm-style1 tm-with-border"
                data-toggle="modal"
                data-target="#tm-signup"
              >
                SIGNUPto
              </button>
            </div> */}
          </nav>
        </div>
        {/* .tm-header-menu-container */}
      </div>
      {/* .tm-header-menu */}
    </header>
  );
};

export default Header;
