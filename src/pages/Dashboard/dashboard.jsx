import { React, Link, useEffect, useState, useDispatch, useSelector, masterActions, selectorMaster } from "../../components";

const Dashboard = () => {
  const dispatch = useDispatch();
  const getDataCash = useSelector(selectorMaster.getDataCash);
  const getDataCashAll = useSelector(selectorMaster.getDataCashAll);
  const [uangMasuk, setUangMasuk] = useState(0);
  const [uangKeluar, setUangKeluar] = useState(0);
  const [uangCash, setUangCash] = useState(0);
  const [uangTransfer, setUangTransfer] = useState(0);

  useEffect(() => {
    dispatch(masterActions.getDataCash());
    dispatch(masterActions.getDataCashAll());
  }, [dispatch])

  useEffect(() => {
    setUangMasuk(0);
    setUangKeluar(0);
    getDataCash.map((item) => {
      if (item.cash_flow_type === "UANGMASUK") {
        console.log(item.amount);
        setUangMasuk((uangMasuk) => uangMasuk + item.amount);
      } else {
        setUangKeluar((uangKeluar) => uangKeluar + item.amount);
      }
    })
    setUangCash(0);
    setUangTransfer(0);
    getDataCashAll.map((item) => {
      if (item.payment_method?.name === "CASH") {
        console.log(item.amount);
        setUangCash((uangCash) => uangCash + item.amount);
      } else {
        setUangTransfer((uangTransfer) => uangTransfer + item.amount);
      }
    })
  }, [getDataCash, getDataCashAll]);
  
  console.log("ini di dashboard", getDataCash);

  return (
    <div>
        <ol className="breadcrumb float-xl-right">
          <li className="breadcrumb-item">
            <Link to="/dashboard/v1">Home</Link>
          </li>
          <li className="breadcrumb-item active">Dashboard</li>
        </ol>
        <h1 className="page-header">
          Dashboard <small>header small text goes here...</small>
        </h1>

        <div className="row">
          <div className="col-xl-3 col-md-6">
            <div className="widget widget-stats bg-red">
              <div className="stats-icon">
                <i className="fas fa-money-bill-alt"></i>
              </div>
              <div className="stats-info">
                <h4>CASH IN</h4>
                <p>Rp. {Number(uangMasuk || 0)?.toLocaleString("kr-KO") || 0}</p>
              </div>
              <div className="stats-link">
                <Link to="/uang-kas">
                  View Detail <i className="fa fa-arrow-alt-circle-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="widget widget-stats bg-orange">
              <div className="stats-icon">
                <i className="fas fa-money-bill-alt"></i>
              </div>
              <div className="stats-info">
                <h4>CASH OUT</h4>
                <p>Rp. {Number(uangKeluar || 0)?.toLocaleString("kr-KO") || 0}</p>
              </div>
              <div className="stats-link">
                <Link to="/uang-kas">
                  View Detail <i className="fa fa-arrow-alt-circle-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="widget widget-stats bg-grey-darker">
              <div className="stats-icon">
                <i className="fas fa-money-bill-alt"></i>
              </div>
              <div className="stats-info">
                <h4>Total Uang Cash</h4>
                <p>Rp. {Number(uangCash || 0)?.toLocaleString("kr-KO")}</p>
              </div>
              <div className="stats-link">
                <Link to="/order-transaction">
                  View Detail <i className="fa fa-arrow-alt-circle-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="widget widget-stats bg-black-lighter">
              <div className="stats-icon">
                <i className="fas fa-money-bill-alt"></i>
              </div>
              <div className="stats-info">
                <h4>Total Uang Transfer</h4>
                <p>Rp. {Number(uangTransfer || 0)?.toLocaleString("kr-KO")}</p>
              </div>
              <div className="stats-link">
                <Link to="/order-transaction">
                  View Detail <i className="fa fa-arrow-alt-circle-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Dashboard