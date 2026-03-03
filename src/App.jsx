import { BrowserRouter, Route, Routes } from "react-router-dom"

// vercel
//AYUSH
// import StartPage from "./components/ayush/Pages/S01_LAUNCHING"
import StartPage from "./Pages/S01_LAUNCHING.jsx"
import Login from "./Pages/S02_LOGIN.jsx"
import CreateNewPassword from "./Pages/S03_CREATE_NEW_PIN.jsx";
import OTPVerification from "./Pages/S04_OTP.jsx";
import SuccessRedirect from "./Pages/S08_CONGRATULATIONS.jsx";
import Profile from "./Pages/S06_FILL_YOUR_PROFILE.jsx";

import ForgotPassword from "./Pages/S09_FORGOT PASSWORD.jsx";
import ForgotOtpVerification  from "./Pages/S10_VERIFY_FORGOT_PASSWORD.jsx";
import ConfirmPassword from "./Pages/S11_CREATE_NEW_PASSWORD.jsx"
import ForgotSuccessRedirect from "./Pages/Page61.jsx";


//reshma

import AccountSuccess from "./Pages/S12_Congradulations.jsx"
import Page62 from "./Pages/S13_PaymentMethods.jsx"
import S17_E_RECIEPT_EDIT from "./Pages/S17_E_RECIEPT_EDIT.jsx";
import S14_AddNewCard from "./Pages/S14_AddNewCard.jsx";
import S18_CheckoutSuccess from "./Pages/S18_CheckOutSuccess.jsx";
import S19_Dashboard from "./Pages/S19_Dashboard.jsx";
import S20_MyServices from "./Pages/S20_MyServices.jsx";
import S22_Requests from "./Pages/S22_Requests.jsx";
import S25_Bookings_Appoinments from "./Pages/S25_Bookings_Appoinments.jsx";
import S27_ActiveServices from "./Pages/S27_ActiveServices.jsx";
import Page14 from "./Pages/U14_Search.jsx"


//yaswanth
import PageS41 from './Pages/PageS41.jsx'
import PageS42 from './Pages/PageS42.jsx'
import PageS43 from './Pages/PageS43.jsx'
import PageS44 from './Pages/PageS44.jsx'
import PageS45 from './Pages/PageS45.jsx'
import PageS46 from './Pages/PageS46.jsx'
import PageS47 from './Pages/PageS47.jsx'
import PageS48 from './Pages/PageS48.jsx'
import PageS49 from './Pages/PageS49.jsx'
import PageS51 from './Pages/PageS51.jsx'
import Page145 from './Pages/Page145.jsx'
import Page146 from './Pages/Page146.jsx'

// import PageS52 from './Pages/PageS52'
// import PageS22 from './Pages/PageS22'
// import PageS20 from './Pages/PageS20'
// import PageS30 from './Pages/PageS30'
// import PageS28 from './Pages/PageS28'

// import PageS34 from './Pages/PageS34'
import PageS38 from './Pages/PageS38.jsx'
import PageS39 from './Pages/PageS39.jsx'
import PageS37 from './Pages/PageS37.jsx'
import Missing147 from './Pages/Missing147.jsx'
import Missing148 from './Pages/Missing148.jsx'
import Missing149 from './Pages/Missing149.jsx'
import Missing150 from './Pages/Missing150.jsx'
import Missing151 from './Pages/MIssing151.jsx'
import Missing152_logout from './Pages/Missing152_logout.jsx'
import Missing153 from './Pages/Missing153.jsx'
import Missing154 from './Pages/Missing154.jsx'
import Home from './Pages/Home.jsx'


 {/* new changes  */}

import ServiceList from "./components/yaswanth/ServiceList.jsx";
import JobLists from "./components/yaswanth/JobLists.jsx";




