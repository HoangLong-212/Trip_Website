import React from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import NavBar from "./NavBar";
import Search from "@/components/General/Search";

const cx = classNames.bind(styles);

function Header() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <Link to="/">
            <img src={require("@/assets/img/Logo.png")} alt="" />
            Levart
          </Link>
        </div>
        <div className={cx("search-navbar")}>
          <Search />
          <div className={cx("action")}>
            <NavBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
