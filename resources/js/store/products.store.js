import productsServices from "../services/products.services";

export const productsStore = {
    state: {
        latestProductsByDate: [],
        latestProductsByBestSale: [],
        latestElectronicProducts: [],
    },

    actions: {
        getLatestProductsByDate({ commit }) {
            return productsServices.getLatestProductsByDate().then(
                response => {
                    return Promise.resolve(response);
                },
                error => {
                    return Promise.reject(error);
                }
            );
        },
        getLatestProductsByBestSale({ commit }) {
            return productsServices.getLatestProductsByBestSale().then(
                response => {
                    return Promise.resolve(response);
                },
                error => {
                    return Promise.reject(error);
                }
            );
        },
        getLatestElectronicProducts({ commit }) {
            return productsServices.getLatestElectronicProducts().then(
                response => {
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
        setLatestProductsByBestSale(state, products) {
            state.latestProductsByBestSale = products;
        },
        setLatestElectronicProducts(state, products) {
            state.latestElectronicProducts = products;
        },
    },

    getters: {
        getLatestProductsByDate(state) {
            return state.latestProductsByDate;
        },
        getLatestProductsByBestSale(state) {
            return state.latestProductsByBestSale;
        },
        getLatestElectronicProducts(state) {
            return state.latestElectronicProducts;
        },
    },
};
