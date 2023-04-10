<script setup lang="ts">
import NoResultsImg from '../assets/no_results.png';
import Button from '../components/_Button.vue';
import PlusIcon from '../assets/plus_white.png';
import SearchBar from '../components/SearchBar.vue';
import FilterButtons from '../components/FilterButtons.vue';
import Card from '../components/HousingCard.vue';
import { ref, onBeforeMount } from 'vue';
import { House } from '../types';
import { useRouter } from 'vue-router';

const router = useRouter();
const isLoading = ref(true);
const selectedFilter = ref('price');
const currentHouses = ref([] as House[] | never[]);
const houses = ref([] as House[] | never[]);
const isSearching = ref(false);
const setSelectedFilter = (filter: string) => {
	currentHouses.value.sort((a: House, b: House) => {
		if (filter === 'price') {
			return a.price - b.price;
		}
		if (filter === 'size') {
			return a.size - b.size;
		}
	});
	selectedFilter.value = filter;
};
onBeforeMount(() => {
	fetch('/api', {
		headers: {
			'X-Api-Key': import.meta.env.VITE_API_KEY
		}
	}).then((res) => {
		res.json().then((jsonData) => {
			jsonData.sort((a: House, b: House) => {
				if (selectedFilter.value === 'price') {
					return a.price - b.price;
				}
				if (selectedFilter.value === 'size') {
					return a.size - b.size;
				}
				return 0;
			});
			houses.value = jsonData;
			currentHouses.value = jsonData;
			isLoading.value = false;
		});
	});
});
const onchange = (value: string) => {
	if (value === '' || value === undefined || value === null || value === ' ') {
		isSearching.value = false;
		currentHouses.value = houses.value;
		return;
	}
	currentHouses.value = houses.value.filter((house) => {
		const loc = house.location;
		return loc.city.toLowerCase().includes(value.toLowerCase()) ||
            loc.street.toLowerCase().includes(value.toLowerCase()) ||
            loc.zip.toLowerCase().includes(value.toLowerCase());
	});
	isSearching.value = true;
};
const handleCreateClick = () => {
	router.push('/create');
};
</script>

<template>
  <div class="flex-container space-between">
    <h1>Houses</h1>
    <Button
      variant="contained"
      color="primary"
      :on-click="handleCreateClick"
    >
      <div class="flex-container">
        <img
          class="plus-icon"
          :src="PlusIcon"
          alt="plus Symbol"
        >
        <span>Create New</span>
      </div>
    </Button>
  </div>

  <div class="flex-container space-between">
    <SearchBar
      :on-change="(value) => onchange(value)"
      placeholder="Search for a house"
    />

    <FilterButtons
      :selected="selectedFilter"
      :set-selected="setSelectedFilter"
    />
  </div>
  <h2
    v-if="isSearching && currentHouses.length"
    :style="{
      marginTop: '2rem'
    }"
  >
    {{ currentHouses.length }} results found
  </h2>
  <div class="card-container">
    <div
      v-for="house in currentHouses"
      :key="house.id"
    >
      <Card :house="house" />
    </div>
  </div>
  <div
    v-if="currentHouses.length === 0 && !isLoading"
    class="flex-container center-content"
  >
    <img
      :src="NoResultsImg"
      alt="No results found image"
    >
    <div
      :style="{
        marginTop: '2rem'
      }"
    >
      <p>No results found</p>
      <p>Please try another keyword</p>
    </div>
  </div>
</template>

<style scoped lang="scss"> 
.card-container {
    width: 100%;
    padding-top: 1rem;
 }

 .flex-container {
     width: 100%;
     display: flex;
     flex-direction: row;
     align-items: center;

     span {
         color: var(--bg-2);
     }
 }

 .center-content {
    flex-direction: column;
    justify-content: center;
    height: 100%;
    img{
        margin-top: 4rem;
        aspect-ratio: 2/1;
        width: calc(100px * 4);
        height: calc(50px * 4);
    }
 }
 .plus-icon{
     height: 18px;
     width: 18px;
     margin-right: 8px;
 }

 .space-between {
     justify-content: space-between;

 }

p {
    text-align: center;
    margin: 0;
    padding: 0;
}
</style>
