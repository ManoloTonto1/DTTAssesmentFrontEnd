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
        default: 'contained-',
    },
    disabled: {
        required: false,
        type: Boolean,
        default: false,
    },
})

const variant = ref(props.variant)
const color = ref(props.color)

if (props.variant === 'outlined') {
    variant.value = 'outlined-'
}

if (props.color === 'secondary') {
    color.value = 'secondary'
}

</script>
<template>
    <button 
    v-on:click="props.onClick? props.onClick($event) : undefined "
     v-bind:class="variant+color"
        v-bind:disabled="disabled"
     >
        <slot></slot>
    </button>
</template>

<style scoped>

button {
    font-size: large;
    font-weight: 500;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14);
    min-width: 64px;
    padding: 8px 24px;
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
button:disabled  {
    box-shadow: none;
    pointer-events: none;
    opacity: 0.4;
    cursor: not-allowed;
}
</style>