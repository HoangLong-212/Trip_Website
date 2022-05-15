import { Carousel } from "antd";
import classNames from "classnames/bind";
import React from "react";
import Card from "../Card";
import CardImage from "../Card/CardImage";
import IconButton from "../IconButton";
import styles from "./Banner.module.scss";
const cx = classNames.bind(styles);

function Banner({ listBanner, type, title, slider }) {
  const SlickButtonFix = ({
    currentSlide,
    slideCount,
    children,
    ...passProps
  }) => <span {...passProps}>{children}</span>;

  const bannerItems = {
    cardWithBackground: <Card />,
    card: <CardImage />,
  };

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

  const classes = cx("wrapper",{ 
    slider,
  })

  return (
    <div className={classes}>
      <h2>{title}</h2>
      <Carousel {...settings} className={cx("banner")}>
        {listBanner.map((value, index) => bannerItems[type])}
      </Carousel>
    </div>
  );
}

export default Banner;
