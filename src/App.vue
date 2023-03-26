<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import Container from "./components/Container.vue";
</script>

<template>
      <Navbar />
      <Container>
      <router-view></router-view>
    </Container>
</template>