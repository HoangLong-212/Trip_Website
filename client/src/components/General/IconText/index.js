import classNames from "classnames/bind";
import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import styles from "./IconText.module.scss";

const cx = classNames.bind(styles);

function IconText({ icon, className }) {
  const [state, setState] = useState(true);

  const listIcons = {
    left: <FiArrowLeft className={cx("btn-icon")} />,
    right: <FiArrowRight className={cx("btn-icon")} />,

  };
  const classes = cx("wrapper", {
    [className]: className,
  });

  return (
    <div className={classes}>
      {/* <button className={classBtn} onClick={handleIcon}>
        {icon ? (
          listIcons[icon]
        ) : state ? (
          <AiOutlineHeart className={cx("btn-icon")} />
        ) : (
          <AiFillHeart className={cx("btn-icon-fill")} />
        )}
      </button> */}
    </div>
  );
}

export default IconText;
