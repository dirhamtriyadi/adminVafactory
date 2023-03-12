const showModal = (state) => state.utility.showModal
const hideModal = (state) => state.utility.hideModal
const isEdit = (state) => state.utility.isEdit
const isLoading = (state) => state.utility.setLoading
const getDataEdit = (state) => state.utility.getDataEdit
const isLoadingTabel = (state) => state.utility.setLoadingTabel
const showModalBanyak = (state) => state.utility.showModalBanyak
const isExport = (state) => state.utility.isExport
const setForm = (state) => state.utility.setForm

const selectorUtility = {
    showModal,
    hideModal,
    isEdit,
    getDataEdit,
    isLoading,isLoadingTabel,
    showModalBanyak,
    isExport,
    setForm,
}

export default selectorUtility