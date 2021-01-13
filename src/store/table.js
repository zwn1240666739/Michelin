export default {
    namespaced: true,
    state: {
        Id: 1,
        tableData: [],
        tablePosition: [],
        tableType: []
    },
    mutations: {
        setData(state, val) {
            state.tableData.push(val)
            state.Id++
        },
        setPosition(state, arg) {
            state.tablePosition = arg
        },
        setType(state, arg) {
            state.tableType = arg
        }
    },
    actions: {

    },
    getters: {

    }
}