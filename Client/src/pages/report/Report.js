import React from 'react'
import StockReportTable from '../../components/table/StockReportTable'
import "./Report.css"

export const Report = () => {
  return (
    <div className='reportMain'>
      <h2>Stock Report</h2>
      <StockReportTable/>
    </div>
  )
}
