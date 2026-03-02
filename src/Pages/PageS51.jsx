import NotificationSettings from "../components/yaswanth/NotificationSettings"
import AppHeader from '../components/yaswanth/AppHeader'

const Page100 = () => {
  return (
    <div>
        <AppHeader
        title="NOTIFICATIONS SETTINGS"
        showBack={true}
         theme="black"
        />
        <NotificationSettings/>
    </div>
  )
}

export default Page100