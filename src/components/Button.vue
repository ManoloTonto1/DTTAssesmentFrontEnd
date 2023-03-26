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