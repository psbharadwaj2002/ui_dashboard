import React from 'react'
import "../styles/display/display.css"
import data from "./data"

function Display() {
  
    console.log(data)
  return (
    <div id = "display_body">
        <div id = "title" className='data_container'>
            <div><p className='checkbox'><input type='checkbox'/></p></div>
            <div><p className='title data_div'>Invoice ID</p></div>
            <div><p className='title data_div date'>Date</p></div>
            <div><p className='title data_div'>Customer</p></div>
            <div><p className='title data_div'>Payable Amount</p></div>
            <div><p className='title data_div'>Paid Amount</p></div>
            <div><p className='title data_div due'>Due</p></div>
        </div>
        {
            data.map((value)=>{
                return (
                <div className = 'data_container' key={value.id}>
                    <div><p className='checkbox'><input type='checkbox'/></p></div>
                    <div><p className='data_div'>{value.id}</p></div>
                    <div><p className='data_div date'>{value.date}</p></div>
                    <div><p className='data_div'>{value.customer}</p></div>
                    <div><p className='data_div'>{value.payableAmount}</p></div>
                    <div><p className='data_div'>{value.paidAmount}</p></div>
                    <div><p className='data_div due'>{value.due}</p></div>
                </div>
                 
                
                )
              })
        }
    </div>
  )
}

export default Display