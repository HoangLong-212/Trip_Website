import React, { useState, useEffect } from "react";
import { Carousel } from "antd";
import classNames from "classnames/bind";
import { useSelector } from "react-redux";
import { provincesState$ } from "@/redux/selectors";

import Card from "../../Card";
import CardImage from "../../Card/CardImage";
import IconButton from "../../IconButton";
import styles from "./BannerTitle.module.scss";
import Banner from "..";
const cx = classNames.bind(styles);

function BannerTitle({ listBanner, type, title, slider }) {

  const classes = cx("wrapper", {
    slider,
  });

  return (
    <div className={classes}>
      {listBanner.list.length !== 0 ? (
        <div className={cx("inner")}>
          <div className={cx("title")}>
            <p>Visit</p>
            <p>
              Places to see, ways to wander, and signature experiences that
              define Da Nang.
            </p>
            <p>See all</p>
          </div>
          <div className={cx("banner")}>
            <Banner
              className={cx("banner-inner")}
              listBanner={listBanner}
              type={type}
              number={3}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default BannerTitle;
