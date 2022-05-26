import React, { useState, useEffect } from "react";
import { Carousel } from "antd";
import classNames from "classnames/bind";
import { useSelector } from "react-redux";
import { provincesState$ } from "@/redux/selectors";

import Card from "../Card";
import CardImage from "../Card/CardImage";
import IconButton from "../IconButton";
import styles from "./Banner.module.scss";
const cx = classNames.bind(styles);

function Banner({ listBanner, type, title, slider }) {
  let listBannerNew = listBanner;
  listBannerNew.list = listBannerNew.list.sort(() => Math.random() - 0.5).slice(0, 6);

  const SlickButtonFix = ({
    currentSlide,
    slideCount,
    children,
    ...passProps
  }) => <span {...passProps}>{children}</span>;

  const bannerItems = (value) => ({
    cardWithBackground: (
      <Card
        key={value._id}
        value={value}
        path = {listBanner.path}
      />
    ),
    card: (
      <CardImage
        key={value._id}
        value={value}
        path = {listBanner.path}
      />
    ),
  });

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    prevArrow: (
      <SlickButtonFix>
        <IconButton icon="left" className={cx("btn1")} />
      </SlickButtonFix>
    ),
    nextArrow: (
      <SlickButtonFix>
        <IconButton icon="right" className={cx("btn2")} />
      </SlickButtonFix>
    ),
  };

  const classes = cx("wrapper", {
    slider,
  });

  const CarouselCompo = () => {
    return (
      <Carousel {...settings} className={cx("banner")}>
        {listBannerNew.list.map((value, index) => bannerItems(value)[type])}
      </Carousel>
    );
  };

  return (
    <div className={classes}>
      <h2>{title}</h2>
      <CarouselCompo />
    </div>
  );
}

export default Banner;
