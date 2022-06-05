import React from "react";
import classNames from "classnames/bind";
import styles from "./Input.module.scss";
const cx = classNames.bind(styles);

function Search({large = false, Small = false,type = "text" , onChange, className, name}) {
 
  
  const classes = cx("input",{ 
    [className]: className,
    large,
    Small,
  });
  return (
    <div className={classes} >
        <div className={cx("caption")}></div>
      <input 
      onChange={(e) => onChange(e)}
      name={name}
      type={type}
      ></input>
    </div>
  );
}

export default Search;
 