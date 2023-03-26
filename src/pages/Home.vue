<script setup lang="ts">
import Button from "../components/Button.vue";
import Navbar from "../components/Navbar.vue";
import PlusIcon from "../assets/plus_white.png";
import SearchBar from "../components/SearchBar.vue";
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
        <Button>
            <div class="flex-container">
                <img :src="PlusIcon" alt="plus Symbol">
                <span>Create New</span>
            </div>
        </Button>
    </div>
</template>
<style scoped>
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
