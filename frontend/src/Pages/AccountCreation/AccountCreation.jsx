import React, { useState } from 'react'
import "./AccountCreation.css"
import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik'
import adhar from "../../assets/UserDashboard/adhar.png"
import pan from "../../assets/UserDashboard/pan.jpg"
import { ImUser } from "react-icons/im";
import { FaUser } from "react-icons/fa6";
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addDocs, createAccount } from '../../features/accountCreation/accountCreationSlice'
import { toast } from 'react-toastify'

function AccountCreation() {


  const { user } = useSelector((state) => state.auth)

  // console.log(user.id, "acacacac")
  
  const localdata = localStorage.getItem('user')
  const userdata = localdata ? JSON.parse(localdata) : null


  const dispatch = useDispatch()
  const validationSchema = Yup.object({
    FullName: Yup.string()
      .min(3, 'Name is too Short')
      .max(50, "Name is too Long")
      .required('This field is reqired'),
    DOB: Yup.string()
      .required("This field is required"),
    Gender: Yup.string()
      .required("Please select your gender"),
    MobileNumber: Yup.string()
      .required("This field is required")
      .min(10, "Mobile number must be 10 digits")
      .max(12, "Mobile number must be max 12 digits only")
    ,

    AdharNumber: Yup.string()
      .required("This field is required")
      .max(12, "Aadhaar number must be exactly 12 digits"),
    PANNumber: Yup.string()
      .required("This field is required"),
    Nationality: Yup.string()
      .required("Please enter your nationality"),
    City_or_Village: Yup.string()
      .required("This field is required"),
    District: Yup.string()
      .required("This field is required"),
    State: Yup.string()
      .required("This field is required"),
    PINCode: Yup.string()
      .required("This field is required"),
    Country: Yup.string()
      .required("This field is required"),
    AccountType: Yup.string()
      .required("This field is required"),
    InitialDiposit: Yup.string()
      .required("Please enter your initial amount to deposit"),
    NomineeName: Yup.string()
      .required("This field is required"),
    NomineeRelation: Yup.string()
      .required("This field is required"),
    // adharCard: Yup.string()
    //   .required("Upload your adharcard"),
    // panCard: Yup.string()
    //   .required("Upload your pancard"),
    // photo: Yup.string()
    //   .required("Upload your photo")
  })



  const initialValues = {
    FullName: '',
    DOB: '',
    Gender: '',
    MobileNumber: '',
    AdharNumber: '',
    PANNumber: '',
    Nationality: '',
    City_or_Village: '',
    City: '',
    State: '',
    PINCode: '',
    Country: '',
    AccountType: '',
    InitialDiposit: '',
    NomineeName: '',
    NomineeRelation: '',
    userId: userdata?.id,
    AccountApprove:false
  }

  const [files, setFiles] = useState({
    adharCard: null,
    panCard: null,
    photo: null,
    UserId: userdata?.id
  });



  const handleFileChange = (e) => {
    const { name, files: selectedFiles } = e.target;
    setFiles((prev) => ({
      ...prev,
      [name]: selectedFiles[0],
    }));
  };

  const handleSubmit = async (values, { resetForm }) => {
    console.log(values, "vvvvvvvvvvv")
    try {

      const res = await dispatch(createAccount(values))
      await dispatch(addDocs(files))
      toast.success("Account created successfully!");
      resetForm()
    }
    catch (err) {
      toast.error("Account creation failed!");
      console.log("form submition error")
    }

  }


  return (
    <div className='acc_creation_outer'>
      <h1 className="personal_info_heading">Personal information</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="formik_form_outer">
            <div className="personal_info">
              <div className="ac_input_outer">
                <label htmlFor="" className="label" >Full Name</label>
                <Field name='FullName' type="text" className="input" placeholder='Enter your full name' />
                <div className="error_msg_outer">
                  <ErrorMessage name="FullName" component="div" className='error_msg' />
                </div>
              </div>
              <div className="ac_input_outer">
                <label htmlFor="" className="label">Date fo birth</label>
                <Field type='date' className="input" name='DOB' placeholder='Enter your Dob' />

                <div className="error_msg_outer">
                  <ErrorMessage name="DOB" component="div" className='error_msg' />
                </div>
              </div>

              <div className="ac_input_outer">

                <label htmlFor="" className="label">Gender</label>
                <Field as="select" name="Gender" id="" className='select' >
                  <option value="" className='acc_options'>Select Gender</option>
                  <option value="Male" className='acc_options'>Male</option>
                  <option value="Female" className='acc_options'>Female</option>
                  <option value="Other" className='acc_options'>Other</option>
                </Field>
                <div className="error_msg_outer">
                  <ErrorMessage name="Gender" component="div" className='error_msg' />
                </div>
              </div>

              <div className="ac_input_outer">
                <label htmlFor="" className="label">Mobile Number</label>
                <Field type="number" className="input" name='MobileNumber' placeholder='Enter your mobile number' />
                <div className="error_msg_outer">
                  <ErrorMessage name="MobileNumber" component="div" className='error_msg' />
                </div>
              </div>
              <div className="ac_input_outer">
                <label htmlFor="" className="label">Adhar Number</label>
                <Field type="number" className="input" name='AdharNumber' placeholder='Enter your adhar number' />
                <div className="error_msg_outer">
                  <ErrorMessage name="AdharNumber" component="div" className='error_msg' />
                </div>
              </div>

              <div className="ac_input_outer">
                <label htmlFor="" className="label">PAN Card Number</label>
                <Field type="text" className="input" name='PANNumber' placeholder='Enter your pan card number' />
                <div className="error_msg_outer">
                  <ErrorMessage name="PANNumber" component="div" className='error_msg' />
                </div>
              </div>
              <div className="ac_input_outer">
                <label htmlFor="" className="label">Nationality</label>
                <Field type="text" className="input" name='Nationality' placeholder='Enter your nationality' />
                <div className="error_msg_outer">
                  <ErrorMessage name="Nationality" component="div" className='error_msg' />
                </div>
              </div>

            </div>
            <div className="Adress_details_outer">
              <h1 className="adress_heading">
                Adress Details
              </h1>
              <div className="adress_details2">

                <div className="ac_input_outer">
                  <label htmlFor="" className="label">Adress </label>
                  <Field type="text" className="input" name='City_or_Village' placeholder='Enter your adress' />
                  <div className="error_msg_outer">
                    <ErrorMessage name="City_or_Village" component="div" className='error_msg' />
                  </div>
                </div>
                <div className="ac_input_outer">
                  <label htmlFor="" className="label">District</label>
                  <Field type="text" className="input" name='District' placeholder='Enter your city name' />
                  <div className="error_msg_outer">
                    <ErrorMessage name="District" component="div" className='error_msg' />
                  </div>
                </div>
                <div className="ac_input_outer">
                  <label htmlFor="" className="label">State</label>
                  <Field type="text" className="input" name='State' placeholder='Enter your state' />
                  <div className="error_msg_outer">
                    <ErrorMessage name="State" component="div" className='error_msg' />
                  </div>
                </div>
                <div className="ac_input_outer">
                  <label htmlFor="" className="label">PIN Code</label>
                  <Field type="text" className="input" name='PINCode' placeholder='Enter your PIN Code' />
                  <div className="error_msg_outer">
                    <ErrorMessage name="PINCode" component="div" className='error_msg' />
                  </div>
                </div>
                <div className="ac_input_outer">
                  <label htmlFor="" className="label">Country</label>
                  <Field type="text" className="input" name='Country' placeholder='Enter your Country name' />
                  <div className="error_msg_outer">
                    <ErrorMessage name="Country" component="div" className='error_msg' />
                  </div>
                </div>
              </div>
            </div>

            <div className="Bank_detals_outer">
              <h1 className="adress_heading">
                Account Details
              </h1>
              <div className="adress_details2">

                <div className="ac_input_outer">
                  <label htmlFor="" className="label">Select account type</label>
                  <Field as="select" name="AccountType" id="" className='select'>
                    <option value="" className='acc_options'>Select AccountType</option>
                    <option value="Savings" className='acc_options'>Savings</option>
                    <option value="Current" className='acc_options'>Current</option>
                    <option value="Salary" className='acc_options'>Salary</option>
                  </Field>
                  <div className="error_msg_outer">
                    <ErrorMessage name="AccountType" component="div" className='error_msg' />
                  </div>
                </div>

                <div className="ac_input_outer">
                  <label htmlFor="" className="label">Initial deposit amount</label>
                  <Field type="text" className="input" name='InitialDiposit' placeholder='Enter amount' />
                  <div className="error_msg_outer">
                    <ErrorMessage name="InitialDiposit" component="div" className='error_msg' />
                  </div>
                </div>
                <div className="ac_input_outer">
                  <label htmlFor="" className="label">Nominee Name</label>
                  <Field type="text" className="input" name='NomineeName' placeholder='Enter nominee name' />
                  <div className="error_msg_outer">
                    <ErrorMessage name="NomineeName" component="div" className='error_msg' />
                  </div>
                </div>
                <div className="ac_input_outer">
                  <label htmlFor="" className="label">Nominee relation</label>
                  <Field type="text" className="input" name='NomineeRelation' placeholder='Relation' />
                  <div className="error_msg_outer">
                    <ErrorMessage name="NomineeRelation" component="div" className='error_msg' />
                  </div>
                </div>
              </div>
            </div>
            <div className="upload_files_outer">
              <h1 className="upload_files_heading">
                Upload documents
              </h1>
              <div className="upload_cards_wrapper">

                <div className="upload_card">
                  <img src={adhar} alt="adhar" className="upload_img" />
                  <label htmlFor="" className="upload_card_label">Aadhar Card</label>
                  <input required type="file" name='adharCard' className="upload_card_input" onChange={handleFileChange} />
                </div>

                <div className="upload_card">
                  <img src={pan} alt="" className="upload_img2" />
                  <label htmlFor="" className="upload_card_label">PAN Card</label>
                  <input required type="file" name='panCard' className="upload_card_input" onChange={handleFileChange} />
                </div>
                <div className="upload_card">
                  <FaUser className="upload_icon" />
                  <label htmlFor="" className="upload_card_label">Your Photo</label>
                  <input type="file" name='photo' className="upload_card_input" onChange={handleFileChange} />

                </div>
              </div>
            </div>

            <div className="acc_submit_button_outer">

              <button type='submit' className='form_button_submit'>Submit</button>
            </div>

          </div>
        </Form>
      </Formik>
    </div>
  )
}

export default AccountCreation
