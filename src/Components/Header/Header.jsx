import "./Header.css";
import CTA from "./CTA/Cta";
import ME from "../../assets/me2.png";
import HeaderSocials from "./HeaderSocials/HeaderSocials";
import logo from "../../assets/logo-header.png";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <div className="header__logo">
          <img src={logo} alt="Me" />
        </div>
        {/* <h1>Muhammad Usama</h1> */}
        <h5 className="text-light">
          Senior Front-End Developer | Digital Marketing Executive | No-Code
          Specialist (WordPress/Shopify)
        </h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="Me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
