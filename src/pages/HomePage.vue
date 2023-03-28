<script setup lang="ts">
import Button from '../components/_Button.vue';
import PlusIcon from '../assets/plus_white.png';
import SearchBar from '../components/SearchBar.vue';
import FilterButtons from '../components/FilterButtons.vue';
import Card from '../components/HousingCard.vue';
import { ref, onBeforeMount} from 'vue';
import { House } from '../types';

const selectedFilter = ref('price');
const houses = ref([] as House[] | never[]);

const setSelectedFilter = (filter: string) => {
	console.log(filter);
	selectedFilter.value = filter;
};
onBeforeMount(() => {
	console.log(import.meta.env.VITE_API_KEY);
	fetch('https://api.intern.d-tt.nl/api/houses',{
		headers: {
			'X-Api-Key': import.meta.env.VITE_API_KEY
		}
	}).then((res) => {
		res.json().then((jsonData) => {
			console.log(jsonData);
			houses.value = jsonData;
		});
	});
});
</script>

<template>
    <div class="flex-container space-between">
        <h1>Houses</h1>
        <Button>
            <div class="flex-container">
                <img :src="PlusIcon" alt="plus Symbol">
                <span>Create New</span>
            </div>
        </Button>
    </div>

    <div class="flex-container space-between">

        <SearchBar placeholder="Search for a house"/>
        <FilterButtons :selected="selectedFilter" :set-selected="setSelectedFilter"/>
    </div>

    <div class="card-container">
        <div v-bind:key="house.id" v-for="house in houses">
            <Card :house="house"/>
        </div>
    </div>
</template>

<style scoped lang="scss"> 
.card-container {
    padding-top: 2rem;
}
.flex-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    span {
        color : var(--bg-2);
    }
}

.space-between {
    justify-content: space-between;

}

img {
    height: 18px;
    width: 18px;
    margin-right: 8px;
}

</style>
