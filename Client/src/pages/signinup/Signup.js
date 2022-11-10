import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Signin.css"
import { useNavigate } from "react-router-dom"

export const Signup = () => {

let navigate = useNavigate();

const style = {
  minWidth: 350,
}

  return (
    <div className='accountMain'>
      <h1>Create an account</h1>
      <TextField id="outlined-basic" label="Name" variant="outlined" style={style}/>
      <TextField id="outlined-basic" label="Email" variant="outlined" style={style}/>
      <TextField id="outlined-password-input" label="Password" type="password" style={style}/>
      <Button variant="contained" style={style}>Submit</Button>
      <p className='accountText' onClick={() => navigate("/signin")}>Already have an account?</p>
    </div>
  )
}
