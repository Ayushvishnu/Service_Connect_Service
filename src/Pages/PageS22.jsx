import AppHeader from "../components/yaswanth/AppHeader";
import BottomNavBar from "../components/yaswanth/BottomNavBar";
import ServiceRequestList from "../components/yaswanth/ServiceRequestList";

const Page70 = () => {
  return (
    <div>
      <AppHeader
        title="requests"
        showBack={true}
        showSearch={true}
        showPhone={false}
        showFilter={true}
        showMenu={false}
        theme="black"
      />
      <div className="xs:mx-auto">
        <ServiceRequestList />
      </div>
      <BottomNavBar/>
    </div>
  );
};
export default Page70;