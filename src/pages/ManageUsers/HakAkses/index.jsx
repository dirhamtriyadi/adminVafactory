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
} from "../../../components";
import Menu from "../../../components/sidebar/menu";
// import { useEffect, useState } from "react";
import "react-sortable-tree/style.css"; // This only needs to be imported once in your app

let HakAkses = () => {
  const [treeDataM, setTreeData] = useState([]);
  const [setcurrentNode] = useState([]);
  const [aktif,setAktif] = useState(true);

  useEffect(() => {
    setTreeData(Menu);
  }, []);

  const selectThis = (node, path) => {
    setcurrentNode({
      node,
      path: path,
    });
  };
  const getNodeKey = ({ treeIndex }) => treeIndex;
  const getDataUsers = ()=>{
    setAktif(true)
  }
  return (
    <PanelContent menu="Hak Akses Users" submenu="Manage Users">
      <div className="row">
        <div className="col-6">
          <Field
            name="user_id"
            label="Pilih User Id"
            placeholder="Masukan User Id"
            onChange={()=>getDataUsers()}
            options={[]}
            component={ReanderSelect}
          />
        </div>
        <div className="col-6" >
          <div style={{ height: 500 }}>
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
          </div>
        </div>
      </div>
    </PanelContent>
  );
};

HakAkses = reduxForm({
  form: "HakAkses",
  enableReinitialize: true,
})(HakAkses);
export default connect(null)(HakAkses);
