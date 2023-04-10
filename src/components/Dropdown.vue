<script setup lang="ts">
defineProps<{
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
      class="dropdown input-field"
      :class="width === 'small'? 'small': ''"
    >
      <span>{{ startIcon }}</span>
      <select
        :value="modelValue || placeholder"
        :required="required"
        @input="$emit('update:modelValue', $event.target.value)"
      >
        <option
          selected
          disabled
        >
          {{ placeholder }}
        </option>
        <slot />
      </select>
      <span>{{ endIcon }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../styles/input.scss';
</style>