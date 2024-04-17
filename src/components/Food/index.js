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
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Food = props => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="Loginaccount">
      <div className="inloginaccount">
        <div className="sectionof">
        <div className="addingtransition">
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
                    <input type="search" className="searchelement"/>
                    <button className="searchbutton"> <FiSearch className="icons" size={20}/></button>
                    <button className="micbutton"><FaMicrophone className="icons" size={20} color="brown"/></button>
                </div>
            </div>
            <div className="top-foodsection">
                <div>
                    <button className="exclusive">ONE EXCLUSIVE</button>
                    <h1 className="foodheading">FOOD FIESTA</h1>
                    <p><span className="foodparagraph">2 OFFERS IN 1</span> ORDER</p>
                </div>
                <img src="https://img.freepik.com/free-vector/combo-meals-offer-vertical-banners-pack_23-2148679411.jpg?t=st=1713379081~exp=1713382681~hmac=5d193c15f9e055955a48fb9b5816cc5b904edfdfe4bf0a817753739a5e6987c5&w=996" alt="" className="offersimage"/>
            </div>
            <div>
                <Slider {...settings}>
                    <div>
                       <div className="scrollcards">
                       <div>
                            <h3>CHICKEN WINGS DEAL AT @329</h3>
                            <p>11 pcs boneless wings: save 25% exclusive on swiggy</p>
                            <button>ORDER NOW</button>
                        </div>
                        <img src="https://img.freepik.com/free-photo/fried-chicken-french-fries-white-plate_74190-4869.jpg?t=st=1713380372~exp=1713383972~hmac=2986344b9bcb939d7c146c1715d4bfcbff375fac18640639c759a7f5644a776c&w=996" alt="" className="scrollimage"/>
                       </div>
                    </div>
                    <div>
                    <div className="scrollcards">
                       <div>
                            <h3>CHICKEN WINGS DEAL AT @329</h3>
                            <p>11 pcs boneless wings: save 25% exclusive on swiggy</p>
                            <button>ORDER NOW</button>
                        </div>
                        <img src="https://img.freepik.com/free-photo/fried-chicken-french-fries-white-plate_74190-4869.jpg?t=st=1713380372~exp=1713383972~hmac=2986344b9bcb939d7c146c1715d4bfcbff375fac18640639c759a7f5644a776c&w=996" alt="" className="scrollimage"/>
                       </div>
                    </div>
                    <div>
                    <div className="scrollcards">
                       <div>
                            <h3>CHICKEN WINGS DEAL AT @329</h3>
                            <p>11 pcs boneless wings: save 25% exclusive on swiggy</p>
                            <button>ORDER NOW</button>
                        </div>
                        <img src="https://img.freepik.com/free-photo/fried-chicken-french-fries-white-plate_74190-4869.jpg?t=st=1713380372~exp=1713383972~hmac=2986344b9bcb939d7c146c1715d4bfcbff375fac18640639c759a7f5644a776c&w=996" alt="" className="scrollimage"/>
                       </div>
                    </div>
                    <div>
                    <div className="scrollcards">
                       <div>
                            <h3>CHICKEN WINGS DEAL AT @329</h3>
                            <p>11 pcs boneless wings: save 25% exclusive on swiggy</p>
                            <button>ORDER NOW</button>
                        </div>
                        <img src="https://img.freepik.com/free-photo/fried-chicken-french-fries-white-plate_74190-4869.jpg?t=st=1713380372~exp=1713383972~hmac=2986344b9bcb939d7c146c1715d4bfcbff375fac18640639c759a7f5644a776c&w=996" alt="" className="scrollimage"/>
                       </div>
                    </div>
                </Slider>
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

export default Food;