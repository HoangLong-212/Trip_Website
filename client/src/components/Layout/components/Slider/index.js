import Banner from "@/components/General/Banner";
import classNames from "classnames/bind";
import React from "react";
import styles from "./Slider.module.scss";
const cx = classNames.bind(styles);

function Slider({ className }) {
  const arr =[1, 2, 3, 4, 5, 6, 7, 8];

  const classes = cx("wrapper", {
    [className]: className,
  });
  return (
    <div className={classes}>
      <div className={cx('inner')}>
      <Banner
        slider 
        title="Destinations travelers love"
        listBanner={arr}
        type="card"
      />
      </div>
    </div>
  );
}

export default Slider;
