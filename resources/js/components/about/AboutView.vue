<template>
    <div class="bg-info about-banner">
        <h2 class="text-center text-light pt-4">About us</h2>
    </div>
    <div class="bg-light about-section"></div>
    <div class="about-modal">
        <div class="about-content bg-light">
            <div>
                <h3 class="about-content-header">WHO WE ARE</h3>
                Lorem ipsum dolor sit amet <span class="text-info"><b>consectetur adipisicing</b></span> elit. Eum cum
                reiciendis, dolor natus, dicta nam blanditiis obcaecati sed,
                expedita animi nesciunt praesentium mollitia consequuntur
            </div>
            <hr>
            <div>
                <h3 class="about-content-header">MISSION & VISION</h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum cum
                reiciendis, dolor natus, dicta nam blanditiis obcaecati sed,
                expedita animi nesciunt praesentium mollitia consequuntur
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum cum
                reiciendis, dolor natus, dicta nam blanditiis obcaecati sed,
                expedita animi nesciunt praesentium mollitia consequuntur
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum cum
                reiciendis, dolor natus, dicta nam blanditiis obcaecati sed,
                expedita animi nesciunt praesentium mollitia consequuntur
            </div>
        </div>
    </div>
</template>

<style scoped>
.about-banner,
.about-section {
    height: 18.75rem;
}
.about-banner h2 {
    text-transform: uppercase;
    font-weight: 700;
}
.about-content {
    width: 70%;
    position: absolute;
    top: 18.75rem;
    padding: 2.5rem;
    border-radius: 0.625rem;
    box-shadow: 0.3125rem 0.625rem 0.5rem #888888;
}

.about-content-header {
    font-weight: 600;
}

.about-modal {
    display: flex;
    justify-content: center;
}
</style>
