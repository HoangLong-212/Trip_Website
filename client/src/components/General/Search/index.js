import React from "react";
import classNames from "classnames/bind";
import { BsSearch } from "react-icons/bs";
import styles from "./Search.module.scss";
const cx = classNames.bind(styles);

function Search({large = false, className}) {


  const classes = cx("search",{ 
    [className]: className,
    large,
  });
  return (
    <div className={classes} >
      <button className={cx("search-btn")}>
       <BsSearch/>
        </button>
      <input placeholder="Where to?" spellCheck={false} />
    </div>
  );
}

export default Search;
