import React, { useState } from "react";
import { useParams } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Province.module.scss";
import { useSelector } from "react-redux";
import { attractionsState$, foodAndDrinksState$, hotelsState$, placesState$, provincesState$ } from "@/redux/selectors";
import { Rate, Tooltip } from "antd";
import { AiOutlineInfoCircle } from "react-icons/ai";
import HotelItemGird from "@/components/Features/Hotel/HotelItemGird";
import HotelModal from "@/components/General/Modal/HotelModal";
import BannerTitle from "@/components/General/Banner/BannerTitle";


const cx = classNames.bind(styles);

function Province() {
  let { name } = useParams();
  // let localS = localStorage.getItem("_id");
  // console.log(JSON.parse(localS)._id);

  const provinces = useSelector(provincesState$);
  const places = useSelector(placesState$);
  const hotels = useSelector(hotelsState$);
  const foodAndDrinks = useSelector(foodAndDrinksState$);
  const attractions = useSelector(attractionsState$);

  const url = window.location.pathname;
  const path = url
    .replaceAll("%20", " ")
    .split("/Province_")
    .filter((x) => x);

  const province = provinces.find(function (province) {
    return province.name === path[0];
  });

  const place = places.filter(function (place) {
    return place.provinceID.name === path[0];
  });

  const hotel = hotels.filter(function (hotel) {
    return hotel.provinceID.name === path[0];
  });
  const foodAndDrink = foodAndDrinks.filter(function (foodAndDrink) {
    return foodAndDrink.provinceID.name === path[0];
  });
  const attraction = attractions.filter(function (attraction) {
    return attraction.provinceID.name === path[0];
  });

  // console.log("hotel",hotel)

  let data = {
    name: "",
    title: "",
    description: "",
  };

  if (province !== undefined) {
    data = {
      ...province,
    };
  }

  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("description")}>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
        </div>
        <div className={cx("essential")}>
          <h2>Essential {data.name}</h2>
          <BannerTitle
            type="cardWithBackground"
            listBanner={{
              path: "Place",
              list: place,
            }}
          />
          <BannerTitle
            type="cardWithBackground"
            listBanner={{
              path: "Hotel",
              list: hotel,
            }}
          />
          <BannerTitle
            type="cardWithBackground"
            listBanner={{
              path: "FoodAndDrink",
              list: foodAndDrink,
            }}
          />
          <BannerTitle
            type="cardWithBackground"
            listBanner={{
              path: "Attraction",
              list: attraction,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Province;
