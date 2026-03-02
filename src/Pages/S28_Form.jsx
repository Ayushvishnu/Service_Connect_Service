import React from 'react'
import Header from '../components/adhil/Header'
import ComplaintSection from '../components/adhil/ComplaintSection'

export default function S28_Form() {
  return (
    <div className='w-[100%] h-[100%] min-h-screen bg-gray-300'>
        <Header
        title="COMPLAINT FORM"
        showBack={true}
        theme="black"/>

        <ComplaintSection/>

    </div>  
     
  )
}
