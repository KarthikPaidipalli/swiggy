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

const Instamart = props => {
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
                    <input type="search" className="searchelement" placeholder="Search for grocery"/>
                    <button className="searchbutton"> <FiSearch className="icons" size={20}/></button>
                    <button className="micbutton"><FaMicrophone className="icons" size={20} color="brown"/></button>
                </div>
            </div>
            <div>
                <img src="https://img.freepik.com/free-vector/flat-supermarket-sale-background_23-2149379271.jpg?t=st=1713461988~exp=1713465588~hmac=976a270179006c0dcec95acd95ce704a40a0d7fe4748359acc4bfdf6041d37a0&w=1060" alt="" className="instamartimage"/>
            </div>
            <div>
                <div className="cardsofessentials">
                    <div className="trying">
                    <div className="aligingcards">
                        <div className="cardofessentails">
                            <img src="https://img.freepik.com/free-photo/top-view-brown-bean-soup-delicious-cooked-soup-with-different-seasonings-dark-surface-dinner-soup-bean-food-meal_140725-74440.jpg?t=st=1713462896~exp=1713466496~hmac=173595ca5a35f24b1801e7d436547761586be3098b2dde90eaa8d279e4134183&w=996" alt="" className="martimage"/>
                        </div>
                        <p>Cooking Essential</p>
                    </div>
                    <div className="aligingcards">
                        <div className="cardofessentails">
                            <img src="https://img.freepik.com/free-photo/assortment-bath-concept-with-soap-towel-box_23-2148295990.jpg?t=st=1713463013~exp=1713466613~hmac=b38e4f38e1ebb3f8cc3aea3b728b6b3f6369cbe846a4b9f2396939c7a413745e&w=996" alt="" className="martimage"/>
                        </div>
                        <p>Personal care</p>
                    </div>
                    <div className="aligingcards">
                        <div className="cardofessentails">
                            <img src="https://img.freepik.com/free-vector/realistic-chips-package_1284-34786.jpg?t=st=1713463144~exp=1713466744~hmac=b660c0be10a1d55a81f1adb4b4edfdc631d0e065cb06d1e1cf9bc24a0fccf8cb&w=740" alt="" className="martimage"/>
                        </div>
                        <p>Snacks</p>
                    </div>
                    <div className="aligingcards">
                        <div className="cardofessentails">
                            <img src="https://img.freepik.com/free-photo/colorful-soda-drinks-macro-shot_53876-32240.jpg?t=st=1713463226~exp=1713466826~hmac=abe61d09e2410d517b7cfa7308cdc59ed4a693ba85e4d22dd1ddb5489e5fe09a&w=1380" alt="" className="martimage"/>
                        </div>
                        <p>Soft drinks</p>
                    </div>
                    </div>
                </div>
                <h1>BEST PRICES ALWAYS AND FREE DELIVERY</h1>
                <div className="cardsofessentials">
                    <div className="trying">
                    <div className="Items-card">
                        <p>25% off</p>
                        <h3>Save Rs.123</h3>
                        <img src="https://img.freepik.com/free-photo/delicious-peanut-butter-table_144627-12427.jpg?t=st=1713463598~exp=1713467198~hmac=189786a63755921bcf133b8b859d208c12b6bcc18406a158e41ae137313d0174&w=996" alt="" className="imagesofitems"/>
                    </div>
                    <div className="Items-card">
                        <p>15% off</p>
                        <h3>Save Rs.75</h3>
                        <img src="https://img.freepik.com/free-photo/chocolate-spread-nougat-cream-with-hazelnuts-glass-jar-concrete-copyspace_114579-4699.jpg?t=st=1713463967~exp=1713467567~hmac=f3177dd79a6ffd5e1af0313794c19595dcdb083d5d20688fd0ee890f5fd64343&w=740" alt="" className="imagesofitems"/>
                    </div>
                    <div className="Items-card">
                        <p>25% off</p>
                        <h3>Save Rs.123</h3>
                        <img src="https://img.freepik.com/free-photo/delicious-peanut-butter-table_144627-12427.jpg?t=st=1713463598~exp=1713467198~hmac=189786a63755921bcf133b8b859d208c12b6bcc18406a158e41ae137313d0174&w=996" alt="" className="imagesofitems"/>
                    </div>
                    <div className="Items-card">
                        <p>25% off</p>
                        <h3>Save Rs.123</h3>
                        <img src="https://img.freepik.com/free-photo/delicious-peanut-butter-table_144627-12427.jpg?t=st=1713463598~exp=1713467198~hmac=189786a63755921bcf133b8b859d208c12b6bcc18406a158e41ae137313d0174&w=996" alt="" className="imagesofitems"/>
                    </div>
                    <div className="Items-card">
                        <p>25% off</p>
                        <h3>Save Rs.123</h3>
                        <img src="https://img.freepik.com/free-photo/delicious-peanut-butter-table_144627-12427.jpg?t=st=1713463598~exp=1713467198~hmac=189786a63755921bcf133b8b859d208c12b6bcc18406a158e41ae137313d0174&w=996" alt="" className="imagesofitems"/>
                    </div>
                    </div>
                </div>
                <h2>Order from any where and get the grocery to your door step</h2>
                <h4>30 Minutes delivery</h4>
                <button className="orderButton">Place Order</button>
            </div>
            </div>
        <div>
    </div>
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
  );
};

export default Instamart;