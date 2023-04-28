<template>
    <footer class="text-center text-lg-start bg-info text-muted">
        <section class="">
            <div class="container text-center text-md-start mt-5">
                <div class="row mt-3">
                    <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <h6 class="text-uppercase fw-bold mb-4">
                            <font-awesome-icon icon="gem" />  Company name
                        </h6>
                        <p>
                            Here you can use rows and columns to organize your
                            footer content. Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit.
                        </p>
                    </div>
                    <div
                        class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4"
                    >
                        <!-- Links -->
                        <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                        <p>
                            <font-awesome-icon icon="home" /> KIGALI RWANDA
                        </p>
                        <p>
                            <font-awesome-icon icon="envelope" />
                            lambertn33.ln@gmail.com
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <div
            class="text-center p-4 text-light"
            style="background-color: rgba(0, 0, 0, 0.05)"
        >
            © {{ currentYear }} Designed by:
            <a class="text-reset fw-bold" href="https://nsengimanalambert.netlify.com/"
                >Lambert NSENGIMANA</a
            >
        </div>
    </footer>
</template>

<script>
    export default {
        data() {
            return {
                currentYear: new Date().getFullYear()
            }
        }
    }
</script>

<style scoped>

footer section {
    padding: 1rem 0;
    color: #fff;
    font-weight: 600;
    font-size: 1rem;
}
</style>
