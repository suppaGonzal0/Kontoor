import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Signin.css"
import { useNavigate } from "react-router-dom"

export const Signin = () => {

let navigate = useNavigate();
  
const style = {
  minWidth: 350,
}

  return (
    <div className='accountMain'>
      <h1>Sign In</h1>
      <TextField id="outlined-basic" label="Email" variant="outlined" style={style}/>
      <TextField id="outlined-password-input" label="Password" type="password" style={style}/>
      <Button variant="contained" style={style}>Submit</Button>
      <p className='accountText' onClick={() => navigate("/signup")}>Create new account</p>
    </div>
  )
}
