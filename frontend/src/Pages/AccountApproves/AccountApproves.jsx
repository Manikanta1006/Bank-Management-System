import React, { useEffect } from 'react'
import "./AccountApproves.css"
import { useDispatch, useSelector } from 'react-redux'
import { GetAllAccounts } from '../../features/ManagerDashboard/MdSlice'

function AccountApproves() {


  const {Allaccounts} = useSelector((state)=>state.ManagerDashboard)
 
  const FilterdAcc = Allaccounts.filter((data)=>{
    return data.AccountApprove === false
  })
  console.log(FilterdAcc,"fafaaafa")
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(GetAllAccounts())
  },[dispatch])

  return (
    <div className='acc_app_outer'>
      <h1 className='acc_app_heading'>Account Approves</h1>
      <div className="acc_app_layer1_outer">
      {
        FilterdAcc.map((data)=>(
            <div className="acc_app_card">
          <div className="acc_app_top">
           <h6 className="acc_app_top_name">Holder name</h6>
            <h6 className="acc_app_top_name">
             {new Intl.DateTimeFormat("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  }).format(new Date(data?.createdAt))}
            </h6>
          </div>
          <div className="acc_app_card_main">
               <div className="acc_app_card_left">
              <h2 className="acc_app_name">{data.FullName}</h2>
          </div>
          <div className="acc_app_card_right">
            <div className="acc_status">
              Pending
            </div>
            <button className='acc_app_approve'>Approve</button>
            {/* <button className='acc_app_declain'>Declain</button> */}
          </div>
          </div>
           
        </div>
        ))
      }
    
      </div>
    </div>
  )
}

export default AccountApproves
