import axios from "axios";

const productsUrl = "https://fakestoreapi.com";

class ProductsServices {
    getLatestProductsByDate() {
        return axios.get(`${productsUrl}/products?limit=5&sort=desc`);
    }
}

export default new ProductsServices();
