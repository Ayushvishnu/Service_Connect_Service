import AppHeader from "../components/reshma/AppHeader";
import ServiceRequestList from "../components/reshma/ServiceRequestList";
import ToolBar from "../components/reshma/ToolBar";

const S22_Requests = () => {
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
      <ToolBar />
    </div>
  );
};
export default S22_Requests;
