import { Button, Checkbox, TextField } from '@mui/material'
import React, { useState } from 'react'
import { BsBank } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../../features/authSlice/authSlice'

function Login() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    UserName: '',
    Email: '',
    Password: ''
  })

  const [toggle, setToggle] = useState('false')



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleInput = () => {
    setToggle((prev) => !prev)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
   const result = await dispatch(login(formData))
   console.log(result,"lllllllllll")
   
   if(result.meta.requestStatus==="fulfilled"){

    if(result.payload.user.UserType==="Coustomer"){
      navigate("/main/customer")
    }
    else if(result.payload.user.UserType==="Manager"){
      navigate("/manager/Dashboard")
    }
    else if(result.payload.user.UserType==="Admin"){
      navigate("/admin")
    }
   }
  }

  const handleNavigate =()=>{
    navigate("/register")
  }

  return (
    <div className='register_outer'>
      <div className="register_main">
        <div className="img_outer">
          <h1 className="register">Login</h1>
          <h2 className="heading"><BsBank className='bank_icon' />BMS</h2>
          <p className="reg_para">
            Securely manage your bank account, transfers, and more all in one place.
          </p>
        </div>
        <div className="input_outer">
          <form className="form" onSubmit={handleSubmit}>
            <TextField
              name='Email'
              label="Email"
              type='email'
              variant="outlined"
              onChange={handleChange}
              className='input_reg'
              required
            />
            <TextField
              name='Password'
              label="Password"
              type={toggle ? "password" : "text"}
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
            <div className="buttons">

            <Button type="submit" variant="contained" color="primary" className='reg_button' >
              Login
            </Button>
            <Button   variant="contained" color="" className='reg_button' onClick={handleNavigate} >
              REGISTER
            </Button>
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Login
