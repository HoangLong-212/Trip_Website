import React from "react";
import classNames from "classnames/bind";
import styles from "./ListOfBtnImg.module.scss";
import { GiKnifeFork } from "react-icons/gi";
import { MdHotel,MdPlace } from "react-icons/md";


const cx = classNames.bind(styles);

function ListOfBtnImg() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("box-item")}>
        <img
          src={require("@/assets/img/Btn-Img/Image-Restaurant.png")}
          alt=""
        />
        <div className={cx("content")}>
          <GiKnifeFork className={cx("icon")} />
          <p>Restaurant</p>
        </div>
      </div>

      <div className={cx("box-item")}>
        <img
          src={require("@/assets/img/Btn-Img/Image-Hotel.png")}
          alt=""
        />
        <div className={cx("content")}>
          <MdHotel className={cx("icon")} />
          <p>Hotel</p>
        </div>
      </div>
      
      <div className={cx("box-item")}>
        <img
          src={require("@/assets/img/Btn-Img/Image-Place.png")}
          alt=""
        />
        <div className={cx("content")}>
          <MdPlace className={cx("icon")} />
          <p>Place</p>
        </div>
      </div>
    </div>
  );
}

export default ListOfBtnImg;
