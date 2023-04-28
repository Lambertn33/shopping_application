import productsServices from "../services/products.services";

export const productsStore = {
    state: {
        latestProductsByDate: [],
    },

    actions: {
        getLatestProductsByDate({ commit }) {
            return productsServices.getLatestProductsByDate().then(
                response => {
                    commit("setLatestProductsByDate", response);
                    return Promise.resolve(response);
                },
                error => {
                    return Promise.reject(error);
                }
            );
        },
    },
    mutations: {
        setLatestProductsByDate(state, products) {
            state.latestProductsByDate = products;
        },
    },

    getters: {
        getLatestProductsByDate(state) {
            return state.latestProductsByDate;
        },
    },
};
