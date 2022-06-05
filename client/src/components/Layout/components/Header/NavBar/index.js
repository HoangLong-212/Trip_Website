import React from "react";
import styles from "./NavBar.module.scss";
import classNames from "classnames/bind";
import Button from "@/components/General/Button/Button";
import { Path } from "react-router-dom";

const cx = classNames.bind(styles);

function NavBar() {
  return (
    <div className={cx("wrapper")}>
      <Button text >
        Trips</Button>
      <Button text to={"/SignIn"}>Login</Button>
      <Button primary medium>
        Register
      </Button>
    </div>
  );
}

export default NavBar;
