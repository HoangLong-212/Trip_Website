import React from "react";
import classNames from "classnames/bind";
import * as actions from "@/redux/actions";
import { useDispatch, useSelector } from "react-redux";
import {
  AccountsState$,
  attractionsState$,
  foodAndDrinksState$,
  hotelsState$,
  ProfileModalState$,
  ProfilesState$,
  provincesState$,
} from "@/redux/selectors";

import Banner from "@/components/General/Banner";
import ListOfBtnImg from "@/components/General/List/ListOfBtnImg";
import Search from "@/components/General/Search";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);

function Home() {
  const province = useSelector(provincesState$);
  const attraction = useSelector(attractionsState$);
  const foodAndDrink = useSelector(foodAndDrinksState$);
  const hotel = useSelector(hotelsState$);

   

  return (
    <div className={cx("wrapper")}>
      <div className={cx("search-img")}>
        <img src={require("@/assets/img/Search-Background.png")} alt="" />
        <Search large className={cx("search")} />
      </div>
      <ListOfBtnImg />

      <Banner
        title="5-Star Favorites"
        type="cardWithBackground"
        listBanner={{
          path: "FoodAndDrink",
          list: foodAndDrink,
        }}
      />
      <Banner
        title="The Best Hotels and Resorts"
        type="cardWithBackground"
        listBanner={{
          path: "Hotel",
          list: hotel,
        }}
      />
      <Banner
        title="Your might like these"
        type="cardWithBackground"
        listBanner={{
          path: "Attraction",
          list: attraction,
        }}
      />
    </div>
  );
}

export default Home;
