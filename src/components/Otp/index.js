import React, { useState, useEffect } from "react";
import { FaLocationArrow, FaSignal, FaWifi, FaBatteryHalf, FaArrowLeft } from "react-icons/fa";
import "./index.css";

const Otp = props => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [otpNumber, setNumber]=useState("")

  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  const clickedButtonotp = (num)=>{
    setNumber(otpNumber+num)
  }

  const enteredotpnumber =(event)=>{
    setNumber(event.target.value)
  }
  

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
        <div>
            <h1>Verify Details</h1>
            <p>Otp sent to XXXXXXXXXX</p>
        </div>
        <div>
            <p>ENTER OTP</p>
            <input type="text" value={otpNumber} onChange={enteredotpnumber} className="otpinputelement"/>
        <div className="phonenumeberbottom">
            <button className="numbersclickbutton" onClick={() => clickedButtonotp("1")}><span className="numberdial">1</span><span></span></button>
            <button className="numbersclickbutton" onClick={() => clickedButtonotp("2")}><span className="numberdial">2</span><span>ABC</span></button>
            <button className="numbersclickbutton" onClick={() => clickedButtonotp("3")}><span className="numberdial">3</span><span>DEF</span></button>
            <button className="numbersclickbutton" onClick={() => clickedButtonotp("4")}><span className="numberdial">4</span><span>GHI</span></button>
            <button className="numbersclickbutton" onClick={() => clickedButtonotp("5")}><span className="numberdial">5</span><span>JKL</span></button>
            <button className="numbersclickbutton" onClick={() => clickedButtonotp("6")}><span className="numberdial">6</span><span>MNO</span></button>
            <button className="numbersclickbutton" onClick={() => clickedButtonotp("7")}><span className="numberdial">7</span><span>PQRS</span></button>
            <button className="numbersclickbutton" onClick={() => clickedButtonotp("8")}><span className="numberdial">8</span><span>TUV</span></button>
            <button className="numbersclickbutton" onClick={() => clickedButtonotp("9")}><span className="numberdial">9</span><span>WXYZ</span></button>
            <button className="numbersclickbutton" onClick={() => clickedButtonotp("0")}><span className="numberdial">0</span><span></span></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp