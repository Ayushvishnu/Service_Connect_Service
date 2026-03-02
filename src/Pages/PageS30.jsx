import AppHeader from '../components/yaswanth/AppHeader'
import LeadsRequestList from '../Components/yaswanth/LeadsRequestList'

export default function S30_Leads() {
  return (
    <div>
        <AppHeader
            title="Leads"
            showBack={true}
            theme="black"/>

        <LeadsRequestList />
        
    </div>
  )
}