export default {
    namespaced: true,
    state: {
        users: []
    },
    mutations: {
        addUsers(state, newUser) {
            state.users.push(newUser)
            localStorage.setItem('users', JSON.stringify(state.users))
        },
        getUsers(state, arg) {
            state.users = arg
        },
        deleteUsers(state, arg) {
            state.users = arg
        }
    },
    actions: {

    },
    getters: {

    }
}