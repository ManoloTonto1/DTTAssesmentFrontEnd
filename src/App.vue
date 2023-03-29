<script setup lang="ts">
import Navbar from './components/NavBar.vue';
import Container from './components/MainContainer.vue';
import { useRouter } from 'vue-router';
import { ref, watchEffect } from 'vue';
const router = useRouter();

const currentPage = ref(router.currentRoute.value.name);
watchEffect(() => {
	const currentRoute = router.currentRoute.value.name;
	currentPage.value = currentRoute;
});
</script>

<template>
  <Navbar :current-page="currentPage" />
  <main :class="currentPage === 'Create'? 'bg-image':''">
    <Container>
      <router-view></router-view>
    </Container>
  </main>
</template>
<style>
main{
  padding-top: 6rem;
}
.bg-image{
    width: 100%;
    height: 100%;
    background-image: url('./assets/bg_image.png');
    background-size: cover;
}

</style>