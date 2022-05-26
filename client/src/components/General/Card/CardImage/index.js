import classNames from "classnames/bind";
import React from "react";
import styles from "./CardImage.module.scss";

const cx = classNames.bind(styles);

function CardImage({ classNames, value, path }) {
  const classes = cx("wrapper", {
    [classNames]: classNames,
  });

  return (
    <div className={classes}>
      <div className={cx("inner")}>
        <div className={cx("image")}>
          <img src={value.image} alt="" />
        </div>
        <div className={cx("location")}>{value.name + ", " + value.location}</div>
      </div>
    </div>
  );
}

export default CardImage;
