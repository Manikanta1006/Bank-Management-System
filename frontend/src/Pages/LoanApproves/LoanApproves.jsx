import React from 'react'
import "./LoanApproves.css"
function LoanApproves() {
  return (
    <div className='loan_approves_outer'>
      <h1 className="loan_approve_heading">
        Loans Approve
        </h1>
        <div className="loan_approve_card_outer">
          <div className="acc_app_card_loan">
            <div className="acc_app_top_loan">
              <h6 className="acc_app_top_name_loan">Holder name</h6>
              <h6 className="acc_app_top_name_loan">
                {/* {new Intl.DateTimeFormat("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  }).format(new Date(data?.createdAt))} */}
                5/25
              </h6>
            </div>
            <div className="acc_app_card_main_loan">
              <div className="acc_app_card_left_loan">
                <h2 className="acc_app_name_loan">hiii</h2>
              </div>
              <div className="acc_app_card_right_loan">
                <div className="acc_status_loan">
                  Pending
                </div>
                <button className='acc_app_approve_loan'  >Approve</button>
                {/* <button className='acc_app_declain'>Declain</button> */}
              </div>
            </div>

          </div>
        </div>
      
    </div>
  )
}

export default LoanApproves
