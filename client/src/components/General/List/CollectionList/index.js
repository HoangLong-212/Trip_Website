import classNames from "classnames/bind";
import React, { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "@/redux/actions";
import styles from "./CollectionList.module.scss";
import CollectionItem from "./CollectionItem";
import { myTripsState$ } from "@/redux/selectors";
import { AuthContext } from "@/contexts/AuthContext";

const cx = classNames.bind(styles);

function CollectionList() {
  const dispatch = useDispatch();

  const {
    authState: { authLoading, isAuthenticated, user, profile, myTrip },
  } = useContext(AuthContext);

  // const myTrip = useSelector(myTripsState$);

  console.log("myTrip", myTrip);

  // React.useEffect(() => {
  //   dispatch(actions.getMyTrips.getMyTripsRequest());
  // }, [dispatch]);

  return (
    <div>
      {myTrip && myTrip.collections.map((value) => (
        <CollectionItem key={value._id} data={value} />
      ))}
    </div>
  );
}

export default CollectionList;
