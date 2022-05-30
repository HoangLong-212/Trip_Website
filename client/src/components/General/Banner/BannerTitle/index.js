import React, { useState, useEffect } from "react";
import { Carousel } from "antd";
import classNames from "classnames/bind";
import { useSelector } from "react-redux";
import { provincesState$ } from "@/redux/selectors";
import { useParams } from "react-router-dom";

import Card from "../../Card";
import CardImage from "../../Card/CardImage";
import IconButton from "../../IconButton";
import styles from "./BannerTitle.module.scss";
import Banner from "..";
const cx = classNames.bind(styles);

function BannerTitle({ listBanner, type, title, slider }) {

  let { name } = useParams();
  const [data, setData] = useState(()=>{
    if(listBanner.path === "Place"){
      return {
        title: "Cities in " + name,
        description: "",
      }
    }
    else  if(listBanner.path === "Hotel"){
      return {
        title: "Stay",
        description: "A mix of the charming, iconic, and modern",
      }
    }else  if(listBanner.path === "FoodAndDrink"){
      return {
        title: "Eat",
        description: "Quintessential " + name + " bistros, bars, and beyond.",
      }
    }
    else  if(listBanner.path === "Attraction"){
      return {
        title: "Visit",
        description: "Places to see, ways to wander, and signature experiences that define " + name,
      }
    }
  });

  const classes = cx("wrapper", {
    slider,
  });

  return (
    <div className={classes}>
      {listBanner.list.length !== 0 ? (
        <div className={cx("inner")}>
          <div className={cx("title")}>
            <p>{data.title}</p>
            <p>
              {data.description}
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
