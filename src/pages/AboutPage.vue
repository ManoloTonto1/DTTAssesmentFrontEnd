<script setup lang="ts">
import logo from '../assets/logo.png';
</script>
<template>
  <h1>
    About DTT Real Estate
  </h1>
  <p>
    Ipsum eiusmod mollit nostrud aliquip amet quis ad. Enim eu qui labore duis proident nostrud ut. Adipisicing nisi ipsum enim eiusmod non minim. Aute labore ad Lorem qui pariatur nulla culpa. Ad eiusmod ea nisi velit culpa consectetur non quis. Et et amet veniam sint elit officia reprehenderit excepteur incididunt ullamco officia ad.
  </p>
  <br>
  <p>
    Ipsum eiusmod mollit nostrud aliquip amet quis ad. Enim eu qui labore duis proident nostrud ut. Adipisicing nisi ipsum enim eiusmod non minim. Aute labore ad Lorem qui pariatur nulla culpa. Ad eiusmod ea nisi velit culpa consectetur non quis. Et et amet veniam sint elit officia reprehenderit excepteur incididunt ullamco officia ad.
  </p>
  <h1>
    Design and Development
  </h1>
  <div class="flex-container">
    <img
      :src="logo"
      alt="DTT Logo"
    >
    <div class="info-container">
      <span>By DTT (Manuel Lopez)</span>
      <a href="www.d-tt.nl">www.d-tt.nl</a>
    </div>
  </div>
</template>
<style lang="scss" scoped>
img {
  max-width:230px;
  max-height:95px;
  width: auto;
  height: auto;
    }
.flex-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
}
.info-container {
    padding-left: 2rem;
}
span {
    display: block;
}
a {
    font-weight: 400;
    display: block;
    text-decoration: none;
    color: var(--text-hyperlink);
}
</style>