<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
    name?: string;
    width?: 'small' | 'large'
    type?: HTMLInputElement['type'];
    required?: boolean;
    placeholder?: HTMLInputElement['placeholder'];
    label?: string;
    startIcon?: string;
    endIcon?: string;
    modelValue?: string;
}>();
defineEmits(['update:modelValue']);
const error = ref(false);
const onBlur = (e: Event) => {
	const target = e.target as HTMLInputElement;
	if (target.value === '') {
		target.parentElement?.classList.add('error-field');
		error.value = true;
		return;
	}
	error.value = false;
	target.parentElement?.classList.remove('error-field');

};

</script>
<template>
  <div class="input-container">
    <label
      v-if="required"
      for="input"
    >{{ label }}*</label>
    <label
      v-else
      for="input"
    >{{ label }}</label>
    <div
      class="input-field"
      :class="width === 'small' ? 'small' : ''"
    >
      <span v-if="startIcon">{{ startIcon }}</span>
      <input 
        :value="modelValue" 
        :required="required"
        :type="type" 
        :placeholder="placeholder"
        @input="$emit('update:modelValue', $event.target.value)"
        @blur="required ? onBlur($event) : undefined"
      >
      <span v-if="endIcon">{{ endIcon }}</span>
    </div>
    <span
      v-if="error"
      class="error-message"
    ><i>Required field missing.</i></span>
  </div>
</template>

<style lang="scss" scoped>
@import '../styles/input.scss';
</style>