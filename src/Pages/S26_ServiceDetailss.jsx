import React from 'react'
import AppoinmentDetails from '../Components/adhil/AppoinmentDetails'
import RequestDetails from '../Components/adhil/RequestDetails'
import Header from '../Components/adhil/Header'

export default function S26_ServiceDetailss() {
  return (
    <div className='w-[100%] h-[100%] min-h-screen bg-gray-300'>
        <Header
        title="BOOKING DETAILS"
        showBack={true}
        theme="black"/>

        <RequestDetails/>
        <div className='p-3'>
            <AppoinmentDetails/>
        </div>
    </div>
  )
}
