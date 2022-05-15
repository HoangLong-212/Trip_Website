import classNames from "classnames/bind";
import React from "react";
import styles from "./CardImage.module.scss";


const cx = classNames.bind(styles);

function CardImage({classNames }) {
  const classes = cx("wrapper", {
    [classNames]: classNames,
 
  });

  return (
    <div className={classes}>
      <div className={cx("inner")}>
        <img src={require("@/assets/img/test2.png")} alt="" />
        <div className={cx("location")}>Buôn Ma Thuột, Việt Nam</div>
      </div>
    </div>
  );
}

export default CardImage;
