import React, { useState, useEffect } from "react";
import { FaLocationArrow, FaSignal, FaWifi, FaBatteryHalf, FaAngleDown,} from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { FaMicrophone } from "react-icons/fa";
import "./index.css";
import { SiSwiggy } from "react-icons/si";
import { IoFastFoodSharp } from "react-icons/io5";
import { MdLocalGroceryStore } from "react-icons/md";
import { IoRestaurantOutline } from "react-icons/io5";
import { BsCreditCard2Front } from "react-icons/bs";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Home = props => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);
  return (
    <div className="Loginaccount">
      <div className="inloginaccount">
        <div className="topnav">
          <div className="top-left-timespace">
            <p>{currentTime.toLocaleTimeString()}</p>
          </div>
          <div>
            <FaSignal className="icons" />
            <FaWifi className="icons" />
            <FaBatteryHalf className="icons" />
          </div>
        </div>
        <div className="belownav">
            <div>
                <div className="secondnav">
                    <FaLocationArrow className="icons" />
                    <h3>Kothagudem</h3>
                    <FaAngleDown className="icons"/>
                </div>
                <p>12-142 L.D palli kothagudem</p>
            </div>
            <div className="secondnav">
                <img src="https://img.freepik.com/free-vector/lovely-pizza-delivery-scooter_23-2147674678.jpg?t=st=1713371764~exp=1713375364~hmac=9c2ab850f91afac4b20a82bce0a124004003225ca13c2050d84848b3fc2cfcef&w=740" alt="" className="oneimage"/>
                <FaUserCircle size={35}/>
            </div>
        </div>
        <div>
            <div className="top-middple">
                <input type="search" className="searchelement" placeholder="Search for Pizza"/>
               <button className="searchbutton"> <FiSearch className="icons" size={20}/></button>
                <button className="micbutton"><FaMicrophone className="icons" size={20} color="brown"/></button>
            </div>
            <div className="middle-part">
                <div>
                    <p className="middlepara">Say hi to</p>
                    <h1>Insanely Good</h1>
                    <p>Fresh home made paneer</p>
                    <button className="shopbutton">Shop Now</button>
                </div>
                <img src="https://img.freepik.com/free-photo/tofu-made-from-soybeans-food-nutrition-concept_1150-26357.jpg?t=st=1713372624~exp=1713376224~hmac=fe07b7bf9d9af6afe6005d60581b5043372ee68fa6e6b13b211183a25cbae306&w=996" alt="" className="pannerimage"/>
            </div>
            <div className="middple-cards">
                <div className="cards">
                    <h1>FOOD DELIVERY</h1>
                    <p className="offersparagraph">UPTO 60% OFF- FREE DEL</p>
                </div>
                <div className="cards">
                    <h1>INSTAMART</h1>
                    <p className="offersparagraph">FREE DELIVERY</p>
                </div>
            </div>
            <div className="fotter">
                <Link className="fottercard" to="/home">
                    <SiSwiggy size={25} />
                    <p>Swiggy</p>
                </Link>
                <Link className="fottercard" to="/food">
                    <IoFastFoodSharp size={25} />
                    <p>Food</p>
                </Link>
                <Link className="fottercard" to="/instamart">
                    <MdLocalGroceryStore size={25} />
                    <p>Instamart</p>
                </Link>
                <Link className="fottercard" to="resturan">
                <IoRestaurantOutline size={25} />
                    <p>Dineout</p>
                </Link>
                <Link className="fottercard" to="/cards">
                <BsCreditCard2Front size={25}/>
                    <p>Credit card</p>
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
