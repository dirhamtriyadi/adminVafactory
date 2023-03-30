import { selectorUtility, React, useSelector, Field, HiidenFiled, ReanderField, useDispatch, reduxForm, connect, useEffect } from "../../../components"
import { simpanDataTracking } from "../redux"

let FormDataTracking = ({pristine, submitting}) => {
    const dispatch = useDispatch()

    const isEdit = useSelector(selectorUtility.isEdit)
    const isLoading = useSelector(selectorUtility.isLoading)
    useEffect(() => {
        document.getElementById('name').focus()
    }, [isEdit])

  return (
    <div className="row">
        {isEdit ? (
            <>
                <Field
                    name="id"
                    component={HiidenFiled}
                    type="hidden"
                    label="id"
                    readOnly={isEdit}
                />
            </>
        ) : null}
        <div className="col-12">
            <Field
                id="name"
                name="name"
                component={ReanderField}
                type="text"
                label="Nama Tracking"
                placeholder="Masukan Nama Tracking"
            />
        </div>
        <div className="col-12">
            <Field
                name="description"
                component={ReanderField}
                type="text"
                label="Deskripsi"
                placeholder="Masukan Deskripsi"
            />
        </div>
        <div className="col-12 text-rig">
            <button className="btn btn-primary" type="button" onClick={() => dispatch(simpanDataTracking())} disabled={pristine || submitting || isLoading}>
                {isLoading ? (
                    <>
                        <i className="fa fa-spinner fa-spin mr-2" />
                        Loading...
                    </>
                ) : (
                    <>
                        Simpan
                    </>
                )}
            </button>
        </div>
    </div>
  )
}

const maptostate = (state) => {
    // console.log(state.utility.getDataEdit);
    if (state.utility.getDataEdit !== null) {
        return {
            initialValues: {
                id: state.utility.getDataEdit.id,
                name: state.utility.getDataEdit.name,
                description: state.utility.getDataEdit.description,
            },
        }
    }
}

FormDataTracking = reduxForm({
    form: "FormDataTracking",
    enableReinitialize: true,
})(FormDataTracking)

export default connect(maptostate)(FormDataTracking)