import classNames from "classnames/bind";
import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useDispatch } from "react-redux";
import * as actions from "@/redux/actions";
import styles from "./IconButton.module.scss";

const cx = classNames.bind(styles);

function IconButton({ icon, className }) {
  const [state, setState] = useState(true);

  const listIcons = {
    left: <FiArrowLeft className={cx("btn-icon")} />,
    right: <FiArrowRight className={cx("btn-icon")} />,

  };

  const dispatch = useDispatch();

  const openMyTripModal = React.useCallback(() => {
    dispatch(actions.showChooseCollectionModal());
  }, [dispatch]);


  const classBtn = cx("btn", {
    [className]: className,
    icon,
  });

  const handleIcon = () => {
    setState(!state);
  };

  return (
    <div className={cx("wrapper")}>
      <button className={classBtn} onClick={handleIcon}>
        {icon ? (
          listIcons[icon]
        ) : state ? (
          <AiOutlineHeart className={cx("btn-icon")} onClick={openMyTripModal} />
        ) : (
          <AiFillHeart className={cx("btn-icon-fill")} />
        )}
      </button>
     </div>
  );
}

export default IconButton;
