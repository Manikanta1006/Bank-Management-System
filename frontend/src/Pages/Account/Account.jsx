import React, { useEffect } from 'react'
import "./Account.css"
import person from "../../assets/register/5917.jpg"
import Greeting from '../../Components/greeting/greeting'
import { useDispatch, useSelector } from 'react-redux'
import { gettingUserwithAccount } from '../../features/UserSlice/UserwithAccountSlice'
import { getuserfiles } from '../../features/accountCreation/accountCreationSlice'

function Account() {

  const dispatch = useDispatch()

  const {UserDocs} = useSelector((state)=>state.account)
  
  const { UserDetails } = useSelector((state) => state.useraccount)
 
   console.log(UserDetails,"sasasasasaa")

  const local = localStorage.getItem('user')
  const data = local ? JSON.parse(local):null

  console.log(data,"lllll")
  useEffect(() => {
    if (data?.id) {
      dispatch(gettingUserwithAccount(data?.id));
    }
    dispatch(getuserfiles(data?.id))
  }, [data?.id,dispatch]);
  
 
  return (
    <div className='account_outer'>

      <h1 className='account_details_heading'>Account details</h1>

    {
      UserDetails?.accountDetails?.AccountApprove === false ?
      <>
      <h1 className='acc_not_approved_yet'>Account not upproved yet</h1>
      </> 
      :
      
      <>
      {
        UserDetails?.accountDetails?.AccountApprove === true ?
        <>
            <div className="account_details_layer1">
        <div className="layer1_left">
          <div className="user_img_outer">
            <img src={`http://localhost:3004/uploads/${UserDocs.photo}`} alt="person" className="user" />
          </div>
          <div className="user_details">
            <h5 className="person_name"><span className='name_sub'>Name :</span> {UserDetails?.UserName}</h5>
            {/* <p className="account_type"><span className='account_type_sub'>Account number:</span>{UserDetails?._id}</p> */}
            <div className="account_type_outer">
              <h6 className="account_type_heading">
                Account number:
              </h6>
            <p className="account_type">
              {UserDetails?.accountDetails?._id}
            </p>
            </div>
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
                <h6 className="info_heading_layer2">Gender</h6>
                <p className="info_information">{UserDetails?.accountDetails?.Gender}</p>
              </div>

              <div className="info">
                <h6 className="info_heading_layer2">Date of birth</h6>
                <p className="info_information">{UserDetails?.accountDetails?.DOB}</p>
              </div>


              <div className="info">
                <h6 className="info_heading_layer2">Phone number</h6>
                <p className="info_information">{UserDetails?.accountDetails?.MobileNumber}</p>
              </div>
              <div className="info">
                <h6 className="info_heading_layer2">PAN card number</h6>
                <p className="info_information">{UserDetails?.accountDetails?.PANNumber}</p>
              </div>
              <div className="info">
                <h6 className="info_heading_layer2">Nationality</h6>
                <p className="info_information">{UserDetails?.accountDetails?.Nationality}</p>
              </div>
              {/* <div className="info">
                <h6 className="info_heading_layer2">Phone number</h6>
                <p className="info_information">9638520741</p>
              </div> */}

            </div>


          </div>
          <div className="main_layer2_right_outer">

            <div className="main_layer2_div1">
              <div className="layer2_top_heading_outer_right">
                <h5 className="personal_info_heading_layer2_right">Account info</h5>
              </div>

              <div className="personal_info_layer2_right">
                <div className="info_right">
                  <h6 className="info_heading_layer2_right">Account type</h6>
                  <p className="info_information_right">{UserDetails?.accountDetails?.AccountType}</p>
                </div>
                {/* <div className="info_right">
                  <h6 className="info_heading_layer2_right">Initial diposit</h6>
                  <p className="info_information_right">{UserDetails?.accountDetails?.[0]?.InitialDiposit}</p>
                </div> */}
                <div className="info_right">
                  <h6 className="info_heading_layer2_right">Nominee Name</h6>
                  <p className="info_information_right">{UserDetails?.accountDetails?.NomineeName}</p>
                </div>
                <div className="info_right">
                  <h6 className="info_heading_layer2_right">Nominee relation</h6>
                  <p className="info_information_right">{UserDetails?.accountDetails?.NomineeRelation}</p>
                </div>


              </div>


            </div>
            <div className="main_layer2_div1">
              <div className="layer2_top_heading_outer_right">
                <h5 className="personal_info_heading_layer2_right">Adress</h5>
              </div>

              <div className="personal_info_layer2_right">
                <div className="info_right">
                  <h6 className="info_heading_layer2_right">Village or City Name</h6>
                  <p className="info_information_right">{UserDetails?.accountDetails?.City_or_Village}</p>
                </div>
                <div className="info_right">
                  <h6 className="info_heading_layer2_right">District name</h6>
                  <p className="info_information_right">{UserDetails?.accountDetails?.District}</p>
                </div>
                <div className="info_right">
                  <h6 className="info_heading_layer2_right">State name</h6>
                  <p className="info_information_right">{UserDetails?.accountDetails?.State}</p>
                </div>

                <div className="info_right">
                  <h6 className="info_heading_layer2_right">PIN code</h6>
                  <p className="info_information_right">{UserDetails?.accountDetails?.PINCode}</p>
                </div>
              </div>


            </div>
          </div>
        </div>

      </div>

      <div className="docs_outer">
        <h1 className="user_docs_heading">Your documents</h1>

        <div className="user_docs_outer">

        <div className="each_docs">
          <img src={`http://localhost:3004/uploads/${UserDocs.adharCard}`} alt="adharCard" className="user_docs" />
        </div>
        <div className="each_docs">
           <img src={`http://localhost:3004/uploads/${UserDocs.panCard}`} alt="PANcard" className="user_docs" />
   
        </div>
         </div>
      </div>
      
      </>
        :

        <>
        <div className="acc_navigate_to_create_acc_outer">
         <h1 className='acc_navigate_heading'>Create account</h1>

        </div>
        </>

      }
      </>
    }
    
    </div>
  )
}

export default Account
