import React, { useState } from 'react'
import { BsBank } from 'react-icons/bs'
import { MdOutlineAccountBalanceWallet, MdOutlineMiscellaneousServices, MdSpaceDashboard } from 'react-icons/md'
import { Outlet, useNavigate } from 'react-router-dom'
import { RiLogoutBoxRFill } from 'react-icons/ri'
import { TbHelpHexagonFilled, TbHelpOctagonFilled, TbTransform } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";
import { BiSolidHelpCircle } from "react-icons/bi";

import "./ManagerSidebar.css"
import { logout } from '../../features/authSlice/authSlice'
import { useDispatch } from 'react-redux'
function ManagerSidebar() {

    const [active, setActive] = useState("dashboard")
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const handleClick = (e) => {
        setActive(e)
        if (e === "dashboard") {
            navigate("/manager/dashboard")
        }
        else if (e === "Customers") {
            navigate("/manager/customers")
        }
        // else if (e === "transations") {
        //     navigate("/main/transations")
        // }
    }

    const HandleLogout =()=>{
        dispatch(logout())
    }
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

                    <div className={`list_item ${active === "Customers" ? "active" : ""}`} onClick={() => handleClick("Customers")}>
                        <MdOutlineAccountBalanceWallet className='icon' />
                        <p className="list">Customers</p>
                    </div>

                    <div className={`list_item ${active === "transations" ? "active" : ""}`} onClick={() => handleClick("transations")} >
                        <TbTransform className='icon' />
                        <p className="list">Activities</p>
                    </div>
                    <div className={`list_item ${active === "loan" ? "active" : ""}`} onClick={() => handleClick("loan")} >
                        <GiReceiveMoney className='icon' />
                        <p className="list">Loans</p>
                    </div>
                    <div className={`list_item ${active === "service" ? "active" : ""}`} onClick={() => handleClick("service")}>
                        <MdOutlineMiscellaneousServices className='icon' />
                        <p className="list">Service</p>
                    </div>


                    <div className={`list_item ${active === "Help" ? "active" : ""}`} onClick={() => handleClick("Help")}>
                        <TbHelpHexagonFilled className='icon' />
                        <p className="list">Help</p>
                    </div>

                </div>
                <div className="logout_outer">
                    <button className='logout' onClick={HandleLogout}>Logout <RiLogoutBoxRFill className='logout_icon' /></button>
                </div>
            </div>

            <Outlet />
        </div>
    )
}

export default ManagerSidebar
