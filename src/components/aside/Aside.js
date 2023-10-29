import "./aside.scss";
import logo from "./../../img/logo.svg";
import instagram from "./../../img/social/instagram.svg";
import twitter from "./../../img/social/twitter.svg";
import facebook from "./../../img/social/facebook.svg";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Aside = ({ onInputChange }) => {
  const [text, setText] = useState("");
  const location = useLocation();

  const onValueChange = e => {
    const value = e.target.value;
    setText(value);
    onInputChange(value);
  };

  useEffect(() => {
    const navItems = document.querySelectorAll(".aside__menu li");
    navItems.forEach(item => {
      const link = item.querySelector("a");
      if (link.getAttribute("href") === location.pathname) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }, [location.pathname]);

  return (
    <aside className="aside">
      <div className="aside__wrapper">
        <div className="aside__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="aside__input">
          <input type="text" value={text} onChange={onValueChange} />
        </div>
        <nav className="aside__menu">
          <ul>
            <li>
              <Link to="/">Gallery</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
          </ul>
        </nav>
        <div className="aside__social">
          <div className="aside__social-img">
            <img src={twitter} alt="twitter" />
          </div>
          <div className="aside__social-img">
            <img src={instagram} alt="insta" />
          </div>
          <div className="aside__social-img">
            <img src={facebook} alt="facebook" />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
