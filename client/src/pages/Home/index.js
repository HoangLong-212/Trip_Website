import Banner from "@/components/General/Banner";
import ListOfBtnImg from "@/components/General/List/ListOfBtnImg";
import Search from "@/components/General/Search";
import classNames from "classnames/bind";
import React from "react";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);

function Home() {
  const arr =[1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className={cx("wrapper")}>
      <div className={cx("search-img")}>
        <img src={require("@/assets/img/Search-Background.png")} alt="" />
        <Search large className={cx("search")} />
      </div>
      <ListOfBtnImg />
      <Banner
        title="Top destinations for your next vacation"
        listBanner={arr}
        type="cardWithBackground"
      />
       <Banner
        title="Your might like these"
        listBanner={arr}
        type="cardWithBackground"
      />
      
    </div>
  );
}

export default Home;
