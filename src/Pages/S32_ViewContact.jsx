import React from 'react'
import Header from '../Components/adhil/Header'
import LeadAlertModal from '../Components/adhil/LeadAlertModal'

export default function Page78() {
  return (
    <div className='w-[100%] h-[100%] min-h-screen bg-gray-300'>

        <Header
        title="EDIT SERVICE"
        showBack={true}
        theme="black"/>

        <LeadAlertModal/>

    </div>
  )
}

