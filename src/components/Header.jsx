import React, { useState } from "react";
import s from "./Header.module.css";
import logo from "../images/logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  // Состояние для управления видимостью меню
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Функция для переключения состояния меню
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={s.header}>
      <img src={logo} alt="Logo" />
      
      <button className={s.burgerButton} onClick={toggleMenu}>
        <span className={s.burgerLine}></span>
        <span className={s.burgerLine}></span>
        <span className={s.burgerLine}></span>
      </button>

      <div className={`${s.nav} ${isMenuOpen ? s.navOpen : ""}`}>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? s.activeLink : undefined
              }
              style={{ textDecoration: "none", fontSize: "18px", fontWeight: "400" }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/features"
              className={({ isActive }) =>
                isActive ? s.activeLink : undefined
              }
              style={{ textDecoration: "none", fontSize: "18px", fontWeight: "400" }}
            >
              Features
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/works"
              className={({ isActive }) =>
                isActive ? s.activeLink : undefined
              }
              style={{ textDecoration: "none", fontSize: "18px", fontWeight: "400" }}
            >
              Works
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/team"
              className={({ isActive }) =>
                isActive ? s.activeLink : undefined
              }
              style={{ textDecoration: "none", fontSize: "18px", fontWeight: "400" }}
            >
              Team
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? s.activeLink : undefined
              }
              style={{ textDecoration: "none", fontSize: "18px", fontWeight: "400" }}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
