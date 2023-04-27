<template>
    <div class="mt-4 p-4">
        <h2 class="text-center">Latest Products</h2>
        <ul class="nav nav-tabs mb-3" id="myTab0" role="tablist">
            <li class="nav-item" role="presentation">
                <button
                    class="nav-link active"
                    id="home-tab0"
                    data-mdb-toggle="tab"
                    data-mdb-target="#home0"
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
                id="home0"
                role="tabpanel"
                aria-labelledby="home-tab0"
            >
                Tab 1 content.
            </div>
            <div
                class="tab-pane fade"
                id="profile0"
                role="tabpanel"
                aria-labelledby="profile-tab0"
            >
                Tab 2 content
            </div>
            <div
                class="tab-pane fade"
                id="contact0"
                role="tabpanel"
                aria-labelledby="contact-tab0"
            >
                Tab 3 content
            </div>
        </div>
        <!-- <div class="row">
            <div class="col-md-3">
                <div class="card">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
                        class="card-img-top"
                        alt="Fissure in Sandstone"
                    />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                        </p>
                        <a href="#!" class="btn btn-primary">Button</a>
                    </div>
                </div>
            </div>
        </div> -->
    </div>
</template>
