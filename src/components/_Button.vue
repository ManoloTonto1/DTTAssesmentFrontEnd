<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
	onClick?: (event: MouseEvent) => void;
	color?: 'primary' | 'secondary'
	variant?: 'contained' | 'outlined';
	disabled?: boolean;
}>();

const variant = ref(props.variant || 'contained-');
const color = ref(props.color || 'primary');

if (props.variant === 'outlined' || props.variant === undefined ) {
	variant.value = 'outlined-';
}

if (props.color === 'secondary') {
	color.value = 'secondary';
}

</script>
<template>
  <button 
    class="button"
    :class="variant+color"
    :disabled="disabled"
    @click="props.onClick? props.onClick($event) : undefined "
  >
    <slot />
  </button>
</template>

<style scoped lang="scss">
button:disabled  {
  box-shadow: none;
  pointer-events: none;
  opacity: 0.4;
  cursor: not-allowed;
}
</style>
