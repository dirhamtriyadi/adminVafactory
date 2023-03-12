//Mendaftarkan reducer / Menggabungkan
import { combineReducers } from "redux";
import { reducer as formReducer} from 'redux-form'
import utility from './reducers/utility';
import master from './reducers/master';
import penjualan from "./reducers/penjualan";
export default combineReducers({
    penjualan,
    master,
    utility,
    form: formReducer,
});