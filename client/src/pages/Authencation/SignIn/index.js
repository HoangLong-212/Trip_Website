import React, { useContext, useState } from "react";
import classNames from "classnames/bind";
import styles from "./SignIn.module.scss";
import Input from "../../../components/General/Input";
import Button from "@/components/General/Button/Button";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "@/contexts/AuthContext";
import { Spin } from "antd";
import { messageError } from "@/components/message";
import { AccountsState$ } from "@/redux/selectors";
import { useSelector } from "react-redux";



const cx = classNames.bind(styles);

function SignIn() {
  const {
    signInAccount,
    authState: {
      authLoading, isAuthenticated, Account
    },
  } = useContext(AuthContext);

  const Accounts = useSelector(AccountsState$);
  // console.log(Accounts, "ssss")

  const navigate = useNavigate();

  const [signInForm, setSignInForm] = useState({
    accountName: "",
    password: "",
  });

  const handleSubmit = (e) => {
    console.log(signInForm);
    signin(signInForm);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSignInForm(values => ({...values, [name]: value}))
  };

  const checksignInForm = () => {
    const isExisAccount = Accounts.find((Account) =>
      Account.accountName === signInForm.accountName ? true : false
    );
      if (!isExisAccount) {
        messageError("Account name already exists");
        return false;
      }
      return true;
    }

  const signin = async (e) => {
    // e.preventDefault();
    try {
      const signInData = await signInAccount(signInForm);
      if (!signInData.success) {
        messageError("Tài khoản hoặc mật khẩu không đúng hoặc đã ngưng hoạt động");
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (authLoading) {
    return (
      <div className={cx("wrapper")}>
        <div className={cx("loading-circle")}>
          <Spin size="large" />
        </div>
      </div>
    );
  } else if (isAuthenticated) {
    console.log( isAuthenticated,"Đã đăng nhập")
    return (
      <Navigate to="/" />
    );
  } else {
    console.log(isAuthenticated, "Chưa đăng nhập")
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
            <div className={cx("text-title")}>Sign In</div>
            <div className={cx("input")}>
              <div className={cx("title")}>Email address</div>
              <Input large name="accountName" className={cx("input-email")} onChange={handleChange}></Input>
            </div>
            <div className={cx("input")}>
              <div className={cx("title")}>Password</div>
              <Input
                name="password"
                className={cx("input-password")}
                large
                type="password"
                onChange={handleChange}
              ></Input>
            </div>
            <div className={cx("forgot-button")}>Forgot password?</div>
            <div className={cx("signIn-button")}>
              <Button primary large onClick={handleSubmit}>
                Sign In
              </Button>
            </div>
            <div className={cx("signup-question")}>
              <div className={cx("question")}>Don't have an account?</div>
              <div className={cx("navigation-button")}>
                <Link to="/SignUp">Sign Up</Link>
              </div>
            </div>
            <div className={cx("devider-login")}>
              <div className={cx("divider")}></div>
              <div className={cx("Or")}>Or</div>
              <div className={cx("divider")}></div>
            </div>

            <Button className={cx("signInWithFB-button")}>
              <img
                src={require("../../../assets/img/signin/fb.png")}
                className={cx("fb-img")}
              ></img>
              Sign in with Facebook
            </Button>
            {/* <div className={cx("signInWithGG-button")}>
              <Button >
              <img src={require("../../assets/img/signin/google.png")} className={cx("gg-img")}>
              </img>
              Sign in with Google
              </Button >
            </div> */}

            <Button className={cx("signInWithGG-button")}>
              <img
                src={require("../../../assets/img/signin/google.png")}
                className={cx("gg-img")}
              ></img>
              Sign in with Google
            </Button>
          </div>
        </div>
      </div>
  );
}
  }

export default SignIn;
