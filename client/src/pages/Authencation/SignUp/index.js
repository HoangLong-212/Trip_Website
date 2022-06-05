import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./SignUp.module.scss";
import Input from "../../../components/General/Input";
import Button from "@/components/General/Button/Button";
import { Link, useSearchParams } from "react-router-dom";
import { DatePicker } from "antd";
import "./AntdFix.css";
import { useDispatch, useSelector } from "react-redux";
import { AccountsState$, ProfilesState$ } from "@/redux/selectors";
import { Select } from "antd";
import { Option } from "antd/lib/mentions";
import moment from "moment";
import { messageError } from "../../../components/message.js";
import * as actions from "../../../redux/actions";
import { registerRuntimeCompiler } from "vue";

const cx = classNames.bind(styles);

function SignUp() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getAccounts.getAccountsRequest());
    // console.log("accounttttttt", Accounts)
  }, [dispatch]);

  const Accounts = useSelector(AccountsState$);
  const Profiles = useSelector(ProfilesState$);

  // console.log(Profiles, "profile");
  console.log(Accounts, "account1");

  const [signUpForm, setSignUpForm] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: moment(),
    gender: "",
    avatar: "",
    background: "",
    accountName: "",
    password: "",
    confirmPassword: "",
    accountID: {},
  }); 
  const handleSubmit = async () => {
    createAccountt()
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSignUpForm((values) => ({ ...values, [name]: value }));
  };

  const checksignUpForm = () => {
    const isExisAccount = Accounts.find((Account) =>
      Account.accountName === signUpForm.accountName ? true : false
    );
    if (isExisAccount) {
      messageError("Account name already exists");
      return false;
    }

    if (!signUpForm.accountName) {
      messageError("Account name not entered");
      return false;
    }
    if (!signUpForm.password) {
      messageError("Password not entered");
      return false;
    }
    if (signUpForm.password != signUpForm.confirmPassword) {
      messageError("Confirm password is incorrect");
      return false;
    }
    if (!signUpForm.firstName) {
      messageError("First name name not entered");
      return false;
    }
    if (!signUpForm.lastName) {
      messageError("Last name not entered");
      return false;
    }
    if (!signUpForm.gender) {
      messageError("Gender not entered");
      return false;
    }
    if (!signUpForm.dateOfBirth) {
      messageError("Date of birth not entered");
      return false;
    }
    return true;
  };

  const  profileData = {
    firstName: signUpForm.firstName,
    lastName: signUpForm.accountName,
    dateOfBirth: signUpForm.dateOfBirth,
    gender: signUpForm.gender,
    avatar: "",
    background: "",
  };
  const accountData = {
    accountName : signUpForm.accountName,
    password: signUpForm.password,
  }
  console.log(profileData, "profiledata")
    //  const profileData = {
    // firstName: signUpForm.firstName,
    // lastName: signUpForm.lastName,
    // dateOfBirth: new Date(),
    // gender: signUpForm.gender,
    // avatar: "",
    // background: "",
    // accountID: currentAccount._id,

  const createAccountt = async () => {
     if (checksignUpForm()) {
       dispatch(actions.createAccount.createAccountRequest(accountData , profileData));
      console.log("Tạo tài khoản")
    }
  };
  // const createProfile = async () => {
  //   console.log("Tạo profile 1")
  //   const currentAccount = Accounts.find((Account) => {
  //     return Account.accountName === signUpForm.accountName;
  //   });
  //   console.log("Tạo profile 2")
  //        const  profileData = {
  //         firstName: signUpForm.firstName,
  //         lastName: signUpForm.accountName,
  //         dateOfBirth: moment(),
  //         gender: signUpForm.gender,
  //         avatar: "",
  //         background: "",
  //         accountID: "",
  //       };
  //       // console.log("profileDataaa", profileData);
  //       // await createProfile(profileData);
  //       console.log("jjdjjd", currentAccount)
  //   // dispatch(actions.createProfile.createProfileRequest(profileData));
  // };

  // dispatch(actions.getAccounts.getAccountsRequest());
  // if (checksignUpForm()) {
  //   // if (true) {
  //    const accountData = {
  //     accountName: signUpForm.accountName,
  //     password: signUpForm.password,
  //   };

  //   const aaaa =  await create(accountData);
  // dispatch(actions.getAccounts.getAccountsRequest());

  //    const profileData = {
  //   firstName: signUpForm.firstName,
  //   lastName: signUpForm.lastName,
  //   dateOfBirth: new Date(),
  //   gender: signUpForm.gender,
  //   avatar: "",
  //   background: "",
  //   accountID: currentAccount._id,

  // console.log(profileData, "dataa")
  // dispatch(actions.createProfile.createProfileRequest(profileData));

  return (
    <div className={cx("wrapper")}>
      <div className={cx("background-Img")}>
        <img
          src={require("../../../assets/img/signin/SignInImg.png")}
          className={cx("signIn-img")}
        ></img>
      </div>
      <div className={cx("semi-wrapper")}>
        <div className={cx("signInField")}>
          <div className={cx("text-title")}>Sign Up</div>
          <div className={cx("signIn-question")}>
            <div className={cx("question")}>Already have an account?</div>
            <div className={cx("navigation-button")}>
              <Link to="/SignIn">Sign In</Link>
            </div>
          </div>
          <div className={cx("name-input")}>
            <div className={cx("input")}>
              <div className={cx("title")}>First Name</div>
              <Input Small name="firstName" onChange={handleChange}></Input>
            </div>
            <div className={cx("input")}>
              <div className={cx("title")}>Last Name</div>
              <Input Small name="lastName" onChange={handleChange}></Input>
            </div>
          </div>
          <div className={cx("personal-info")}>
            <div className={cx("input")}>
              <div className={cx("title")}>Date of Birth</div>
              {/* <Input Small></Input> */}
              <DatePicker
                className={cx("picker")}
                defaultValue={signUpForm.dateOfBirth}
                format="DD/MM/YYYY"
                onChange={(e) => {
                  if (e) setSignUpForm({ ...signUpForm, dateOfBirth: e });
                }}
              ></DatePicker>
            </div>
            <div className={cx("input")}>
              <div className={cx("title")}>Gender</div>
              {/* <Input Small ></Input> */}
              <Select
                className={cx("select")}
                value={signUpForm.gender}
                onChange={(e) => setSignUpForm({ ...signUpForm, gender: e })}
              >
                <Option value="Male">Male</Option>
                <Option value="Female">Female</Option>
                <Option value="Other">Other</Option>
              </Select>
            </div>
          </div>
          <div className={cx("input")}>
            <div className={cx("title")}>Email Address</div>
            <Input large name="accountName" onChange={handleChange}></Input>
          </div>
          <div className={cx("input")}>
            <div className={cx("title")}>Password</div>
            <Input large name="password" onChange={handleChange}></Input>
          </div>
          <div className={cx("input")}>
            <div className={cx("title")}>Confirm Password</div>
            <Input large name="confirmPassword" onChange={handleChange}></Input>
          </div>
          <div className={cx("signUp-button")}>
            <Button primary large onClick={handleSubmit}>
              Next step
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
