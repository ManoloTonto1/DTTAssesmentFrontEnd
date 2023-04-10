<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import HousingForm from '../components/HousingForm.vue';
import { useRouter, useRoute } from 'vue-router';
import { House } from '../types';
const route = useRoute();
const router = useRouter();

const house = ref(null as unknown as House);
onBeforeMount(() => {
	console.log(route.params.id);
	const id = route.params.id;
	fetch(`/api/${id}`, {
		headers: {
			'X-Api-Key': import.meta.env.VITE_API_KEY
		}
	}).then((res) => {
		res.json().then((jsonData) => {
			house.value = jsonData;
		});
	});
});

async function handleSubmit(data: unknown) {
	const payload = {
		streetName: data.streetName.value,
		houseNumber: data.houseNumber.value,
		addition: data.addition.value,
		zip: data.postalCode.value,
		city: data.city.value,
		price: data.price.value,
		size: data.size.value,
		hasGarage: data.garage.value,
		bedrooms: data.bedrooms.value,
		bathrooms: data.bathrooms.value,
		constructionYear: data.constructionDate.value,
		description: data.description.value
	};
	const res = await fetch('/api',{
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'X-Api-Key': import.meta.env.VITE_API_KEY
		},
		body: JSON.stringify(payload),
	});
	if (res.status === 201) {
		fetch(`/api?${res.body.id as number}/upload`, {
			headers: {
				'X-Api-Key': import.meta.env.VITE_API_KEY
			},
			body: JSON.stringify({image: data.image.value}),
		}).then(() => {
			if (res.status === 201 || res.status === 200) {
				router.push('/');
			}
    
		});
		return;
	}
	console.error('Something went wrong');
}
</script>
<template>
  <HousingForm
    :addition="house.location.street"
    :bathrooms="house.rooms.bathrooms"
    :bedrooms="house.rooms.bedrooms"
    :city="house.location.city"
    :construction-date="house.constructionYear"
    :description="house.description"
    :garage="house.hasGarage"
    :house-number="house.location.city"
    :image="house.image"
    :price="house.price"
    :postal-code="house.location.zip"
    :size="house.size"
    :street-name="house.location.street"
    @submit="handleSubmit"
  />
</template>
  <style lang="scss" scoped>
</style>