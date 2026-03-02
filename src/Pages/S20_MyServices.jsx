import AppHeader from "../components/reshma/AppHeader";
import RegisteredServiceList from "../components/reshma/RegisteredServiceList";
import ToolBar from "../components/reshma/ToolBar";

const S20_MyServices = () => {
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

      <ToolBar />
    </div>
  );
};
export default S20_MyServices;
