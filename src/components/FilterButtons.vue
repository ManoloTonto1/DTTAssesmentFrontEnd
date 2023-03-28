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
});

</script>

<template>
<div>
    <button 
    v-on:click="setSelected('price')"
    :disabled="selected === 'price'"
    class="contained-primary button"
    :class="selected !== 'price' ? 'grey' : ''"
    >
    Price
    </button>
    <button
    v-on:click="setSelected('size')"
    :disabled="selected === 'size'"
    class="contained-primary button"
    :class="selected !== 'size' ? 'grey' : ''"
    >
    Size
    </button>
</div>

</template>
<style scoped lang="scss">
button{
    padding-left: 2rem;
    padding-right: 2rem;

    &:first-child{
        border-radius: 4px 0 0 4px;
    }
    &:last-child{
        border-radius: 0 4px 4px 0;
    }
    &:disabled{
    pointer-events: none;
    cursor: not-allowed;
    }
}
.grey {
    box-shadow: none;
    opacity: 0.4; 
}
</style>