import React, { useEffect, useState, useContext } from "react";
import { useSelector } from "react-redux";
import styles from "./NavBar.module.scss";
import classNames from "classnames/bind";
import Button from "@/components/General/Button/Button";
<<<<<<< HEAD
import { Path } from "react-router-dom";
=======
import { AuthContext } from "@/contexts/AuthContext";
import { profilesState$ } from "@/redux/selectors";
import { Form, Skeleton, Spin } from "antd";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
>>>>>>> 789706a49daef8418f2756b81e8f93661e7b2c10

const cx = classNames.bind(styles);

function NavBar() {
  const {
    logoutUser,
    authState: { authLoading, isAuthenticated, user, profile },
  } = useContext(AuthContext);

  let body;
  const logout = () => logoutUser();

  if (authLoading) {
    body = (
      <Skeleton
        style={{ marginLeft: "20px" }}
        avatar
        active
        paragraph={{
          rows: 0,
        }}
      />
    );
  } else if (isAuthenticated) {
    body = (
      <div className={cx("Auth")} onClick={logout}>
        <img
          className={cx("image")}
          src={profile && profile.avatar}
          alt="asd"
        />
        <p className={cx("name")}>
          {profile !== null ? profile.lastName + " " + profile.firstName : ""}
        </p>
      </div>
    );
  } else {
    body = (
      <div style={{ marginLeft: "20px" }}>
        <Button text to={"/SignIn"}>
          Login
        </Button>

        <Button medium to={"/SignUp"} primary>
          Register
        </Button>
      </div>
    );
  }

  return (
    <div className={cx("wrapper")}>
<<<<<<< HEAD
      <Button text >
        Trips</Button>
      <Button text to={"/SignIn"}>Login</Button>
      <Button primary medium>
        Register
=======
      <Button text>
        <span className={cx("icon-trips")}>
          <AiOutlineHeart className={cx("btn-icon")} />
          <p>Trips</p>
        </span>
>>>>>>> 789706a49daef8418f2756b81e8f93661e7b2c10
      </Button>
      {body}
    </div>
  );
}

export default NavBar;
