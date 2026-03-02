
import AppHeader from "../components/reshma/AppHeader";
import CourseItem from "../components/reshma/CourseItem";
import PaymentSelection from "../components/reshma/PaymentSelection";

export default function Page62 ()

{
 return(    
<>
    <AppHeader
     title="Payment methods"
        MoreVertical={false}
        showMenu={false}
  ChevronLeft={true} 
   showSearch={false}
  showPhone={false}
  showFilter={false}
        onBack={() => console.log("Go back")}
        theme="black"/>
       
        <CourseItem/>
        <PaymentSelection/>
        </>
        )
}