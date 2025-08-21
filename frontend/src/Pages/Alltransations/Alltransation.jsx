import React, { useEffect } from 'react'
import "./Alltransations.css"
import { BsBank } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import { getaccbytransation } from '../../features/TrasationSlice/transationSlice';
import { gettingUserwithAccount } from '../../features/UserSlice/UserwithAccountSlice';




function Alltransation() {

const dispatch = useDispatch()

const {UserDetails} = useSelector((state)=>state.useraccount)

console.log(UserDetails?.accountDetails?._id,"uuuuuuuuuuu")

const x = useSelector((state)=>state)
console.log(x,"aatattattatatatataatata")
const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    if (user?.id) {
      dispatch(gettingUserwithAccount(user?.id));
    }
    dispatch(getaccbytransation(UserDetails?.accountDetails?._id))
   }, [user?.id,UserDetails?._id,dispatch]);



// useEffect(()=>{
// },[dispatch,UserDetails?._id])


  return (
    <div className='transation_outer'>

      <div className="filter_outer"></div>

      <div className="transation_card_outer">


      <div className="bank_card">
      <div className="card_header">
        <div className="logo_part">
          <BsBank className="bank_icon" />
          <h2>BMS</h2>
        </div>
        <p className="head_text">Transaction Statement</p>
      </div>

      <div className="card_rows">
        <div className="row">
          <span>Name</span>
          <span>Manikanta</span>
        </div>
        <div className="row">
          <span>A/C Number</span>
          <span>12345678905</span>
        </div>
        <div className="row">
          <span>Type</span>
          <span className="deposit">Deposit</span>
        </div>
        <div className="row">
          <span>Amount</span>
          <span>₹ 10,000</span>
        </div>
        <div className="row">
          <span>Date</span>
          <span>19-Aug-2024</span>
        </div>
      </div>

      <button className="down_btn">Download</button>
    </div>
      <div className="bank_card">
      <div className="card_header">
        <div className="logo_part">
          <BsBank className="bank_icon" />
          <h2>BMS</h2>
        </div>
        <p className="head_text">Transaction Statement</p>
      </div>

      <div className="card_rows">
        <div className="row">
          <span>Name</span>
          <span>Manikanta</span>
        </div>
        <div className="row">
          <span>A/C Number</span>
          <span>12345678905</span>
        </div>
        <div className="row">
          <span>Type</span>
          <span className="deposit">Deposit</span>
        </div>
        <div className="row">
          <span>Amount</span>
          <span>₹ 10,000</span>
        </div>
        <div className="row">
          <span>Date</span>
          <span>19-Aug-2024</span>
        </div>
      </div>

      <button className="down_btn">Download</button>
    </div>
      <div className="bank_card">
      <div className="card_header">
        <div className="logo_part">
          <BsBank className="bank_icon" />
          <h2>BMS</h2>
        </div>
        <p className="head_text">Transaction Statement</p>
      </div>

      <div className="card_rows">
        <div className="row">
          <span>Name</span>
          <span>Manikanta</span>
        </div>
        <div className="row">
          <span>A/C Number</span>
          <span>12345678905</span>
        </div>
        <div className="row">
          <span>Type</span>
          <span className="deposit">Deposit</span>
        </div>
        <div className="row">
          <span>Amount</span>
          <span>₹ 10,000</span>
        </div>
        <div className="row">
          <span>Date</span>
          <span>19-Aug-2024</span>
        </div>
      </div>

      <button className="down_btn">Download</button>
    </div>
      <div className="bank_card">
      <div className="card_header">
        <div className="logo_part">
          <BsBank className="bank_icon" />
          <h2>BMS</h2>
        </div>
        <p className="head_text">Transaction Statement</p>
      </div>

      <div className="card_rows">
        <div className="row">
          <span>Name</span>
          <span>Manikanta</span>
        </div>
        <div className="row">
          <span>A/C Number</span>
          <span>12345678905</span>
        </div>
        <div className="row">
          <span>Type</span>
          <span className="deposit">Deposit</span>
        </div>
        <div className="row">
          <span>Amount</span>
          <span>₹ 10,000</span>
        </div>
        <div className="row">
          <span>Date</span>
          <span>19-Aug-2024</span>
        </div>
      </div>

      <button className="down_btn">Download</button>
    </div>



      </div>
    </div>
  )
}

export default Alltransation
