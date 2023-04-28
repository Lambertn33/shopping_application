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

<style>
.card-footer {
    display: flex;
    justify-content: space-evenly;
}
</style>
