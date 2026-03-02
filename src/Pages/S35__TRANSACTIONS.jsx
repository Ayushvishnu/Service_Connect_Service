import React from 'react'
import Header from '../Components/adhil/Header'
import ToolBar from '../Components/adhil/ToolBar'
import TransactionItem from '../Components/adhil/TransactionItem'
import TransactionList from '../Components/adhil/TransactionList'
import TransactionLists from '../Components/adhil/TransactionLists'

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

