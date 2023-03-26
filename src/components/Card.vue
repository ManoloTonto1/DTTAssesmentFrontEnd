<script setup lang="ts">
defineProps({
    img: {
        required: true,
        type: String,
    },
    title: {
        required: true,
        type: String,
    },
    price: {
        required: true,
        type: Number,
    },
    size: {
        required: true,
        type: Number,
    },
    rooms: {
        required: true,
        type: Number,
    },
    location: {
        required: true,
        type: String,
    },

})
function FormatPrice(price: number) {
    return price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
}
</script>

<template>
    <div class="card">
        <div class="card-img">
            <img :src="img" :alt="title">
        </div>
        <div class="card-content">
            <h2>{{ title }}</h2>
            <p>€ {{ FormatPrice(price) }} </p>
            <p class="subtitle-text">{{ location }} </p>
            <p>{{ size }} m²</p>
            <p>{{ rooms }} rooms</p>
        </div>
    </div>
</template>

<style lang="scss">

.card {
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: flex;
    width: inherit;
    padding: 1rem;
    border-radius: 4px;
    background-color: var(--bg-2);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.2s ease-in-out;
    &:hover {
            cursor: pointer;
            opacity: 0.8;
            box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }

}

.card-img {
    height: 200px;
    width: 200px;
    border-radius: 4px;
    overflow: hidden;

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
}

.card-content {
    height: inherit;
    padding-left: 1rem;
    padding-top: 1rem;
}
</style>