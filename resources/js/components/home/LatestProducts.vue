<template>
    <div class="mt-4 latestProducts">
        <h2 class="text-center">Latest Products</h2>
        <ul class="nav nav-tabs mb-3" id="myTab0" role="tablist">
            <li class="nav-item" role="presentation">
                <button
                    class="nav-link active"
                    id="home-tab0"
                    data-mdb-toggle="tab"
                    data-mdb-target="#latestProducts"
                    type="button"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                >
                    Latest Products
                </button>
            </li>
            <li class="nav-item" role="presentation">
                <button
                    class="nav-link"
                    id="profile-tab0"
                    data-mdb-toggle="tab"
                    data-mdb-target="#profile0"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                >
                    Best Sale
                </button>
            </li>
            <li class="nav-item" role="presentation">
                <button
                    class="nav-link"
                    id="contact-tab0"
                    data-mdb-toggle="tab"
                    data-mdb-target="#contact0"
                    type="button"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                >
                    Electronics
                </button>
            </li>
        </ul>
        <div class="tab-content" id="myTabContent0">
            <div
                class="tab-pane fade show active"
                id="latestProducts"
                role="tabpanel"
                aria-labelledby="home-tab0"
            >
                <the-spinner v-if="isFetching" />
                <div class="row" v-else>
                    <div
                        class="col-md-3 pb-4"
                        v-for="product in latestProductsByDate"
                        :key="product.id"
                    >
                        <LatestDetails :product="product" />
                    </div>
                </div>
            </div>
            <div
                class="tab-pane fade"
                id="profile0"
                role="tabpanel"
                aria-labelledby="profile-tab0"
            >
                <the-spinner v-if="isFetching" />
                <div class="row" v-else>
                    <div
                        class="col-md-3 pb-4"
                        v-for="product in latestProductsByBestSale"
                        :key="product.id"
                    >
                        <LatestDetails :product="product" />
                    </div>
                </div>
            </div>
            <div
                class="tab-pane fade"
                id="contact0"
                role="tabpanel"
                aria-labelledby="contact-tab0"
            >
                <the-spinner v-if="isFetching" />
                <div class="row" v-else>
                    <div
                        class="col-md-3 pb-4"
                        v-for="product in latestElectronicProducts"
                        :key="product.id"
                    >
                        <LatestDetails :product="product" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LatestDetails from "./LatestDetails.vue";
export default {
    components: {
        LatestDetails,
    },
    data() {
        return {
            isFetching: false,
            latestProductsByDate: [],
            latestProductsByBestSale: [],
            latestElectronicProducts: [],
        };
    },

    methods: {
        async getLatestProducts() {
            this.isFetching = true;
            const latestProductsByDateResponse = await this.$store.dispatch(
                "getLatestProductsByDate"
            );
            const latestProductsByBestSaleResponse = await this.$store.dispatch(
                "getLatestProductsByBestSale"
            );
            const latestElectronicProductsResponse = await this.$store.dispatch(
                "getLatestElectronicProducts"
            );
            

            const { data: latestProductsByDate } = latestProductsByDateResponse;
            const { data: latestProductsByBestSale } =
                latestProductsByBestSaleResponse;
            const { data: latestElectronicProducts } =
                latestElectronicProductsResponse;

            this.$store.commit("setLatestProductsByDate", latestProductsByDate);
            this.$store.commit(
                "setLatestProductsByBestSale",
                latestProductsByBestSale
            );
            
            this.$store.commit(
                "setLatestElectronicProducts",
                latestElectronicProducts
            );

            this.latestProductsByDate = latestProductsByDate;
            this.latestElectronicProducts = latestElectronicProducts;
            this.latestProductsByBestSale = latestProductsByBestSale.reverse();
            this.isFetching = false;
        },
    },

    computed: {
        renderProductTitle() {
            return (title) =>
                title.length > 20 ? `${title.substr(0, 20)} ...` : title;
        },
        renderProductDescription() {
            return (description) =>
                description.length > 105
                    ? `${description.substr(0, 105)} ...`
                    : description;
        },
    },

    mounted() {
        this.getLatestProducts();
    },
};
</script>

<style scoped>
.card-img-top {
    padding: 1.75rem;
}
.card-title {
    font-weight: 700;
}
.card-text {
    font-size: 0.8125rem;
}
.card-footer {
    display: flex;
    justify-content: space-evenly;
}
.latestProducts {
    padding: 1rem 4rem;
}
</style>
