<script setup lang="ts">
import { House } from '../types';
import placeholder from '../assets/placeholder_house.png';
import EditIcon from '../assets/editIcon.png';
import TrashIcon from '../assets/trashIcon.png';
defineProps<{
  house: House;
}>();

function FormatPrice(price: number) {
	return price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, '.');
}
</script>

<template>
  <router-link
    class="card"
    :to="`${house.id}`"
  >
    <div style="display: flex;">
      <div class="card-img">
        <img
          :src="house.image || placeholder"
          :alt="`image of ${house.location.street}`"
        >
      </div>
      <div class="card-content">
        <h2>{{ house.location.street }}</h2>
        <p>€ {{ FormatPrice(house.price) }} </p>
        <p class="subtitle-text">
          {{ `${house.location.city}  ${house.location.zip}` }}
        </p>
        <p>{{ house.size }} m²</p>
        <p>{{ house.rooms.bathrooms }} rooms</p>
      </div>
    </div>
    <div class="icon-container"> 
      <router-link
        :to="`/edit/${house.id}`"
      >
        <img
          class="icon"
          :src="EditIcon"
          alt="edit"
        >
      </router-link>
      <button
        :style="{
          backgroundColor: 'transparent',
        }"
      >
        <img
          class="icon"
          :src="TrashIcon"
          alt="trash"
        >
      </button>
    </div>
  </router-link>
</template>

<style lang="scss" scoped>

.card {
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    width: inherit;
    padding: 1rem;
    border-radius: 4px;
    background-color: var(--bg-2);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.2s ease-in-out;
    &:hover {
            cursor: pointer;
            opacity: 0.8;
            box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }

}
.icon-container{
    padding-top: 1.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
}
.icon {
    height: 24px;
    width: 24px;
    padding-left: 1rem;
}
.card-img {
    height: 200px;
    width: 200px;
    border-radius: 4px;
    overflow: hidden;

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
}

.card-content {
    height: inherit;
    padding-left: 1rem;
    padding-top: 1rem;
}
</style>