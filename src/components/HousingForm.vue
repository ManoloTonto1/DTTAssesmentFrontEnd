<script setup lang="ts">
import Dropdown from '../components/Dropdown.vue';
import TextField from '../components/TextField.vue';
import BackButton from '../components/BackButton.vue';
import Button from '../components/_Button.vue';
import { computed, reactive, toRefs } from 'vue';
import TextArea from '../components/TextArea.vue';
import ImageUploadCard from '../components/ImageUploadCard.vue';

const emits = defineEmits(['submit']);

const props = defineProps<{
  image?: string,
  streetName?: string,
  houseNumber?: string,
  addition?: string,
  postalCode?: string,
  city?: string,
  price?: string | number,
  size?: string | number,
  garage?: string | boolean,
  bedrooms?: string | number,
  bathrooms?: string | number,
  constructionDate?: number | string,
  description?: string
}>();

const formData = reactive({
	image : props.image,
	streetName: props.streetName,
	houseNumber: props.houseNumber,
	addition: props.addition,
	postalCode: props.postalCode,
	city: props.city,
	price: props.price,
	size: props.size,
	garage: props.garage,
	bedrooms: props.bedrooms,
	bathrooms: props.bathrooms,
	constructionDate: props.constructionDate,
	description: props.description
});
const updateImage = (image: string) => {
	formData.image = image;
};
const isFormComplete = computed(() => {
	// Check that all form fields are non-empty
	const values = Object.entries(formData)
		.filter(([key]) => key !== 'addition')
		.map(([, value]) => value);
    
	return values.every(value => value !== undefined && value !== '');
});
const submitForm = () => {
	emits('submit',toRefs(formData));
};

</script>

<template>
  <BackButton />
  <h1>Create New Listing</h1>
  <form @submit.prevent="submitForm">
    <TextField
      v-model="formData.streetName"
      label="Street name"
      required
      placeholder="Enter street name"
    />

    <div :class="'double-text-field'">
      <TextField
        v-model="formData.houseNumber"
        required
        placeholder="Enter house number"
        label="House number"
      />
      <TextField
        v-model="formData.addition"
        placeholder="e.g. A"
        label="Addition (optional)"
      />
    </div>

    <TextField
      v-model="formData.postalCode"
      label="Postal code"
      required
      placeholder="e.g. 1234 AB"
    />
    <TextField
      v-model="formData.city"
      label="City"
      required
      placeholder="e.g. Utrecht"
    />

    <ImageUploadCard
      label="Upload picture (PNG or JPG)"
      :image="formData.image"
      @update:image="updateImage"
    />

    <TextField
      v-model="formData.price"
      start-icon="€"
      label="Price"
      required
      placeholder="e.g. 150.000"
    />
    <div :class="'double-text-field'">
      <TextField
        v-model="formData.size"
        required
        label="Size"
        placeholder="e.g. 60"
        end-icon="m²"
      />
      <Dropdown
        v-model="formData.garage"
        type="Select"
        required
        placeholder="Select"
        label="Garage"
      >
        <option value="yes">
          Yes
        </option>
        <option value="no">
          No
        </option>
      </Dropdown>
    </div>
    <div :class="'double-text-field'">
      <TextField
        v-model="formData.bedrooms"
        required
        placeholder="Enter amount"
        label="Bedrooms"
      />
      <TextField
        v-model="formData.bathrooms"
        required
        placeholder="Enter amount"
        label="Bathrooms"
      />
    </div>
    <TextField
      v-model="formData.constructionDate"
      label="Construction Date"
      required
      placeholder="Eg 1999"
    />
    <TextArea
      v-model="formData.description"
      label="Description"
      required
      placeholder="Enter description"
    />
    <div
      :style="{
        display: 'flex',
        flexDirection: 'row-reverse',
        width: '500px',
        marginTop: '3rem',
        paddingBottom: '3rem'
      }"
    >
      <Button
        variant="contained"
        type="submit"
        :disabled="!isFormComplete"
      >
        Post
      </Button>
    </div>
  </form>
</template>

<style lang="scss" scoped>
.double-text-field {
    display: flex;
    width: 500px;
    gap: 1rem;
}
</style>
