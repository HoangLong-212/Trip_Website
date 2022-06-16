import classNames from "classnames/bind";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "@/redux/actions";
import styles from "./CollectionItem.module.scss";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const cx = classNames.bind(styles);

function CollectionItem({ data }) {
  // console.log("data", data.placeList[1]);

  return (
    <div className={cx("wrapper")}>
      <img
        src={
          data.placeList[0] !== undefined
            ? data.placeList[0].placeList_id.image[0]
            : "https://langgo.edu.vn/public/files/upload/default/images/bai-viet/ielts-grammar-phan-biet-travel-trip-journey-tour-voyage-excursion-expedition-passage1(1).jpg"
        }
        alt={"asd"}
      />
      <p>{data.name}</p>
      <AiFillHeart className={cx("icon-fill")} />
    </div>
  );
}

export default CollectionItem;