//adhil
import S21_EditService from "./Pages/S21_EditService.jsx";
import S23_RequestService from "./Pages/S23_RequestService.jsx";
import S26_ServiceDetailss from "./Pages/S26_ServiceDetailss.jsx";
import S28_Form from "./Pages/S28_Form.jsx";
import S31_ServiceLeadDetails from "./Pages/S31_ServiceLeadDetails.jsx";
import Add_Lead_Balance_Sevice from "./Pages/Add_Lead_Balance_Service.jsx";
import S29_Form from "./Pages/S29_Form.jsx";
import S30_Leads from "./Pages/S30_Leads.jsx";
import Page81 from "./Pages/S32_ViewContact.jsx"; ``
import S24_AcceptandInvoice from "./Pages/S24_AcceptandInvoice.jsx";
import S34_Financal from "./Pages/S34_Financal.jsx";
import S35__TRANSACTIONS from "./Pages/S35__TRANSACTIONS.jsx";
import S36_COMPLAINTS from "./Pages/S36_COMPLAINTS.jsx";




//Arjun 
import S52Security from "./Pages/S52_SECURITY.jsx";
import S53InboxChats from "./Pages/S53_INDOX_CHATS.jsx";
import S54InboxChatsMessages from "./Pages/S54_INDOX_CHATS_MESSAGES.jsx";
import S404ErrorPage from "./Pages/S404_Error_Page.jsx";
import S403AccessDenied from "./Pages/S403_Access_Denied.jsx";

import SResetPassword from "./Pages/SRESET_PASSWORD.jsx";
import SVerifyResetPassword from "./Pages/SVERIFY_RESET_PASSWORD.jsx";
import SResetNewPassword from "./Pages/SRESET_NEW_PASSWORD.jsx";
import SResetCongratulations from "./Pages/SRESET_CONGRATULATIONS.jsx";
import Page63 from "./Pages/S15_PaymentMethods.jsx";
import Ereciept from "./components/reshma/Ereciept.jsx";
import Page16 from "./Pages/U16_Filter.jsx";
import SuccessMessage from "./components/reshma/SuccessMessage.jsx";
import Page11 from "./Pages/Frame10000826.jsx";
import RegisterService from "./Pages/S07_REGISTER_SERVICE.jsx";
import PageU28 from "./Pages/Missing149.jsx";


