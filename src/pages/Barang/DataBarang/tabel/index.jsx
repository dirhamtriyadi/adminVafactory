import {
  useSelector,
  React,
  Tabel,
  utilityActions,
  useDispatch,
  masterActions,
  useEffect,
  selectorMaster,
} from "../../../../components";
import { getImage } from "../../../../config/axios";
import { hapusProdduk } from "../redux";

const TabelDataBarang = () => {
  const dispatch = useDispatch();
  let databarang = useSelector(selectorMaster.getDataProduk);
  useEffect(() => {
    dispatch(masterActions.getDataProduk());
  }, [dispatch]);

  const columns = [
    {
      dataField: "code",
      text: "Kode Barang",
    },
    {
      dataField: "name",
      text: "Nama Barang",
    },
    {
      dataField: "description",
      text: "Deskripsi",
    },
    {
      dataField: "price",
      text: "Harga",
      formatter: (cell) => {
        return <div>{Number(cell || 0)?.toLocaleString("kr-KO") || 0}</div>;
      },
    },
   
    {
      dataField: "action",
      text: "Action",
      csvExport: false,
      headerClasses: "text-center",
      formatter: (rowcontent, row) => {
        return (
          <div className="row text-center">
            <div className="col-12">
              <button
                onClick={() => ShowModal(row, "EDIT")}
                className="btn btn-primary"
              >
                <i className="fa fa-edit"></i>
              </button>
              <button
                onClick={() => ShowModal(row, "DetailFoto")}
                className="btn btn-warning ml-2"
              >
                <i className="fa fa-eye"></i>
              </button>
              <button
                onClick={() => dispatch(hapusProdduk(row))}
                className="btn btn-danger ml-2"
              >
                <i className="fa fa-trash"></i>
              </button>
            </div>
          </div>
        );
      },
    },
  ];

  const ShowModal = (row, isEdit) => {
    dispatch(utilityActions.getDataEdit(row));

    dispatch(
      utilityActions.showModalBanyak(
        isEdit === "EDIT"
          ? "EDIT"
          : isEdit === "DetailFoto"
          ? "DetailFoto"
          : "TAMBAH"
      )
    );
    if (isEdit === "DetailFoto") {
      dispatch(utilityActions.setLoading(true));

      getImage(row.id)
        .then((res) => {
          dispatch(
            utilityActions.getDataEdit({
              foto: res,
            })
          );
          dispatch(utilityActions.setLoading(false));
        })
        .catch((err) => {
          dispatch(utilityActions.setLoading(false));
        });
    }
    dispatch(utilityActions.showModal());
    dispatch(utilityActions.isEdit(isEdit === "EDIT" ? true : false));
  };
  return (
    <Tabel
      handleClick={() => ShowModal(false, "TAMBAH")}
      keyField="id"
      tambahData={true}
      data={databarang[0]}
      columns={columns}
    />
  );
};

export default TabelDataBarang;
