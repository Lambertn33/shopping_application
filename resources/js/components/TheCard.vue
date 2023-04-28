<template>
    <div class="card">
        <slot name="card-image"></slot>
        <div class="card-body">
            <slot name="card-body"> </slot>
        </div>
        <div class="card-footer">
            <slot name="card-footer"> </slot>
        </div>
    </div>
</template>

<script>
export default {
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
