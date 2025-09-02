import React, { useEffect, useState } from 'react'
import "./LoanCreation.css"
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { gettingUserwithAccount } from '../../features/UserSlice/UserwithAccountSlice';
import { loanCreation } from '../../features/LoanCreation/LoanCreation';

function LoanCreation() {

  const { UserDetails } = useSelector((state) => state.useraccount)
  const { user } = useSelector((state) => state.auth)

  console.log(UserDetails.accountDetails, "user account details")

  const [simple, SetSimple] = useState({
    amount: '',
    roi: '',
    time: ""

  })

  const [monthSI, setMonthSI] = useState(0)
  const [amount, setAmount] = useState(0)
  const [monthamount, setMonthamount] = useState(0)


  const dispatch = useDispatch()

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetSimple((prev) => ({
      ...prev, [name]: value
    }))
  }

  console.log(simple, "sssss")

  const HandleSI = () => {
    const p = simple.amount;
    const t = simple.time;
    const r = simple.roi
    const S = (p * t * r) / 100;
    const SI = S / (t * 12)
    console.log(SI, "SISISISI")
    setMonthSI(SI)

    const monthamount = p / (t * 12)
    console.log(monthamount, "mmmmmmmm")
    setAmount(monthamount)

    const total = (simple.amount / (simple.time * 12)) + SI
    setMonthamount(total)
  }

  const initialValues = {
    AccountNumber:UserDetails?.accountDetails?._id,
    Age:'',
    LoanType:'',
    LoanAmount:'',
    Roi:'',
    Tenure:''
  }

  const validationSchema = Yup.object({
    Age:Yup.number()
    .required("Please fill this field")
    // .min(21,"Age must be greater than 21")
    .transform((value,originalValue)=>
      String(originalValue).trim()=== "" ? undefined:Number(originalValue)
    )
    .min(21,"Age must be greater than 21")
  })

  const HandleSubmit = async (values)=>{
    console.log(values,"valuesvaluesvalues")
    try{

      const res = await dispatch(loanCreation(values))
      alert("submited")
    }
    catch(err){
      console.log(err,"loan creation error")
    }
    
  }

    useEffect(() => {
      if (user?.id) {
        dispatch(gettingUserwithAccount(user?.id));
      }
      
    }, [user?.id,dispatch]);


  return (
    <div className='loan_outer'>
      <h1 className="loan_creation">
        LOAN APPLICATION
      </h1>
      <div className="loan_creation_form_outer">


        <div className="loan_creation_left">
 

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
          onSubmit={HandleSubmit}
          >
            <Form>
              <div className="loan_form_outer_creation">
                <div className="loan_input_outer_apply">
                  <label htmlFor="" className="loan_label_apply">Account Number</label>
                  <Field type="text" className="loan_input" name='AccountNumber' value={UserDetails?.accountDetails?._id} />
                  <div className="error_msg_outer">
                    <ErrorMessage name="AccountNumber" component="div" className='error_msg' />
                  </div>
                </div>
                <div className="loan_input_outer_apply">
                  <label htmlFor="" className="loan_label_apply">Your age</label>
                  <Field type="number" className="loan_input" name='Age' />
                  <div className="error_msg_outer">
                    <ErrorMessage name="Age" component="div" className='error_msg' />
                  </div>
                </div>
                <div className="loan_input_outer_apply">
                  <label htmlFor="" className="loan_label_apply">Loan type</label>
                  <Field as="select" className="loan_input" name='LoanType' style={{width:"15.4vw"}}>
                    <option value="">Select type</option>
                    <option value="EducationLoan">Education loan</option>
                    <option value="HouseLoan">House loan</option>
                    <option value="GoldLoan">Gold loan</option>
                    </Field>
                  <div className="error_msg_outer">
                    <ErrorMessage name="LoanType" component="div" className='error_msg' />
                  </div>
                </div>
                <div className="loan_input_outer_apply">
                  <label htmlFor="" className="loan_label_apply">Loan amount</label>
                  <Field type="number" className="loan_input" name='LoanAmount'/>
                  <div className="error_msg_outer">
                    <ErrorMessage name="LoanAmount" component="div" className='error_msg' />
                  </div>
                </div>
                <div className="loan_input_outer_apply">
                  <label htmlFor="" className="loan_label_apply">Rate of intrest</label>
                  <Field type="number" className="loan_input" name='Roi'/>
                  <div className="error_msg_outer">
                    <ErrorMessage name="Roi" component="div" className='error_msg' />
                  </div>
                </div>
                <div className="loan_input_outer_apply">
                  <label htmlFor="" className="loan_label_apply">Tenure in years</label>
                  <Field type="number" className="loan_input" name='Tenure'/>
                  <div className="error_msg_outer">
                    <ErrorMessage name="Tenure" component="div" className='error_msg' />
                  </div>
                </div>
                {/* <div className="loan_input_outer_apply">
                  <label htmlFor="" className="loan_label_apply">Account Number</label>
                  <Field type="text" className="loan_input" name='AccountNumber'/>
                  <div className="error_msg_outer">
                    <ErrorMessage name="AccountNumber" component="div" className='error_msg' />
                  </div>
                </div>
                <div className="loan_input_outer_apply">
                  <label htmlFor="" className="loan_label_apply">Account Number</label>
                  <Field type="text" className="loan_input" name='AccountNumber'/>
                  <div className="error_msg_outer">
                    <ErrorMessage name="AccountNumber" component="div" className='error_msg' />
                  </div>
                </div> */}
                <div className="apply_loan_button">

                <button>Submit</button>
                </div>
              </div>
            </Form>

          </Formik>

        </div>
        <div className="loan_creation_right">
          <div className="calculator_outer">

            <div className="loan_form_outer">
              <div className="loan_input_outer">
                <label htmlFor="" className="loan_label">Enter your amount</label>
                <input type="number" className="loan_input" name='amount' onChange={handleChange} />
              </div>
              <div className="loan_input_outer">
                <label htmlFor="" className="loan_label">Rate of intrest</label>
                <input type="text" className="loan_input" name='roi' onChange={handleChange} value={simple.roi} />
              </div>
              <div className="loan_input_outer">
                <label htmlFor="" className="loan_label">Time</label>
                <input type="text" className="loan_input" name='time' placeholder='Time in years' onChange={handleChange} value={simple.time} />
              </div>
              <button type="button" onClick={HandleSI} className='loan_cal_btn'>Calculate</button>
              <div className="loan_heading_outer">

                <h1><b className="bold"  >Intrest :</b> {monthSI.toFixed(3)} / Month</h1>
                <h2><b className="bold">One installment :</b> {amount.toFixed(3)} /Month</h2>
                <h3><b className="bold">Total amount :</b> {monthamount.toFixed(3)} /Month</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoanCreation
