import React, { useState } from 'react'
import "./Register.css"
import rupee1 from "../../assets/register/rr1.png"
import { TextField, Button, Checkbox } from "@mui/material";
import { BsBank } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { register } from '../../features/authSlice/authSlice';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [formData, setFormData] = useState({
        UserName: '',
        Email: '',
        Password: ''
    })

    const[toggle,setToggle] = useState('false')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]:value
        }))
    }


    const handleInput=()=>{
        setToggle((prev)=>!prev)
    }

    const handleSubmit = async(e)=>{
         e.preventDefault()
       const result= await dispatch(register(formData))
    //    console.log(result.payload.message==="Registerd successfully","rrrrrrrr")
    if(result.payload.message==="Registerd successfully"){
        navigate("/")
    }
    else{
        console.error("error occured")
    }
    }

    return (
        <div className='register_outer'>
            <div className="register_main">
                <div className="img_outer">
                      <h1 className="register">Register</h1>
                    <h2 className="heading"><BsBank className='bank_icon'/>BMS</h2>
                    <p className="reg_para">
                        Securely manage your bank account, transfers, and more all in one place.
                    </p>
                 </div>
                <div className="input_outer">
                    <form className="form" onSubmit={handleSubmit}>
                        <TextField
                            name='UserName'
                            label="Enter your name"
                            variant="outlined"
                            onChange={handleChange}
                            className='input_reg'
                            required
                         />
                        <TextField
                            name='Email'
                            label="Email"
                            variant="outlined"
                            onChange={handleChange}
                            className='input_reg'
                            required
                        />
                        <TextField
                            name='Password'
                            label="Password"
                            type={toggle ? "password":"text"}
                            variant="outlined"
                            onChange={handleChange}
                            className='input_reg'
                            required
                        />
                         <div className="check_box_outer">

                        <Checkbox
                         className="checkbox" 
                         onChange={handleInput}
                         value={true}
                         />
                        <label htmlFor="">Show password</label>
                        </div>
                        <Button type="submit" variant="contained" color="primary" className='reg_button' >
                            Register
                        </Button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Register
