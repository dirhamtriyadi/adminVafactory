import React from "react";
import {
  PanelContent,
  ModalGlobal,
  useSelector,
  selectorUtility,
} from "../../components";
import TabelOrders from "./tabel";
import FormDataOrders from "./form";
import DetailOrder from "./modal/DetailOrder";
import DetailOrderTransaction from "./tabel/DetailOrderTransaction";
import DetailOrderTracking from "./tabel/DetailOrderTracking";

const Orders = () => {
  const isEdit = useSelector(selectorUtility.isEdit);
  const showModalBanyak = useSelector(selectorUtility.showModalBanyak);

  const ContentModal = () => {
    if (showModalBanyak === "DetailOrder") {
      return <DetailOrder />;
    } else if(showModalBanyak === "OrderTransaction") {
      return <DetailOrderTransaction />;
    } else if(showModalBanyak === "OrderTracking") {
      return <DetailOrderTracking />;
    } else {
      return <FormDataOrders />;
    }
  }

  return (
    <PanelContent menu="Orders">
      <TabelOrders />
      <ModalGlobal
        size="P"
        // title={isEdit ? "Edit Data Orders" : "Tambah Data Orders"}
        title={showModalBanyak === "DetailOrder" ? "Detail Order" : isEdit ? "Edit Data Orders" : "Tambah Data Orders"}
        content={<ContentModal />}
      />
    </PanelContent>
  );
};

export default Orders;
