import React, { useEffect } from 'react'
import "./ManagerDashBoard.css"
import { HiUserCircle } from 'react-icons/hi2'
import { PiHandWavingDuotone, PiMagnifyingGlassBold } from 'react-icons/pi'
import { useDispatch, useSelector } from 'react-redux'
import { register } from 'swiper/element'

function ManagerDashBoard() {

  const { user } = useSelector((state) => state?.auth)
  console.log(user, "uuuuuuuuu")


  const localdata = localStorage.getItem('user')

  const data = localdata ? JSON.parse(localdata) : null
  console.log(data, "ddddd")



  return (
    <div className='manager_outer'>
      <div className="user_info_outer">
        <div className="user_info_left">
          <h1 className="dash_board">
            Manager Dashboard
          </h1>
          <div className="user_hello_outer">
            <p className="welcome">Welcome</p>
            <p className="username">{user?.UserName}</p>
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

    
    </div>
  )
}

export default ManagerDashBoard
