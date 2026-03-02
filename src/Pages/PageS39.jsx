import AppHeader from "../components/yaswanth/AppHeader"
import AdsManage from "../components/yaswanth/AdsManage"

const PageS39 = () =>{
  return (
    <div>
        <AppHeader
         title="ADS MANAGEMENT"
          showBack={true}
         theme="black"
         showSearch={true}
        showFilter={true}
        />
        <AdsManage/>
    </div>
  )
}

export default PageS39