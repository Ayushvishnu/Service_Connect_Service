import React from 'react'
import Header from '../components/adhil/Header'
import RequestDetails from '../components/adhil/RequestDetails'
import InvoiceForm from '../components/adhil/InvoiceForm'

export default function S24_AcceptandInvoice() {
  return (
    <div  className='w-[100%] h-[100%] min-h-screen bg-gray-300'>

        <Header
        title="INVOICE"
        showBack={true}
        theme="black"/>

        <RequestDetails/>

        <InvoiceForm/>
 

    </div>
  )
}

