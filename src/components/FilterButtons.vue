<script setup lang="ts">

defineProps({
    selected : {
        required: true,
        type: String,
        default: 'price'
    },
    setSelected : {
        required: true,
        type: Function,
    }
})

</script>

<template>
<div>
    <button 
    v-on:click="setSelected('price')"
    :disabled="selected === 'price'"
    class="contained-primary">
    Price
    </button>
    <button
    v-on:click="setSelected('size')"
    :disabled="selected === 'size'"
    class="contained-primary">
    Size
    </button>
</div>

</template>
<style scoped>
button{
    padding-left: 2rem;
    padding-right: 2rem;
}
   button:first-child {
    border-radius: 4px 0 0 4px;
   } 
   button:last-child {
    border-radius: 0 4px 4px 0;
   }
</style>