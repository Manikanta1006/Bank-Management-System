import React, { useEffect, useState } from 'react'
import "./ManagerDashBoard.css"
import { HiDocumentCurrencyRupee, HiUserCircle } from 'react-icons/hi2'
import { PiBankFill, PiHandWavingDuotone, PiHandWithdrawFill, PiMagnifyingGlassBold } from 'react-icons/pi'
import { useDispatch, useSelector } from 'react-redux'
import { register } from 'swiper/element'
import { Navigate, useNavigate } from 'react-router-dom'
import { MdManageAccounts, MdSettingsSuggest } from "react-icons/md";
import { AiFillBank } from "react-icons/ai";
import { BiSolidBank } from "react-icons/bi";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { accountsAndLoans, dashboard, GetAllAccounts } from '../../features/ManagerDashboard/MdSlice'

function ManagerDashBoard() {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A020F0"];

  // const loanData = [
  //   { name: "Home Loan", value: 40 },
  //   { name: "Personal Loan", value: 25 },
  //   { name: "Education Loan", value: 15 },
  //   { name: "Car Loan", value: 10 },
  //   { name: "Gold Loan", value: 10 },
  // ];

  const monthlyData = [
    { month: "Jan", accounts: 120, loans: 80 },
    { month: "Feb", accounts: 150, loans: 95 },
    { month: "Mar", accounts: 100, loans: 60 },
    { month: "Apr", accounts: 180, loans: 110 },
    { month: "May", accounts: 130, loans: 70 },
    { month: "Jun", accounts: 160, loans: 90 },
  ];


  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state?.auth)
  console.log(user, "uuuuuuuuu")

  const [active, setActive] = useState('')

  useEffect(() => {
    dispatch(dashboard())
    dispatch(accountsAndLoans())
    dispatch(GetAllAccounts())
  }, [dispatch])

  const { Mdashbord } = useSelector((state) => state.ManagerDashboard)

  console.log(Mdashbord,"mmmm")
  const {Bargraph} = useSelector((state) => state.ManagerDashboard)
 
  const lastSixMonths = Bargraph.slice(-6)
  const localdata = localStorage.getItem('user')

  useEffect(() => {
    const data = localdata ? JSON.parse(localdata) : null
    console.log(data, "dtdtdttt")

    if (data?.UserType === "Coustomer") {
      navigate("/main/customer")
    }
    else if (data?.UserType === "Manager") {
      navigate("/manager/dashboard")
    }
    // else if(data?.UserType==="Admin"){
    //   navigate("/manager/Dashboard")
    // }
    else {
      navigate("/")
    }

  }, [localdata, navigate])

  const HandleDeposite =()=>{
    navigate("/manager/deposite")
  }

  const handleApprove = ()=>{
    navigate("/manager/accountapproves")
  }
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

      <div className="manager_main_outer">
        <div className="manger_layer1_outer">
          <div className="manger_layer1" onClick={HandleDeposite}>
            <HiDocumentCurrencyRupee class='layer1_icons' />
            <p className="manager_layer_icon_title">
              Transations
            </p>
          </div>
          <div className="manger_layer2" onClick={handleApprove}>
            <MdManageAccounts class='layer1_icons' />
            <p className="manager_layer_icon_title" >
              Account approves
            </p>
          </div>
          <div className="manger_layer3">
            <PiHandWithdrawFill class='layer1_icons' />
            <p className="manager_layer_icon_title">
              Loan approves
            </p>
          </div>
          <div className="manger_layer4">
            <PiBankFill class='layer1_icons' />
            <p className="manager_layer_icon_title">
              Bank details
            </p>
          </div>
        </div>


      </div>
      <div className="manager_main2_outer">
        <div className="manager_main2">


          <div className="manager_main2_left">
            <div className="chart-card">
              <h2 className="chart-title">Loan Distribution by Category</h2>
              <ResponsiveContainer width="100%" height={245}>
                <PieChart>
                  <Pie
                    data={Mdashbord}
                    cx="50%"
                    cy="50%"
                    outerRadius={96}
                    fill="#8884d8"
                    dataKey="count"
                    nameKey="LoanType"
                  // label
                  >
                    {Mdashbord?.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>

          </div>

          <div className="manager_main2_right">
            <div className="chart-card">
              <h2 className="chart-title">
                Monthly Account Openings & Loans Issued
              </h2>
              <ResponsiveContainer width="100%" height={245}>
                <BarChart data={monthlyData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <CartesianGrid stroke="none" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="accounts" fill="#7c619d" name="Accounts Opened" />
                  <Bar dataKey="loans" fill="#49a7c0" name="Loans Issued" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>


        </div>
      </div>

    </div>
  )
}

export default ManagerDashBoard
