import React, { useState, useEffect } from "react";
import { FaLocationArrow, FaSignal, FaWifi, FaBatteryHalf, FaArrowLeft } from "react-icons/fa";
import "./index.css";

const LoginPhonenumber = (props) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  const clickedButton = (num) => {
    setPhoneNumber(phoneNumber + num);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const goForOtp = () => {
    if (phoneNumber.length === 10) {
      const { history } = props;
      history.replace("/otp");
    } else if (phoneNumber.length < 10) {
      setError(true);
    }
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
          <img src="/path/to/image.png" alt="" />
        </div>
        <div className="bottomOfLoginacountphonenumber">
          <h3>LOGIN</h3>
          <p>Enter your phone number to proceed</p>
          <p>PHONE NUMBER</p>
          <p className="entireningphonenumber">
            +91<input className="textboxnumber" type="text" value={phoneNumber} onChange={handlePhoneNumberChange} />
          </p>
          <hr className="line" />
          <button className="continuebutton" onClick={goForOtp}>
            CONTINUE
          </button>
          {error && <p style={{ color: "red" }}>Enter a valid number</p>}
          <p>
            By clicking, I accept the <span className="termsandcondition">Terms & Conditions & Privacy Policy</span>
          </p>
          <div className="phonenumeberbottom">
            <button className="numbersclickbutton" onClick={() => clickedButton("1")}><span className="numberdial">1</span><span></span></button>
            <button className="numbersclickbutton" onClick={() => clickedButton("2")}><span className="numberdial">2</span><span>ABC</span></button>
            <button className="numbersclickbutton" onClick={() => clickedButton("3")}><span className="numberdial">3</span><span>DEF</span></button>
            <button className="numbersclickbutton" onClick={() => clickedButton("4")}><span className="numberdial">4</span><span>GHI</span></button>
            <button className="numbersclickbutton" onClick={() => clickedButton("5")}><span className="numberdial">5</span><span>JKL</span></button>
            <button className="numbersclickbutton" onClick={() => clickedButton("6")}><span className="numberdial">6</span><span>MNO</span></button>
            <button className="numbersclickbutton" onClick={() => clickedButton("7")}><span className="numberdial">7</span><span>PQRS</span></button>
            <button className="numbersclickbutton" onClick={() => clickedButton("8")}><span className="numberdial">8</span><span>TUV</span></button>
            <button className="numbersclickbutton" onClick={() => clickedButton("9")}><span className="numberdial">9</span><span>WXYZ</span></button>
            <button className="numbersclickbutton" onClick={() => clickedButton("0")}><span className="numberdial">0</span><span></span></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPhonenumber;
