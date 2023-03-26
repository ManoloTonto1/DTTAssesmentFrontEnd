<script setup lang="ts">
import Button from './Button.vue';
import logo from '../assets/logo.png';
import Container from './Container.vue';
function log() {
    console.log('nihha')
}
</script>

<template>
    <nav>
        <Container>
            <ul>
                <li><router-link to="/"><img :src="logo" alt="DTT-Logo"></router-link></li>
                <li><router-link to="houses">Houses</router-link></li>
                <li><router-link to="about">About</router-link></li>
            </ul>
        </Container>
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
li {
    padding-right: 1rem;
    padding-left: 1rem;
    display: flex;
    align-items: center;
    list-style: none;
    color: var(--text-1);
}
a {
    text-decoration: none;
    font-weight: bold;
    color: var(--text-1);
}

img {
    height: 100%;
    width: 100px;
}</style>