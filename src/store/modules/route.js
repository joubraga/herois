const state = {
    name: '',
    breadcrumb: ''
}

const getters = {
    name: state => state.name,
    breadcrumb (state) {
        return state.breadcrumb
    }
}

export default {
    state,
    getters
}