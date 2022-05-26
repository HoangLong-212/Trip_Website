import React, { useState } from "react";
import classNames from "classnames/bind";

import styles from "./InnerLayout.module.scss";
import DefaultLayout from "../DefaultLayout";
import TopContent from "../components/TopContent";
import ImgContent from "../components/ImgContent";
import {
  attractionsState$,
  foodAndDrinksState$,
  hotelsState$,
} from "@/redux/selectors";
import {  useSelector } from "react-redux";

const cx = classNames.bind(styles);

function InnerLayout({ children }) {
  const attractions = useSelector(attractionsState$);
  const foodAndDrinks = useSelector(foodAndDrinksState$);
  const hotels = useSelector(hotelsState$);


  const url = window.location.pathname;
  const path = url
    .replaceAll("%20", " ")
    .split("/")
    .filter((x) => x);

  const headerURL = path[0].split("-");

  let dataSet;

  if (headerURL[0] === "Attraction") {
    dataSet = attractions.find(function (dataSet) {
      return dataSet.name === headerURL[1];
    });
  } else if (headerURL[0] === "FoodAndDrink") {
    dataSet = foodAndDrinks.find(function (dataSet) {
      return dataSet.name === headerURL[1];
    });
  } else if (headerURL[0] === "Hotel") {
    dataSet = hotels.find(function (dataSet) {
      return dataSet.name === headerURL[1];
    });
  }

  const [data, setData] = useState({
    name: "",
    location: "",
    phone: "",
    website: "",
    image: [],
    evaluatePoint: -1,
  });

  if (dataSet !== undefined && data.name === "") {
    setData(dataSet);
  }

  return (
    <DefaultLayout backgroundColor childrenOutSide={<TopContent data={data} />}>
      <div className={cx("wrapper")}>
        <div className={cx("container")}>
          <ImgContent data={data.image} name={data.name} />
          {children}
        </div>
      </div>
    </DefaultLayout>
  );
}

export default InnerLayout;
