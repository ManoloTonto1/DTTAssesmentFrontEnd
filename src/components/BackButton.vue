<script setup lang="ts">
import { useRouter } from 'vue-router';
import ArrowBack from '../assets/arrow_back.png';

const router = useRouter();

const handleGoBack = () => {
	router.go(-1);
};
</script>

<template>
    <button class="flex-container" v-on:click="handleGoBack">
        <img :src="ArrowBack" alt="arrowBack">
        Back to overview
    </button>
</template>

<style lang="scss" scoped>
    .flex-container{
        background-color: transparent;
        display: flex;
        align-items: center;
        cursor: pointer;
        font-weight: bold;
    }
    img{
        padding-right: 1rem;
        height: 24px;
        width: 24px;
    }
</style>