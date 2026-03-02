import AppHeader from "../components/reshma/AppHeader";
import ServiceBookingList from "../components/reshma/ServiceBookingList";
import ToolBar from "../components/reshma/ToolBar";

const S25_Bookings_Appoinments = () => {
  return (
    <div className="bg-gray-300 gap-2">
      <AppHeader
        title="bookings"
        showBack={true}
        showSearch={true}
        showPhone={false}
        showFilter={true}
        showMenu={false}
        theme="black"
      />
      <ServiceBookingList />
      <ToolBar />
    </div>
  );
};
export default S25_Bookings_Appoinments;
