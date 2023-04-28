<template>
    <header>
        <div class="upper-header">
            <ul class="d-flex justify-content-end">
                <li>
                    <font-awesome-icon icon="user-circle" />
                    <a href="">My Account</a>
                </li>
            </ul>
        </div>
        <!-- Navbar -->
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <button
                    class="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbar"
                    aria-controls="navbarExample01"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <font-awesome-icon icon="bars" />
                </button>
                <div class="collapse navbar-collapse" id="navbar">
                    <router-link to="/" class="navbar-brand mt-2 mt-lg-0">
                        <img
                            :src="logoImage.url"
                            :height="logoImage.height"
                            rounded
                            :class="logoImage.class"
                            :loading="logoImage.loading"
                        />
                    </router-link>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li
                            class="nav-item"
                            v-for="navigationLink in navigationLinks"
                            :key="navigationLink.name"
                        >
                            <font-awesome-icon
                                class="text-dark"
                                :icon="navigationLink.icon"
                            />
                            <router-link
                                class="nav-link text-dark"
                                aria-current="page"
                                :to="navigationLink.slug"
                                >{{ navigationLink.name }}</router-link
                            >
                        </li>
                    </ul>
                    <div class="d-flex align-items-center">
                        <div class="dropdown">
                            <a
                                class="text-reset me-3 dropdown-toggle hidden-arrow"
                                href="#"
                                id="navbarDropdownMenuLink"
                                role="button"
                                data-mdb-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <font-awesome-icon
                                    class="text-dark"
                                    icon="heart"
                                    size="xl"
                                />
                                <span
                                    class="badge rounded-pill badge-notification bg-danger"
                                    >0</span
                                >
                            </a>
                            <ul
                                class="dropdown-menu dropdown-menu-end"
                                aria-labelledby="navbarDropdownMenuLink"
                            >
                                <li>
                                    <a class="dropdown-item" href="#"
                                        >My wishlist</a
                                    >
                                </li>
                            </ul>
                        </div>
                        <div class="dropdown">
                            <a
                                class="text-reset me-3 dropdown-toggle hidden-arrow"
                                href="#"
                                id="navbarDropdownMenuLink"
                                role="button"
                                data-mdb-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <font-awesome-icon
                                    class="text-dark"
                                    icon="bag-shopping"
                                    size="xl"
                                />
                                <span
                                    class="badge rounded-pill badge-notification bg-danger"
                                    >0</span
                                >
                            </a>
                            <ul
                                class="dropdown-menu dropdown-menu-end"
                                aria-labelledby="navbarDropdownMenuLink"
                            >
                                <li>
                                    <a class="dropdown-item" href="#"
                                        >Check My Cart</a
                                    >
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#"
                                        >Empty Cart</a
                                    >
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    data() {
        return {
            logoImage: {
                url: "https://thumbs.dreamstime.com/z/shop-building-colorful-isolated-white-33822015.jpg",
                height: "40",
                loading: "lazy",
                class: "logo",
            },
            navigationLinks: [
                {
                    name: "Home",
                    slug: "/",
                    icon: "home",
                },
                {
                    name: "About us",
                    slug: "/about",
                    icon: "circle-question",
                },
                {
                    name: "Shop",
                    slug: "/shop",
                    icon: "bag-shopping",
                },
            ],
        };
    },
};
</script>

<style>
.logo {
    border-radius: 50%;
}
.navbar-collapse {
    margin: 0 1.25rem;
    padding: 0.625rem 0;
}
.navbar-nav {
    display: flex;
    align-items: center;
    gap: 1.125rem;
}
.navbar-nav li {
    display: flex !important;
    align-items: center;
    gap: 0.125rem;
}
.navbar-nav li a,
.dropdown-menu li a {
    font-weight: 800;
}

.upper-header {
    background-color: black;
    color: #fff;
}

.upper-header ul {
    list-style: none;
    padding: 0.875rem;
    gap: 1.25rem;
}
.upper-header ul li {
    display: flex;
    gap: 0.3125rem;
}

.upper-header ul li a {
    color: #cccccc;
    font-size: 0.75rem;
}
</style>
