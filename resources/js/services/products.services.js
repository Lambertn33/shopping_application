import axios from "axios";

const productsUrl = "https://fakestoreapi.com";

class ProductsServices {
    getLatestProductsByDate() {
        return axios.get(`${productsUrl}/products?limit=4&sort=desc`);
    }

    getLatestProductsByBestSale() {
        return axios.get(`${productsUrl}/products?limit=8&sort=asc`);
    }
    getLatestElectronicProducts() {
        return axios.get(
            `${productsUrl}/products/category/electronics?limit=4`
        );
    }
}

export default new ProductsServices();
