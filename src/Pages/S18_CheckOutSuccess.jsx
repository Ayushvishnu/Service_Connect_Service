import AlertMessage from "../components/reshma/AlertMessage";
import AppHeader from "../components/reshma/AppHeader";
const S18_CheckoutSuccess = () => {
  return (
    <>
      <AppHeader
        title="success"
        showBack={true}
        showSearch={false}
        showPhone={false}
        showFilter={false}
        showMenu={false}
        theme="black"
      />
      
        <AlertMessage />
      
    </>
  );
};
export default S18_CheckoutSuccess;
