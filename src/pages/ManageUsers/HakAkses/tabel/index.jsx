import { Tabel, utilityActions, useDispatch,selectorMaster, useEffect, masterActions } from "../../../../components"

const TabelHakAkses = () => {
    const dispatch = useDispatch()
    const data = useSelector(selectorMaster.getDataUsers)

    useEffect(() => {
        dispatch(masterActions.getDataUsers())
    }, [dispatch])

    const columns = [
        {
            dataField: "name",
            text: "Role"
        },
        {
            dataField: "status",
            text: "Status"
        },
        {
            dataField: "action",
            text: "Action",
        }
    ]

    const showModal = (data, isEdit) => {
        dispatch(utilityActions.getDataEdit(data))
        dispatch(utilityActions.showModal())
        dispatch(utilityActions.isEdit(isEdit))
    }

  return (
    <div>TabelHakAkses</div>
  )
}

export default TabelHakAkses