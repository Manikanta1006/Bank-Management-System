import React, { useEffect, useState } from 'react'
import "./Sidebar.css"
import { BsBank } from 'react-icons/bs'
import { MdSpaceDashboard } from 'react-icons/md'
import { Outlet, useNavigate } from 'react-router-dom'
import { RiLogoutBoxRFill } from 'react-icons/ri'
function Sidebar() {

     const [active, setActive] = useState("dashboard")
    const navigate = useNavigate()
      const handleClick = (e) => {
        setActive(e)
      }
      useEffect(()=>{
        navigate("/main/customer")
      },[])
    return (
        <div className='customer_outer'>
            <div className="sidebar_outer">
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
            </div>
 
             <Outlet/>
          </div>
    )
}

export default Sidebar
