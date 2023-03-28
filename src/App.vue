<script setup lang="ts">
import Navbar from './components/NavBar.vue';
import Container from './components/MainContainer.vue';
</script>

<template>
  <Navbar />
  <main>
    <Container>
      <router-view></router-view>
    </Container>
  </main>
</template>
<style>
main{
  padding-top: 6rem;
}
</style>