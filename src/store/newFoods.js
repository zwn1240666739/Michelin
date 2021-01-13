export default {
    namespaced: true,
    state: {
        foodsList: [],
        id: 100001
    },
    mutations: {
        addFoods(state, newFoodsList) {
            state.foodsList.push(newFoodsList)
            localStorage.setItem('foodsList', JSON.stringify(state.foodsList))
            state.id++
        },
        toFoodsList(state, arg) {
            state.foodsList = arg
        }
    },
    actions: {

    },
    getters: {

    }
}