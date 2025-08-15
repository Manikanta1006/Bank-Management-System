import React, { useEffect } from 'react'
import "./Account.css"
import person from "../../assets/register/5917.jpg"
import Greeting from '../../Components/greeting/greeting'
import { useDispatch, useSelector } from 'react-redux'
import { gettingUserwithAccount } from '../../features/UserSlice/UserwithAccountSlice'
function Account() {

  const dispatch = useDispatch()

  const {user} = useSelector((state)=>state.auth)
  console.log(user,"dddddddddddd")

  const x = useSelector((state)=>state)
  console.log(x,"xxxxxxxx")


useEffect(() => {
  if (user?.id) {
    dispatch(gettingUserwithAccount(user.id));
  }
}, [dispatch]);
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
        <div className="center_border"></div>
        <div className="layer2_right">
          <div className="quick_access_cards"> <h6 className="quick_heading">Show transations</h6> </div>
          <div className="quick_access_cards"><h6 className="quick_heading">Apply for loan</h6> </div>
          <div className="quick_access_cards"> <h6 className="quick_heading">Suggestions</h6> </div>
        </div>

      </div>
      <div className="main_layer2_outer">
        <div className="account_details_layer2">


          <div className="main_layer2_left">
            <div className="layer2_top_heading_outer">
              <h5 className="personal_info_heading_layer2">Personal info</h5>
            </div>

            <div className="personal_info_layer2">
              <div className="info">
                <h6 className="info_heading_layer2">Phone number</h6>
                <p className="info_information">9638520741</p>
              </div>

              <div className="info">
                <h6 className="info_heading_layer2">Phone number</h6>
                <p className="info_information">9638520741</p>
              </div>


              <div className="info">
                <h6 className="info_heading_layer2">Phone number</h6>
                <p className="info_information">9638520741</p>
              </div>
              <div className="info">
                <h6 className="info_heading_layer2">Phone number</h6>
                <p className="info_information">9638520741</p>
              </div>
              <div className="info">
                <h6 className="info_heading_layer2">Phone number</h6>
                <p className="info_information">9638520741</p>
              </div>
              <div className="info">
                <h6 className="info_heading_layer2">Phone number</h6>
                <p className="info_information">9638520741</p>
              </div>

            </div>


          </div>
          <div className="main_layer2_right_outer">

            <div className="main_layer2_div1">
              <div className="layer2_top_heading_outer_right">
                <h5 className="personal_info_heading_layer2_right">Account info</h5>
              </div>

              <div className="personal_info_layer2_right">
                <div className="info_right">
                  <h6 className="info_heading_layer2_right">Phone number</h6>
                  <p className="info_information_right">9638520741</p>
                </div>
                <div className="info_right">
                  <h6 className="info_heading_layer2_right">Phone number</h6>
                  <p className="info_information_right">9638520741</p>
                </div>
                <div className="info_right">
                  <h6 className="info_heading_layer2_right">Phone number</h6>
                  <p className="info_information_right">9638520741</p>
                </div>


              </div>


            </div>
            <div className="main_layer2_div1">
              <div className="layer2_top_heading_outer_right">
                <h5 className="personal_info_heading_layer2_right">Adress</h5>
              </div>

              <div className="personal_info_layer2_right">
                <div className="info_right">
                  <h6 className="info_heading_layer2_right">Phone number</h6>
                  <p className="info_information_right">9638520741</p>
                </div>
                <div className="info_right">
                  <h6 className="info_heading_layer2_right">Phone number</h6>
                  <p className="info_information_right">9638520741</p>
                </div>
                <div className="info_right">
                  <h6 className="info_heading_layer2_right">Phone number</h6>
                  <p className="info_information_right">9638520741</p>
                </div>

                <div className="info_right">
                  <h6 className="info_heading_layer2_right">Phone number</h6>
                  <p className="info_information_right">9638520741</p>
                </div>
              </div>


            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Account
