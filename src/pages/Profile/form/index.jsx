import { React, Field, HiidenFiled, ReanderField, reduxForm, useSelector, selectorUtility, useDispatch, masterActions, getItem, useEffect, connect } from '../../../components'
import { simpanDataProfile } from '../redux'

let FormProfile = ({pristine, submitting}) => {
    const dispatch = useDispatch()
    const isLoading = useSelector(selectorUtility.isLoading)

    useEffect(() => {
        dispatch(masterActions.getDataProfile(getItem('userdata').id))
    }, [dispatch])

  return (
    <div>
        <div className="row">
            <Field
                name="id"
                component={HiidenFiled}
                type="hidden"
                label="id"
                // readOnly={isEdit}
            />
            <div className="col-12">
                <Field
                    name="name"
                    component={ReanderField}
                    type="text"
                    label="Nama"
                />
            </div>
            <div className="col-12">
                <Field
                    name="email"
                    component={ReanderField}
                    type="email"
                    label="Email"
                />
            </div>
            <div className="col-12">
                <Field
                    name="password"
                    component={ReanderField}
                    type="password"
                    label="Password"
                />
            </div>
            <div className="col-12">
                <Field
                    name="password_confirmation"
                    component={ReanderField}
                    type="password"
                    label="Konfirmasi Password"
                />
            </div>
            <div className="col-12 text-right">
                <button className="btn btn-primary mt-3" disabled={pristine || submitting || isLoading} onClick={() => dispatch(simpanDataProfile())}>Simpan</button>
            </div>
        </div>
    </div>
  )
}

const maptostate = (state) => {
    return {
        initialValues: {
            id: state.master.getDataProfile[0]?.id,
            name: state.master.getDataProfile[0]?.name,
            email: state.master.getDataProfile[0]?.email,
        }
    }
}

FormProfile = reduxForm({
    form: 'FormProfile',
    enableReinitialize: true,
})(FormProfile)

export default connect(maptostate)(FormProfile)