export const simpanDataUsers = () => {
    return async  (dispatch, getState) => {
        const state = getState();
        const selected = state.form.FormDataUsers?.values;
        console.log(state.utility.isEdit)
        console.log(selected)
    }
}