function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>

      {/* //AYUSH */}

      <Route path="/" element={<StartPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/createpin" element={<CreateNewPassword />} />
      <Route path="/otp-verification" element={<OTPVerification />} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/success" element={<SuccessRedirect />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/confirm-password" element={<ConfirmPassword />} />
      <Route path="/forgot-otp-verification" element={<ForgotOtpVerification />} />
      <Route path="/forgot-success-redirect" element={< ForgotSuccessRedirect/>} />
      


              //adhil
          <Route path="/73" element={<S21_EditService />} />
          <Route path="/74" element={<S23_RequestService />} />
          <Route path="/75" element={<S26_ServiceDetailss />} />
          <Route path="/76" element={<S28_Form />} />
          <Route path="/77" element={<S31_ServiceLeadDetails />} />
          <Route path="/78" element={<Add_Lead_Balance_Sevice />} />
          <Route path="/79" element={<S24_AcceptandInvoice />} />
          <Route path="/80" element={<S29_Form />} />
          <Route path="/800" element={<S30_Leads />} />
          <Route path="/81" element={<Page81 />} />
          <Route path="/82" element={<S23_RequestService />} />
          <Route path="/83" element={<S34_Financal />} />
          <Route path="/84" element={<S35__TRANSACTIONS />} />
          <Route path="/85" element={<S36_COMPLAINTS />} />


//reshma

<Route path="/page62" element={<Page62/>} />
<Route path="/page63" element={<Page63/>} />
<Route path="/page61" element={<SuccessRedirect/>} />
<Route path="/page56" element={<RegisterService/>} />
<Route path="/page29" element={<PageU28/>} />
<Route path="/page11" element={<Page11/>} />
<Route path="/successmessage" element={<SuccessMessage/>} />
<Route path="/filter" element={< Page16/>} />
<Route path="/search" element={< Page14/>} />
 <Route path="/ereciept" element={< Ereciept/>} />
          <Route path="/65" element={<S17_E_RECIEPT_EDIT />} />
          <Route path="/66" element={<S14_AddNewCard />} />
          <Route path="/67" element={<S18_CheckoutSuccess />} />
          <Route path="/68" element={<S19_Dashboard />} />
          <Route path="/page69" element={<S20_MyServices />} />
          <Route path="/page70" element={<S22_Requests />} />
          <Route path="/page71" element={<S25_Bookings_Appoinments />} />
          <Route path="/72" element={<S27_ActiveServices />} />
          <Route path="/12" element={<AccountSuccess />} />
          <Route path="/13" element={<Page62 />} />
          <Route path="/14" element={<S14_AddNewCard />} />
          <Route path="/15" element={<Page63 />} />

          
//yaswanth
                <Route path="/s41" element={<PageS41 />} />
                <Route path="/s42" element={<PageS42 />} />
                <Route path="/s43" element={<PageS43 />} />
                <Route path="/s44" element={<PageS44 />} />
                <Route path="/s45" element={<PageS45 />} />
                <Route path="/s46" element={<PageS46 />} />
                <Route path="/s47" element={<PageS47 />} />
                <Route path="/s48" element={<PageS48 />} />
                <Route path="/s49" element={<PageS49 />} />
                <Route path="s51" element={<PageS51 />} />
                <Route path="/145" element={<Page145 />} />
                <Route path="/146" element={<Page146 />} />
                <Route path="/missing147" element={<Missing147 />} />
                <Route path="/missing148" element={<Missing148 />} />
                <Route path="/missing149" element={<Missing149 />} />
                <Route path="/missing150" element={<Missing150 />} />
                <Route path="/missing151" element={<Missing151 />} />
                <Route path="/missing152_logout" element={<Missing152_logout />} />
                <Route path="/missing153" element={<Missing153 />} />
                <Route path="/missing154" element={<Missing154 />} />
                <Route path="/home" element={<Home />} />
                
                
                {/* <Route path="/s20" element={<PageS20 />} /> */}
                {/* <Route path="/s22" element={<PageS22 />} /> */}
                {/* <Route path="/s28" element={<PageS28 />} /> */}
                {/* <Route path="/s30" element={<PageS30 />} /> */}
                {/* <Route path="/s34" element={<PageS34 />} /> */}
                {/* <Route path="/s52" element={<PageS52 />} /> */}
                <Route path="/s37" element={<PageS37 />} />
                <Route path="/s38" element={<PageS38 />} />
                <Route path="/s39" element={<PageS39/>} />

              {/* new changes  */}
  <Route path="/pageu33" element={<ServiceList />} />
  <Route path="/u27" element={<JobLists />} />






        {/* AUTH & PUBLIC PAGES */}
               <Route path="/S52_SECURITY" element={<S52Security />} />
               <Route path="/S53_INDOX_CHATS" element={<S53InboxChats />} />
               <Route path="/S54_INDOX_CHATS_MESSAGES/:chatId" element={<S54InboxChatsMessages/>} />
               
               {/* Error pages*/}
               <Route path="/S403_Access_Denied" element={<S403AccessDenied />} />
               <Route path="/S404_Error_Page" element={<S404ErrorPage/>} />
       
               {/* Reset password pages*/}
               
               <Route path="/SRESET_PASSWORD" element={<SResetPassword/>}/>
               <Route path="/SVERIFY_RESET_PASSWORD" element={<SVerifyResetPassword/>}/>
               <Route path="/SRESET_NEW_PASSWORD" element={<SResetNewPassword/>}/>
               <Route path="/SRESET_CONGRATULATIONS" element={<SResetCongratulations/>}/>
       
             <Route path="*" element={<S404ErrorPage/>} />
                

        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
