// import WorkList from '../components/WorkList'
// import BottomNavBar from '../components/BottomNavBar'
// import AppHeader from '../components/AppHeader'

// const Page93 = () => {
//   return (
//     <div>
//         <AppHeader
//         title="WORKS"
//         showBack={true}
//          theme="black"
//           showSearch={true}
//          showFilter={true}
//         />
//         <WorkList/>
//         <BottomNavBar/>
//     </div>
//   )
// }

// export default Page93


import { useLocation } from "react-router-dom";
import Component4 from "../components/yaswanth/Component4";
import ServiceList from "../components/yaswanth/ServiceList";
import JobLists from "../components/yaswanth/JobLists";
import BottomNavBar from "../components/yaswanth/BottomNavBar";

export default function Page93() {
  const { pathname } = useLocation();

  const isJobs = pathname === "/pageu27";

  return (
    <div>
      <Component4
        theme="black"
        title={isJobs ? "Jobs" : "Services"}
        showFilter={!isJobs}
        showSearch={!isJobs}
      />

      {isJobs ? <JobLists /> : <ServiceList />}

      <BottomNavBar />
    </div>
  );
}