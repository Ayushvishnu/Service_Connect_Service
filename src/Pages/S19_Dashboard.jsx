import { Search } from "lucide-react";
import AppHeader from "../components/reshma/AppHeader";
import ToolBar from "../components/reshma/ToolBar";
// import UserRequestsList from "../components/reshma/UserRequestsList";
import DashboardPills from "../components/reshma/DashboardPills";
 import Component10 from "../components/reshma/Component10.jsx";
 import ServiceReachGraph from "../components/reshma/ServiceReachGraph.jsx";
import RevenuePieChart from "../components/reshma/RevenuePieChart";


import RecentActivityList from "../components/reshma/RecentActivityList.jsx";
import ActiveServices from "../components/reshma/ActiveServices";
import UserRequest from "../components/reshma/UserRequest.jsx";
import BookingList from "../components/reshma/BookingList.jsx";

const S19_Dashboard = () => {
  return (
    <div className="bg-gray-200 gap-0">
      <AppHeader
        title="registered services"
        showBack={true}
        showSearch={true}
        showPhone={false}
        showFilter={true}
        showMenu={false}
        theme="black"
      />
      <Component10/>
      <DashboardPills />
      <RevenuePieChart />
      <ServiceReachGraph />
      
     <div className="">
        <RecentActivityList />
        <ActiveServices />
        <BookingList />
        
        <UserRequest /> 
        <ToolBar />
       </div> 
    </div>
  );
};
export default S19_Dashboard;
