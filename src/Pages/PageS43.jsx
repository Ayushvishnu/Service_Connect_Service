import BottomNavBar from '../components/yaswanth/BottomNavBar'
import UserProfile from '../components/yaswanth/UserProfile'
import AppHeader from '../components/yaswanth/AppHeader'

const Page92 = () => {
  return (
    <div>
      <AppHeader
      title="PROFILE"
        showBack={true}
        // showSearch={true}
        // showFilter={true}
        // showMenu={true}
        // showPhone={true}
        theme="black"
      />
        <UserProfile />
        <BottomNavBar/>
    </div>
  )
}

export default Page92