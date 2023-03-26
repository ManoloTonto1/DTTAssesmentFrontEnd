<script lang="ts">
import { ref } from 'vue';


const selected = ref('price')
export default {
    setup() {
        return {
            selected
        }
    }
}
</script>

<template>
<div>
    <button 
    v-on:click="selected = 'price'"
    :disabled="selected === 'price'"
    class="contained-primary">
    Price
    </button>
    <button
    v-on:click="selected = 'size'"
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