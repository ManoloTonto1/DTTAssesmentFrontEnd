<script setup lang="ts">
import Button from "../components/Button.vue";
import Navbar from "../components/Navbar.vue";
import PlusIcon from "../assets/plus_white.png";
import SearchBar from "../components/SearchBar.vue";
import FilterButtons from "../components/FilterButtons.vue";
import Card from "../components/Card.vue";
import placeholder from "../assets/placeholder_house.png";
import { ref } from "vue";

const selectedFilter = ref('price');

const setSelectedFilter = (filter: string) => {
    console.log(filter)
    selectedFilter.value = filter;
}

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
        <Card :rooms="2" :price="200000" title="Cute house in amsterdam" :img="placeholder" :size="120" location="Amsterdam" />
        <Card :rooms="2" :price="200000" title="Cute house in amsterdam" :img="placeholder" :size="120" location="Amsterdam" />
        <Card :rooms="2" :price="200000" title="Cute house in amsterdam" :img="placeholder" :size="120" location="Amsterdam" />
        <Card :rooms="2" :price="200000" title="Cute house in amsterdam" :img="placeholder" :size="120" location="Amsterdam" />
    </div>
</template>

<style scoped>
.card-container {
    padding-top: 2rem;
}
.flex-container {
    display: flex;
    flex-direction: row;
    align-items: center;
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
