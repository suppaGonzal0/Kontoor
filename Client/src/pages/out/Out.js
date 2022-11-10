import React from 'react'
import StockOutTable from '../../components/table/StockOutTable'
import "./Out.css"
import Button from '@mui/material/Button';

export const Out = () => {

  const style = {
    minWidth: 150,
  }

  return (
    <div className='outMain'>
      <strong className='header'>Stock Out Form</strong>
      <StockOutTable/>
      <div className="reportbtns">
        <Button variant="contained" style={style}>Confirm</Button>
      </div>
    </div>
  )
}
