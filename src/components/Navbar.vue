<script setup lang="ts">
import {RouteRecordName } from 'vue-router';
import logo from '../assets/logo.png';
import Container from './MainContainer.vue';
defineProps<{
    currentPage?: RouteRecordName;
}>();

</script>

<template>
  <nav>
    <Container>
      <ul>
        <li
          :style="{
            paddingLeft: 0
          }"
        >
          <img
            :src="logo"
            alt="DTT-Logo"
          >
        </li>
        <li :class="currentPage !== 'Home'? 'greyed-text': undefined">
          <router-link to="/">
            Houses
          </router-link>
        </li>
        <li :class="currentPage !== 'About'? 'greyed-text': undefined">
          <router-link to="about">
            About
          </router-link>
        </li>
      </ul>
    </Container>
  </nav>
</template>

<style lang="scss">
nav {
    z-index: 1000;
    position: fixed;
    width: 100%;
    background-color: var(--bg-2);
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
}
</style>