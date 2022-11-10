import React from 'react'
import StockEntryTable from '../../components/table/StockEntryTable'
import "./Entry.css"
import ModalForm from '../../components/modalform/ModalForm';
import Button from '@mui/material/Button';

export const Entry = () => {

  const style = {
    minWidth: 150,
  }

  return (
    <div className='entryMain'>
      <strong className='header'>Stock Entry Form</strong>
      <StockEntryTable/>
      <div className="reportbtns">
        <ModalForm/>
        <Button variant="contained" style={style}>Confirm</Button>
      </div>
    </div>
  )
}
