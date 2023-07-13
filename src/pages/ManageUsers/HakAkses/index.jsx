import {
  PanelContent,
  React,
  SortableTree,
  changeNodeAtPath,
  ReanderSelect,
  reduxForm,
  useEffect,
  useState,
  Field,
  connect,
  useDispatch,
  masterActions,
  useSelector,
  getItem,
  ModalGlobal,
  utilityActions,
  selectorUtility,
  selectorMaster
} from "../../../components";
import Menu from "../../../components/sidebar/menu";
import "react-sortable-tree/style.css"; // This only needs to be imported once in your app
import FormDataHakAkses from "./form";
import { hapusDataHakAkses } from "./redux";

let HakAkses = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectorMaster.getDataUsers);
  const isEdit = useSelector(selectorUtility.isEdit);
  const user = getItem("userdata")
  let cekUsers = data[0] === undefined ? [] : data[0];
  const [treeDataM, setTreeData] = useState([]);
  const [setcurrentNode] = useState([]);
  const [aktif,setAktif] = useState(true);
  const [userData, setUserData] = useState([]);

  console.log(userData);
  
  useEffect(() => {
    dispatch(masterActions.getDataUsers())
    setUserData(cekUsers === undefined ? [] : cekUsers.filter((list) => list.id === user.id))
  }, [dispatch])
  
  useEffect(() => {
    setTreeData(Menu);
    dispatch(masterActions.getDataUsers())
    setUserData(cekUsers === undefined ? [] : cekUsers.filter((list) => list.id === user.id))
  }, []);

  // const selectThis = (node, path) => {
  //   setcurrentNode({
  //     node,
  //     path: path,
  //   });
  // };
  // const getNodeKey = ({ treeIndex }) => treeIndex;
  // const getDataUsers = ()=>{
  //   setAktif(true)
  // }

  const showModal = (data, isEdit) => {
    dispatch(utilityActions.getDataEdit(data))
    dispatch(utilityActions.showModal())
    dispatch(utilityActions.isEdit(isEdit))
}

  return (
    <PanelContent menu="Hak Akses Users" submenu="Manage Users">
      <div className="row">
        <div className="col-6">
          <Field
            name="user_id"
            label="Pilih User Id"
            placeholder="Masukan User Id"
            onChange={(e) => {
              // console.log("ini onchange",e);
              setUserData(cekUsers.filter((list) => list.id === e))
              console.log("dari onchange", userData);
            }}
            options={
              cekUsers === 0
                ? []
                : cekUsers.map((list) => {
                    let data = {
                      value: list.id,
                      name: list.name,
                    };
                    console.log(data);
                    return data;
                  })
            }
            component={ReanderSelect}
          />
        </div>
        <div className="col-6" >
          {/* <div style={{ height: 500 }}>
            <button className="btn btn-primary btn-block mt-4 mb-4" disabled={aktif}> Simpan Hak Akses </button>
            <SortableTree
              treeData={treeDataM}
              onChange={(menu) => setTreeData(menu)}
              generateNodeProps={({ node, path }) => ({
                title: (
                  <form
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      selectThis(node, path);
                    }}
                  >
                    <div className="input-group">
                      <input
                        type="text"
                        readOnly="readOnly"
                        className="form-control"
                        value={node.title}
                        // onChange={(event) => {
                        //   const title = event.target.value;
                        //   setTreeData((state) => ({
                        //     treeData: changeNodeAtPath({
                        //       treeData: state.treeData,
                        //       path,
                        //       getNodeKey,
                        //       newNode: { ...node, title },
                        //     }),
                        //   }));
                        // }}
                        placeholder="Recipient's username"
                      />
                      <div className="input-group-append">
                        {node.is_show ? (
                          <>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                const is_show = false;
                                let row = {
                                  treeData: changeNodeAtPath({
                                    treeData: treeDataM,
                                    path,
                                    getNodeKey,
                                    newNode: { ...node, is_show },
                                  }),
                                };
                                setTreeData(row.treeData);
                              }}
                              className="btn btn-primary"
                            >
                              {" "}
                              <i className="fa fa-eye"></i>{" "}
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                const is_show = true;
                                let row = {
                                  treeData: changeNodeAtPath({
                                    treeData: treeDataM,
                                    path,
                                    getNodeKey,
                                    newNode: { ...node, is_show },
                                  }),
                                };
                                setTreeData(row.treeData);
                              }}
                              className="btn btn-secondary"
                            >
                              {" "}
                              <i className="fa fa-eye-slash"></i>{" "}
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </form>
                ),
              })}
            />
          </div> */}

          <button className="btn btn-primary btn-block mt-4 mb-4" onClick={(e) => {
            e.preventDefault();
            showModal(userData, false)
          }}>Tambah hak akses</button>

            <table className="table table-bordered table-striped table-hover">
              <thead className="table-dark">
                <tr>
                    <th>Role</th>
                    <th>Action</th>
                </tr>
              </thead>
                <tbody>
                  {
                      userData[0] === undefined ? [] : userData[0].role.map((list, index) => {
                      console.log(list);
                      return (
                          <tr key={index}>
                          <td>{list.name}</td>
                          <td><button className="btn btn-danger" onClick={() => dispatch(hapusDataHakAkses(list))}><i className="fa fa-trash"></i></button></td>
                          </tr>
                      )
                      })
                  }
                  {/* <tr>
                      <td>users</td>
                      <td>false</td>
                  </tr> */}
                </tbody>
            </table>
        </div>
      </div>
      <ModalGlobal size="P" title={isEdit ? "Edit data hak akses" : "Tambah data hak akses"} content={<FormDataHakAkses />} />
    </PanelContent>
  );
};

const maptostate = (state) => {
  return {
    initialValues: {
      user_id: getItem("userdata").id,
    }
  }
}

HakAkses = reduxForm({
  form: "HakAkses",
  enableReinitialize: true,
})(HakAkses)

export default connect(maptostate)(HakAkses);
