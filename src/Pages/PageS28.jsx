import React from 'react'
import AppHeader from "../components/yaswanth/AppHeader"
import ComplaintSection from '../components/yaswanth/ComplaintSection'

export default function S28() {
  return (
    <div className='w-[100%] h-[100%] bg-gray-300'>
        <AppHeader
        title="COMPLAINT FORM"
        showBack={true}
        theme="black"/>

        <ComplaintSection/>

    </div>  
     
  )
}
