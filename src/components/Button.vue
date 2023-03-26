<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
    onClick: {
        required: false,
        type: Function,
    },
    color: {
        required: false,
        type: String,
        default: 'primary',
    },
    variant: {
        required: false,
        type: String,
        default: 'contained',
    },
})

const variant = ref('contained-')
const color = ref('primary')

if (props.variant === 'outlined') {
    variant.value = 'outlined-'
}

if (props.color === 'secondary') {
    color.value = 'secondary'
}
</script>
<template>
    <button v-on:click="props.onClick? props.onClick($event) : undefined " v-bind:class="variant+color">
        <slot></slot>
    </button>
</template>

<style scoped>

button {
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14);
    min-width: 64px;
    padding: 6px 16px;
    border-radius: 4px;
    text-transform: uppercase;
    transition: all 100ms ease-in-out;
}
button:hover {
    opacity: 0.8;
    cursor: pointer;
}
button:active {
    opacity: 0.6;
}

</style>