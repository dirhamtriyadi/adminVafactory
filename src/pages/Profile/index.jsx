import {PanelContent, React, useDispatch} from '../../components'
import FormProfile from './form'

const Profile = () => {
    const dispatch = useDispatch()
  return (
    <PanelContent menu="Profile">
        <FormProfile />
    </PanelContent>
  )
}

export default Profile