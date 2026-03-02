import AppHeader from "../components/reshma/AppHeader";
import OngoingJobList from "../components/reshma/OngoingJobList";
import ToolBar from "../components/reshma/ToolBar";
const S27_ActiveServices  = () => {
  return (
    <div>
      <AppHeader
        title="Jobs"
        showBack={true}
        showSearch={true}
        showPhone={false}
        showFilter={true}
        showMenu={false}
        theme="black"
      />
      <OngoingJobList />
      <ToolBar />
    </div>
  );
};
export default S27_ActiveServices ;