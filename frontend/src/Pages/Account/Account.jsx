import React from 'react'
import "./Account.css"
import person from "../../assets/register/5917.jpg"
function Account() {
  return (
    <div className='account_outer'>
        <h1 className='account_details_heading'>Account details</h1>
        <div className="account_details_layer1">
          <div className="layer1_left">
            <div className="user_img_outer">
              <img src={person} alt="person" className="user" />
            </div>
            <div className="user_details">
            <h5 className="person_name"><span className='name_sub'>Name :</span> Manikanta</h5>
            <p className="account_type"><span className='account_type_sub'>Account type :</span> Savings</p>
            </div>
          </div>
          <div className="layer2_right">

          </div>
          
        </div>
     </div>
  )
}

export default Account
