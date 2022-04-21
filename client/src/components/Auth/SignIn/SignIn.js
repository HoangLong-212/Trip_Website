import React from "react";
import "./style.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
export default function SignIn() {
  // Show/Hide Password
  const [state, setstate] = React.useState(false);
  const show_hide_btn = () => {
    setstate((prevState) => !prevState);
  };
  // Show/Hide Password

  //form_section_default_login
  const form_section_default_login = (
    <div className="form-section">
      <form className="form-main">
        <div className="form-item">
          <label className="form-label">Email address</label>
          <input type="text" className="form-input" />
        </div>
        <div className="form-item">
          <label className="form-label">Password</label>
          <div className="form-password">
            <input className="form-input" type={state ? "text" : "password"} />
            <button onClick={show_hide_btn}>
              {state ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
          </div>
        </div>
        <div className="form-item">
          <a href="#">Forgot password?</a>
          <input className="form-btn" type="submit" value="Sign In" />
          <div>
            Don’t have an account?
            <a href="#"> Sign Up</a>
          </div>
        </div>
      </form>
    </div>
  );
  //form_section_default_login

  //   form_section_via_fb_and_google_login
  const form_section_via_fb_and_google_login = (
    <div className="form-section_via">
      <div className="form-via-or">
        <div className="form-via-dash"></div>
        <span className="form-via-text">Or</span>
        <div className="form-via-dash"></div>
      </div>
      <div className="SignInButton_wrapper">
        <img
          src={require("../../../assets/img/signin/fb.png")}
          className="SignInButton_icon"
        ></img>
        <span className="SignInButton_title">Sign In with Facebook</span>
      </div>
      <div className="SignInButton_wrapper">
        <img
          src={require("../../../assets/img/signin/google.png")}
          className="SignInButton_icon"
        ></img>
        <span className="SignInButton_title">Sign In with Google</span>
      </div>
    </div>
  );
  //   form_section_via_fb_and_google_login
  return (
    <div id="sign-in">
      <p>Sign In</p>
      {form_section_default_login}
      {form_section_via_fb_and_google_login}
    </div>
  );
}
