import React from 'react'
import RequestDetails from '../Components/adhil/RequestDetails'
import Header from '../Components/adhil/Header'

export default function S23_RequestService() {
  return (
    <div className='w-[100%] h-[100%] min-h-screen bg-gray-300'>
        <Header
        title="REQUEST DETAILS"
        showBack={true}
        theme="black"/>

        <RequestDetails 
        showButtons ={true}
        />
    </div>
  )
}

