<script setup lang="ts">
defineProps<{
    width?: 'small' | 'large'
    type?: HTMLInputElement['type'];
    required?: boolean;
    placeholder?: HTMLInputElement['placeholder'];
    label?: string;
    startIcon?: string;
    endIcon?: string;
    defaultValue?: string;
}>();

</script>
<template>
    <div class="input-container">
        <label for="input" v-if="required">{{ label }}*</label>
        <label for="input" v-else>{{ label }}</label>
        <div class="dropdown input-field" :class="width === 'small'? 'small': ''">
            <span>{{ startIcon }}</span>
            <select :value="defaultValue || placeholder" :required="required">
                <option selected disabled>{{ placeholder }}</option>
                <slot></slot>
            </select>
            <span>{{ endIcon }}</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../styles/input.scss';
</style>