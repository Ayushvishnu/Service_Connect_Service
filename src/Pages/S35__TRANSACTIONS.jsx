import React from 'react'
import Header from '../components/adhil/Header'
import ToolBar from '../components/adhil/ToolBar'
import TransactionItem from '../components/adhil/TransactionItem'
import TransactionList from '../components/adhil/TransactionList'
import TransactionLists from '../components/adhil/TransactionLists'

export default function S35__TRANSACTIONS() {
  return (
    <div  className='w-[100%] h-[100%] min-h-screen bg-gray-300'>

        <Header
        title="Transation"
        showBack={true}
        theme="black"/>

        <TransactionLists/>


              <div className="lg:hidden">
        <ToolBar />
      </div>



    </div>
  )
}

