import React from 'react'
import Header from '../Components/adhil/Header'
import RequestInfo from '../Components/adhil/RequestInfo'
import ServiceDeclineForm from '../Components/adhil/ServiceDeclineForm'

export default function S29_Form() {
  return (
    <div  className='w-[100%] h-[100%] min-h-screen bg-gray-300'>

        <Header
        title="DECLAINE FORM"
        showBack={true}
        theme="black"/>

        <RequestInfo/>

        <div>
          <ServiceDeclineForm/>
        </div>


    </div>
  )
}

