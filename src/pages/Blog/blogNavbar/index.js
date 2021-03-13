import logo from "../../../assets/img/logo.png";
import { Link } from "react-router-dom";
import "./blognavbar.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
const BlogNavbar = () => {
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [subMenuOpen2, setSubMenuOpen2] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    if (menuOpen === false) {
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
    }
  };
  const openSubMenu = () => {
    if (subMenuOpen === false) {
      setSubMenuOpen(true);
    } else {
      setSubMenuOpen(false);
    }
  };
  const openSubMenu2 = () => {
    if (subMenuOpen2 === false) {
      setSubMenuOpen2(true);
    } else {
      setSubMenuOpen2(false);
    }
  };
  return (
    <div className="blogNavbar">
      <nav className="mobileMenu">
        <div className="rightBox">
          <Link to='/'>
            <img alt='logo' src={logo} className="logo" />
          </Link>
        </div>
        <div className="leftBox">
          <span>
            <div onClick={openMenu} id="containerBurgerMenu">
              <div className="lines "></div>
              <div className="lines "></div>
              <div className="lines "></div>
            </div>
          </span>
          <FontAwesomeIcon icon={faSearch} className="searchIcon" />
        </div>
        {menuOpen ? (
          <ul id="myLinks">
            <li>
              <Link to="/blog">اخبار</Link>
            </li>
            <li>
              <Link to="">آموزش</Link>
            </li>
            <li className="subMenuContainer">
              <Link to="#"> خدمات اسنپ</Link>
              <FontAwesomeIcon
                icon={faAngleDown}
                className="arrow"
                onClick={openSubMenu}
              />
              {subMenuOpen ? (
                <ul className="subMenu">
                  <li>
                    <Link>سوپر مارکت</Link>
                  </li>
                  <li>
                    <Link>پیک موتوری</Link>
                  </li>
                  <li>
                    <Link>پزشک و مشاور</Link>
                  </li>
                  <li>
                    <Link>پرداخت قبوض</Link>
                  </li>
                  <li>
                    <Link>بورس</Link>
                  </li>
                </ul>
              ) : null}
            </li>
            <li className="subMenuContainer">
              <Link to="#">درباره ما</Link>
              <FontAwesomeIcon
                icon={faAngleDown}
                onClick={openSubMenu2}
                className="arrow"
              />
              {subMenuOpen ? (
                <ul className="subMenu">
                  <li>
                    <Link>تماس با ما</Link>
                  </li>
                  <li>
                    <Link>لوگو و هویت بصری</Link>
                  </li>
                  <li>
                    <Link>مسيولیت اجتماهی</Link>
                  </li>
                  <li>
                    <Link>دانلود اسنپ</Link>
                  </li>
                </ul>
              ) : null}
            </li>
          </ul>
        ) : null}
      </nav>
    </div>
  );
};
export default BlogNavbar;

