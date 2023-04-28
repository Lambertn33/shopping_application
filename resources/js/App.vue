<template>
    <div class="main">
        <TheHeader />
        <router-view />
        <TheFooter />
    </div>
</template>

<script>
import HomeView from "./components/home/HomeView.vue";
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
export default {
    data() {
        return {
            latestProductsByDate:[]
        }
    },
    components: {
        TheHeader,
        HomeView,
        TheFooter
    },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");
.main {
    font-family: "Poppins", sans-serif;
}
</style>
