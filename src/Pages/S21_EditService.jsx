import React from 'react'
import Header from '../components/adhil/Header'
import AccountDetails from '../components/adhil/AccountDetails'
import EditServiceForm from '../components/adhil/EditServiceForm '

export default function S21_EditService() {
  return (
    <div className='w-[100%] h-[100%] min-h-screen bg-gray-300'>
        <Header
        title="EDIT SERVICE"
        showBack={true}
        theme="black"/>

      <EditServiceForm/>
    </div>
  )
}

