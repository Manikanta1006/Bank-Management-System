import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import "./DepositeMoney.css"
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { CreateTranasation } from '../../features/TrasationSlice/transationSlice';

function DepositeMoney() {

    const dispatch = useDispatch()
    const {user} = useSelector((state)=>state.auth)
    console.log(user,"xxxxxxxx")

    const initialValues ={
        managerId:user.id,
        AccountId:'',
        amount:'',
        TransationType:''

    }

    const validationSchema = Yup.object({
        AccountId:Yup.string().required("This field is required"),
        amount:Yup.string().required('This field is required'),
        TransationType:Yup.string().required("This field is required")
    })

    const handleSubmit = async(values,{resetForm})=>{
        try{
            const res = await dispatch(CreateTranasation(values))
             toast.success("Transaction success!");
                resetForm()
        }
        catch(error){
             toast.error("Account creation failed!");
                console.log("Transaction error")
        }
    }
    return (
        <div className='deposite_outer'>
            <h1 className="deposite_heading">
                Transation form
            </h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form>
                    <div className="depo_form_outer">

                        <div className="depo_form_layer1">

                            <div className="depo_field_outer">
                                <label htmlFor="" className="depo_label">Account number</label>
                                <Field name='AccountId' type="text" className="depo_input" placeholder='Enter Account number' />
                                <div className="error_msg_outer">
                                    <ErrorMessage name="AccountId" component="div" className='error_msg' />
                                </div>
                            </div>
                            <div className="depo_field_outer">
                                <label htmlFor="" className="depo_label">Amount</label>
                                <Field name='amount' type="text" className="depo_input" placeholder='Enter amount' />
                                <div className="error_msg_outer">
                                    <ErrorMessage name="amount" component="div" className='error_msg' />
                                </div>
                            </div>
                            <div className="depo_field_outer">
                                <label htmlFor="" className="depo_label">Transation Type</label>
                                <Field as="select" name="TransationType" id="" className='select' >
                                    <option value="" className='acc_options'>Select Transation</option>
                                    <option value="Deposite" className='acc_options'>Deposite</option>
                                    <option value="Withdraw" className='acc_options'>Withdraw</option>
                                    <option value="Other" className='acc_options'>Other</option>
                                </Field>
                                <div className="error_msg_outer">
                                    <ErrorMessage name="TransationType" component="div" className='error_msg' />
                                </div>
                            </div>
                            <div className="deosite_form_outer">
                                <button className='deosite_form_outer_button'>Submit </button>
                            </div>
                        </div>

                    </div>

                </Form>
            </Formik>
        </div>
    )
}

export default DepositeMoney
