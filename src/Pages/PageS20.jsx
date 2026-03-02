import AppHeader from "../components/yaswanth/AppHeader";
import BottomNavBar from "../components/yaswanth/BottomNavBar";
import RegisteredServiceList from "../components/yaswanth/RegisteredServiceList";

const Page69 = () => {
  return (
    <div className="min-h-screen bg-gray-300">
      <AppHeader
        title="registered services"
        showBack={true}
        showSearch={true}
        showPhone={false}
        showFilter={true}
        showMenu={false}
        theme="black"
      />
      <RegisteredServiceList />

       <BottomNavBar/>
    </div>
  );
};
export default Page69;