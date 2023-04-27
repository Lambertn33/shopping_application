<template>
    <div class="main">
        <TheHeader />
        <router-view />
    </div>
</template>

<script>
import HomeView from "./components/home/HomeView.vue";
import TheHeader from "./components/TheHeader.vue";
export default {
    components: {
    TheHeader,
    HomeView
},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");
.main {
    font-family: "Poppins", sans-serif;
}
</style>
