<template>
    <the-card>
        <template v-slot:card-image>
            <img :src="product.image" class="card-img-top" height="300" />
        </template>
        <template v-slot:card-body>
            <h5 class="card-title">
                {{ renderProductTitle(product.title) }}
            </h5>
            <p class="card-text">
                {{ renderProductDescription(product.description) }}
            </p>
        </template>
        <template v-slot:card-footer>
            <a href="#!" class="btn btn-outline-info btn-rounded">
                More
                <font-awesome-icon icon="arrow-right" />
            </a>
            <a href="#!" class="btn btn-info btn-rounded">
                add to wishlist
                <font-awesome-icon icon="heart" />
            </a>
        </template>
    </the-card>
</template>

<script>
export default {
    props: {
        product: Object,
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
};
</script>

<style scoped></style>
