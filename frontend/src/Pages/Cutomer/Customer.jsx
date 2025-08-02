import React, { useState } from 'react'
import "./Customer.css"
import { BsBank } from 'react-icons/bs'
import { MdAddCircleOutline, MdLocationOn, MdOutlineSavings, MdSpaceDashboard } from "react-icons/md";
import { RiLogoutBoxRFill, RiMoneyRupeeCircleLine } from "react-icons/ri";
import { PiHandWavingDuotone, PiMagnifyingGlassBold } from "react-icons/pi";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts';
import { FaRupeeSign } from "react-icons/fa";
import chip from "../../assets/UserDashboard/chip2.jpg"
import greet1 from "../../assets/UserDashboard/greet1.png"
import greet2 from "../../assets/UserDashboard/bsw.png"
import { FaHandHoldingDollar, FaLocationDot, FaSackDollar } from "react-icons/fa6";
import { LuArrowLeftRight } from "react-icons/lu";
import { HiUserCircle } from "react-icons/hi2";
import { SiFuturelearn } from "react-icons/si";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const data = [
  { date: '2025-07-25', amount: 1000 },
  { date: '2025-07-26', amount: 2000 },
  { date: '2025-07-27', amount: 1500 },
];

 

function Customer() {
  const data = [
    { week: 'Week 1', amount: 5500 },
    { week: 'Week 2', amount: 3200 },
    { week: 'Week 3', amount: 7600 },
    { week: 'Week 4', amount: 2100 },
  ];
  const [active, setActive] = useState("dashboard")

  const handleClick = (e) => {
    setActive(e)
  }
  return (
    <div className="customer_outer">


      {/* <div className="sidebar_outer">
        <div className="logo_outer">
          <h2 className="logo"><BsBank className='logo_icon' />BMS</h2>
        </div>
        <div className="list_items_outer" >

          <div className={`list_item ${active === "dashboard" ? "active" : ""}`} onClick={() => handleClick("dashboard")}>
            <MdSpaceDashboard className='icon' />
            <p className="list">Dashboard</p>
          </div>

          <div className={`list_item ${active === "Account" ? "active" : ""}`} onClick={() => handleClick("Account")}>
            <MdSpaceDashboard className='icon' />
            <p className="list">Account</p>
          </div>

          <div className={`list_item ${active === "transations" ? "active" : ""}`} onClick={() => handleClick("transations")} >
            <MdSpaceDashboard className='icon' />
            <p className="list">Transactions</p>
          </div>
          <div className={`list_item ${active === "loan" ? "active" : ""}`} onClick={() => handleClick("loan")} >
            <MdSpaceDashboard className='icon' />
            <p className="list">Loan</p>
          </div>
          <div className={`list_item ${active === "service" ? "active" : ""}`} onClick={() => handleClick("service")}>
            <MdSpaceDashboard className='icon' />
            <p className="list">Service</p>
          </div>


          <div className={`list_item ${active === "Help" ? "active" : ""}`} onClick={() => handleClick("Help")}>
            <MdSpaceDashboard className='icon' />
            <p className="list">Help</p>
          </div>

        </div>
        <div className="logout_outer">
          <button className='logout'>Logout <RiLogoutBoxRFill className='logout_icon' /></button>
        </div>
      </div> */}


      <div className="right_outlet_outer">

        <div className="user_info_outer">

          <div className="user_info_left">
            <h1 className="dash_board">
              Dashboard
            </h1>
            <div className="user_hello_outer">
              <p className="welcome">Welcome</p>
              <p className="username">Manikanta</p>
              <PiHandWavingDuotone className='hello_icon' />

            </div>

          </div>
          <div className="serch_bar_outer">
            <input type="text" className="serch" placeholder='Serch here...' />
            <div className="serch_icon_outer">
              <PiMagnifyingGlassBold className='serch_icon' />

            </div>
          </div>

          <div className="user_info_right">
            <div className="right_logo">
              <HiUserCircle className='user_icon' />

            </div>
          </div>
        </div>


        <div className="greeting_outer">

          <div className="credit_card_style">
            <img src={chip} alt="" className="card_chip" />
            <div className="card_title">Bank of BMS</div>
            <div className="card_balance">
              <span>Available Balance</span>
              <h2><FaRupeeSign /> 45,600.00</h2>
            </div>
            <div className="card_footer">
              <p>Account Holder</p>
              <h4>Manikanta</h4>
              <div>

              </div>
            </div>
          </div>

          <div className="greet">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000 }}
              loop
              className='swiper'
            >
              <SwiperSlide>
                <div className="greeting">
                  <div className="greet_left">
                    <h1 className="hello_user">Hello!</h1>
                    <p className="greet_text1">Need a quick loan?</p>
                    <p className="greet_text2">Tap here to explore personalized loans.</p>
                    <button className="quick_button">Click here</button>
                  </div>
                  <div className="greet_right">
                    <img src={greet2} alt="Loan Illustration" className="greet1" />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="greeting">
                  <div className="greet_left">
                    <h1 className="hello_user">Welcome Back!</h1>
                    <p className="greet_text1">Good to see you again.</p>
                    <p className="greet_text2">Let's manage your money smartly.</p>
                    <button className="quick_button">View Now</button>
                  </div>
                  <div className="greet_right">
                    <img src={greet1} alt="Transactions" className="greet1" />
                  </div>
                </div>
              </SwiperSlide>

            </Swiper>
          </div>


        </div>


        <div className="user_info_layer2">

          <div className="layer2_left">

            <div className="layer2_info">
              <div className="layer2_info_left">
                <MdAddCircleOutline className='account_icon' />
              </div>
              <div className="layer2_info_right">
                <h2>Create Account</h2>
              </div>
            </div>

            <div className="layer2_info">
              <div className="layer2_info_left">
                <FaHandHoldingDollar className="account_icon" />

              </div>
              <div className="layer2_info_right">
                <h2>Apply for Loan</h2>
              </div>
            </div>
            <div className="layer2_info">
              <div className="layer2_info_left">
                <LuArrowLeftRight className="account_icon" />

              </div>
              <div className="layer2_info_right">
                <h2>Transactions</h2>
              </div>
            </div>

          </div>
          <div className="layer2_left">
            <div className="layer2_info">

              <div className="layer2_info_left">
                <MdOutlineSavings className="account_icon" />

              </div>
              <div className="layer2_info_right">
                <h2>Savings Suggestions</h2>
              </div>
            </div>
            <div className="layer2_info">
              <div className="layer2_info_left">
                <MdLocationOn className='account_icon' />
              </div>
              <div className="layer2_info_right">
                <h2>ATM finder</h2>
              </div>
            </div>

            <div className="layer2_info">
              <div className="layer2_info_left">
                <SiFuturelearn className="account_icon" />

              </div>
              <div className="layer2_info_right">
                <h2>Learn Banking</h2>
              </div>
            </div>


          </div>

          <div className="layer2_right">
            <h1 className="chart_heading">This month trasations</h1>
            <LineChart width={400} height={240} data={data} className='chart'>
              <CartesianGrid strokeDasharray="3 3" stroke='none' />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="amount" stroke="red" strokeWidth={3} activeDot={{ r: 6 }} />
            </LineChart>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Customer
