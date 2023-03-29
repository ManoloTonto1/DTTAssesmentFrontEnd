<script setup lang="ts">
import Dropdown from '../components/Dropdown.vue';
import TextField from '../components/TextField.vue';
import BackButton from '../components/BackButton.vue';
</script>
<template>
        <BackButton />
        <h1>Create New Listing</h1>
        <form>
            <TextField label="Street name" required placeholder="Enter street name" />

            <div :class="'double-text-field'">
                <TextField required placeholder="Enter house number" label="House number" />
                <TextField required placeholder="e.g. A" label="Addition (optional)" />
            </div>

            <TextField label="Postal code" required placeholder="e.g. 1234 AB" />
            <TextField label="City" required placeholder="e.g. Utrecht" />
            upload image thing
            <TextField start-icon="€" label="Price" required placeholder="e.g. 150.000" />
            <div :class="'double-text-field'">
                <TextField required label="Size" placeholder="e.g. 60" end-icon="m²" />
                <Dropdown type="Select" required placeholder="Select" label="Garage">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </Dropdown>
            </div>
            <div :class="'double-text-field'">
                <TextField required placeholder="Enter amount" label="Bedrooms" />
                <TextField required placeholder="Enter amount" label="Bathrooms" />
            </div>
            <TextField label="Construction Date" required placeholder="Eg 1999" />
        </form>
</template>
<style lang="scss">
.double-text-field {
    display: flex;
    width: 500px;
    gap: 1rem;
}

</style>