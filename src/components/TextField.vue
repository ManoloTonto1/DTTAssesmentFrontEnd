<script setup lang="ts">
defineProps<{
    name?: string;
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
        <div class="input-field" :class="width === 'small'? 'small': ''">
            <span v-if="startIcon">{{ startIcon }}</span>
            <input :value="defaultValue" :required="required" :type="type" :placeholder="placeholder">
            <span v-if="endIcon">{{ endIcon }}</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../styles/input.scss';
</style>