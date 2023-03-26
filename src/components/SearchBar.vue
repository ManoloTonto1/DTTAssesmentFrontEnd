<script setup lang="ts">
const props = defineProps({
    placeholder: {
        required: false,
        type: String,
        default: 'Search',
    },
    onchange: {
        required: false,
        type: Function,
    },
})
</script>
<template>
        <div class="searchbar">
            <svg class="search-icon"
                aria-hidden="true" viewBox="0 0 24 24" >
                <path
                    d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
                </path>
            </svg>
            <input type="text" :placeholder="props.placeholder" :onchange="onchange">
        </div>
</template>
<style lang="scss">

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

    &:hover{
        opacity: 0.9;
    }
    &:focus-within .search-icon,
    &:focus-within{
        border-color: var(--primary);
        fill: var(--primary);
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
    ::placeholder{
    color: var(--secondary);
    }

}
.search-icon {
    transition: all 100ms ease-in-out;
    fill: var(--secondary);
    height: 24px;
    width: 24px;
}
</style>