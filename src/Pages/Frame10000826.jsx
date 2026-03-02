import React from 'react'

import TopServiceProviders from '../components/reshma/TopServiceProviders'
import ToolBar from '../components/reshma/ToolBar'
import PopularServiceList from '../components/reshma/PopularServiceList'
import CategoryList from '../components/reshma/CategoryList'
import Banner from '../components/reshma/Banner'
import Component10 from '../components/reshma/Component10'
import AppHeader from '../components/reshma/AppHeader'

const Page11 = () => {
  return (
    <div>
       {/*Header  */}
       <div>
        <AppHeader theme='black'title="SERVICE CONNECT" shownotification="true" showprofil="true" />
       </div>
     
       <div className='m-1'>
         <Component10 />
       </div>

       <div>
         <Banner/>
       </div>
       
        <div>
            <CategoryList/>
        </div>
        <div>
            <PopularServiceList/>
        </div>
        <div>
            <TopServiceProviders/>
        </div>
        <div>
            <ToolBar/>
        </div>
    </div>
  )
}

export default Page11
