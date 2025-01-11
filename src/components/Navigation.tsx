const NavigationBar = () => {
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#video", label: "Video" },
    { href: "#howitworks", label: "How It Works" },
    { href: "#tokensale", label: "Token Sale" },
    { href: "#bounty", label: "Bounty" },
    { href: "#roadmap", label: "Roadmap" },
    { href: "#team", label: "Team" },
    { href: "#featured-company", label: "Featured Company" },
    { href: "#faq", label: "FAQ" },
    { href: "#tm-subscribe", label: "Subscribe" },
    { href: "#footer", label: "Footer" },
  ];

  return (
    <div className="tm-section-active tm-fix-bar">
      <ul
        className="wow fadeInRight"
        data-wow-duration="0.8s"
        data-wow-delay="0.5s"
      >
        {navLinks.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="nav-link">
              {/* {link.label} */}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationBar;
