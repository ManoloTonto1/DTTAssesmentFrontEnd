<script setup lang="ts">
import HousingForm from '../components/HousingForm.vue';
import { useRouter } from 'vue-router';
const router = useRouter();

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
  <HousingForm @submit="handleSubmit" />
</template>
  <style lang="scss" scoped>
</style>