import classNames from "classnames/bind";
import React, { useState } from "react";
import { Rate } from "antd";
import { MdPlace } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { AiOutlineGlobal } from "react-icons/ai";
import { attractionsState$, provincesState$ } from "@/redux/selectors";
import { useDispatch, useSelector } from "react-redux";

import styles from "./TopContent.module.scss";
import IconButton from "@/components/General/IconButton";
const cx = classNames.bind(styles);

function TopContent({ data, display = false }) {
  const RateStart = () => {
    return <Rate disabled allowHalf defaultValue={data.evaluatePoint} />;
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("top-content")}>
          <span>
            {!display ? (
              <span
                style={{
                  color: "#FF5D5D",
                }}
              >
                Explore{" "}
              </span>
            ) : null}

            {data.name}
          </span>
          <IconButton className={cx("icon-btn")} />
        </div>
        {display ? (
          <div>
            <div className={cx("start-rate")}>
              <RateStart />
              <span className="ant-rate-text">( {data.evaluatePoint} )</span>
            </div>
            <div className={cx("bottom-content")}>
              <div className={cx("icon-content")}>
                <MdPlace className={cx("icon-location")} />
                {data.location}
              </div>
              <div className={cx("icon-content")}>
                <FiPhone className={cx("icon-location")} />
                {data.phone}
              </div>
              <div className={cx("icon-content")}>
                <AiOutlineGlobal className={cx("icon-location")} />
                <a href={data.website} target="_blank">
                  Visit website
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default TopContent;
