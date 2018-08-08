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

const mutations = {
    'updateRoute': (route) => {
        state.name = route.name
        state.breadcrumb = route.breadcrumb
    }
}

export default {
    state,
    getters,
    mutations
}