import React from "react";
import {
  PanelContent,
  ModalGlobal,
  useSelector,
  selectorUtility,
} from "../../components";
import TabelOrders from "./tabel";
import FormDataOrders from "./form";

const Orders = () => {
  const isEdit = useSelector(selectorUtility.isEdit);

  return (
    <PanelContent menu="Orders">
      <TabelOrders />
      <ModalGlobal
        size="P"
        title={isEdit ? "Edit Data Orders" : "Tambah Data Orders"}
        content={<FormDataOrders />}
      />
    </PanelContent>
  );
};

export default Orders;
