<script setup lang="ts">
import { ref, watchEffect } from 'vue';

const props = defineProps<{
    placeholder?: string;
    onChange?: (value: string) => void;
}>();

defineEmits(['onchange']);
const showClearIcon = ref(false);
const inputValue = ref('');
watchEffect(() => {
	if (inputValue.value !== '') {
		showClearIcon.value = true;
	} else {
		showClearIcon.value = false;
	}
	if(props.onChange) {
		props.onChange(inputValue.value);
	}
},{flush: 'post'});

</script>
<template>
    <div class="searchbar">
        <svg class="search-icon" aria-hidden="true" viewBox="0 0 24 24">
            <path
                d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
            </path>
        </svg>
        <input type="text" :placeholder="props.placeholder" v-model="inputValue">
        <button v-if="showClearIcon" @click="inputValue = ''">
            <svg aria-hidden="true" viewBox="0 0 24 24">
                <path
                    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z">
                </path>
            </svg>
        </button>
    </div>
</template>
<style lang="scss">
@keyframes show {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
.searchbar {
    border: 2px solid transparent;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: var(--quaternary);
    border-radius: 4px;
    padding-left: 16px;
    width: 100%;
    max-width: 400px;
    transition: all 100ms ease-in-out;

    &:hover {
        opacity: 0.9;
    }

    &:focus-within .search-icon,
    &:focus-within .search-icon {
        border-color: var(--primary);
        fill: var(--primary);
    }

    svg {
        transition: all 100ms ease-in-out;
        height: 24px;
        width: 24px;
    }

    button {
        text-decoration: none;
        border-radius: 100%;
        background-color: transparent;
        border: none;
        outline: none;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 100ms ease-in-out;
        animation: show 50ms linear;
        &:hover {
            fill: var(--primary);
        }
    }
}



input {
    padding: 8px 16px;
    height: 100%;
    width: 100%;
    border: none;
    background-color: transparent;
    outline: none;
    color: var(--text-1);

    ::placeholder {
        color: var(--secondary);
    }

}

.search-icon {
    fill: var(--secondary);
}</style>