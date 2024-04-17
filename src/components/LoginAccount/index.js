import React, { useState, useEffect } from "react";
import { FaLocationArrow, FaSignal, FaWifi, FaBatteryHalf, FaArrowLeft } from "react-icons/fa";
import { BiSolidOffer, BiMailSend } from "react-icons/bi"; 
import "./index.css";

const LoginAccount = props => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  const moveTONext = () => {
    const {history}=props
    history.replace('/login');
  };
  return (
    <div className="Loginaccount">
      <div className="inloginaccount">
        <div className="topnav">
          <div className="top-left-timespace">
            <p>{currentTime.toLocaleTimeString()}</p>
            <FaLocationArrow className="icons" />
          </div>
          <div>
            <FaSignal className="icons" />
            <FaWifi className="icons" />
            <FaBatteryHalf className="icons" />
          </div>
        </div>
        <FaArrowLeft />
        <div className="middleLoginAccount">
          <h1>LIVE</h1>
          <h1>FOR</h1>
          <h1>FOOD</h1>
          <img src="Ellipse 4.jpg" alt="text" />
        </div>
        <div className="bottomOfLoginacount">
          <h2>ACCOUNT</h2>
          <p>Login/Create Account to Manage Orders</p>
          <button className="buttonoflogin" onClick={moveTONext}>
            Login
          </button>
          <p>
            By clicking, I accept the <span className="termsandcondition">Terms & Conditions & Privacy Policy</span>
          </p>
          <hr />
          <div className="bottomSection">
            <BiSolidOffer className="icons" />
            <h3 className="offerandsendsection">Offers</h3>
          </div>
          <div className="bottomSection">
            <BiMailSend className="icons" />
            <h3 className="offerandsendsection">Send Feedback</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginAccount;
