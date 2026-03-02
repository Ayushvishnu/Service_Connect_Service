import AppHeader from "../components/reshma/AppHeader";
import Ereciept from "../components/reshma/Ereciept";
import HeaderDropdown from "../components/reshma/HeaderDropdown";
import { useRef } from "react";
export default function S17_E_RECIEPT_EDIT() {
  const receiptRef = useRef(); // ✅ reference to receipt
  return (<>
    <AppHeader
      title="E-reciept"
      MoreVertical={true}
      ChevronLeft={true}
      showSearch={false}
      showPhone={false}
      showFilter={false}
    />
    <Ereciept ref={receiptRef} />
    <HeaderDropdown receiptRef={receiptRef} />
  </>
  )

}