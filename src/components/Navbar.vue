<script setup lang="ts">
import Button from './Button.vue';
import logo from '../assets/logo.png';
function log() {
    console.log('nihha')
}
</script>

<template>
    <nav>
        <div class="container">
            <ul>
                <li><a href="/"><img :src="logo" alt="DTT-Logo"></a></li>
                <li><a href="houses">Houses</a></li>
                <li><a href="about">About</a></li>
            </ul>
        </div>
    </nav>
</template>

<style>
nav {
    background-color: var(--bg-2);
    width: 100vw;
    height: 64px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14);
}

ul {
    padding-left: 0;
    display: flex;
    align-items: center;
    margin: 0;
    height: 100%;
}
li, a > img {
    padding-right: 1rem;
    padding-left: 1rem;
    display: flex;
    align-items: center;
    list-style: none;
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-1);
}

a {
    text-decoration: none;
    color: var(--text-1);
}

img {
    height: 100%;
    width: 100px;
    margin-left: 20px;
}</style>