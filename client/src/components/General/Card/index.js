import { Rate } from "antd";
import classNames from "classnames/bind";
import React from "react";
import { MdPlace } from "react-icons/md";
import IconButton from "../IconButton";

import styles from "./Card.module.scss";

const cx = classNames.bind(styles);

function Card({ classNames }) {
  const classes = cx("wrapper", {
    [classNames]: classNames,
  });

  return (
    <div className={classes}>
      <div className={cx("inner")}>
        <div className={cx("card-title")}>
          <img src={require("@/assets/img/Test.png")} alt="" />
          {/* <IconButton className={cx("card-icon")}/> */}
        </div>
        <div className={cx("card-content")}>
          <p>Ho Chi Minh City</p>
          <div className={cx("start-rate")}>
            <Rate disabled allowHalf defaultValue={2.5} />
            <span className="ant-rate-text">( 2.5 )</span>
          </div>
          <div className={cx("location")}>
            <MdPlace />
            <span>Viet Nam</span>
          </div>
        </div>
      </div>
      <div>
        <IconButton className={cx("card-icon")} />
      </div>
    </div>
  );
}

export default Card;
