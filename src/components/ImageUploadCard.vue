<script lang="ts" setup>
import { ref } from 'vue';
import ImageUploadIcon from '../assets/imageUploadIcon.png';
import ClearIcon from '../assets/ic_clear_white.png';

defineProps<{
  image: string | undefined,
  label: string
}>();
const emits = defineEmits(['update:image']);

const inputFile = ref(undefined);
const showChange = ref(false);

const onButtonClick = () => {
	const uploadBtn = inputFile.value as unknown as HTMLInputElement;
	if (uploadBtn) {
		uploadBtn.click();
	}
};
const handleFileUpload = (e: Event) => {
	const target = e.target as HTMLInputElement;
	if (!target.files) {
		return;
	}
	const file = target.files[0];
	const reader = new FileReader();
	reader.readAsDataURL(file);
	reader.onload = () => {
		emits('update:image', reader.result as string);
	};
};
</script>
<template>
  <div class="upload-image-card">
    <label for="input">{{ label }}</label>
    <div class="card-container">
      <button
        v-if="image"
        class="remove-button"
        @click="$emit('update:image', '')"
      >
        <img
          class="clear-icon"
          :src="ClearIcon"
        >
      </button>
      <div
        class="card"
        :class="{
          'empty-card': !image,
          'filled-card': image
        }"
        @click="onButtonClick"
        @change="handleFileUpload"
      >
        <input
          ref="inputFile"
          type="file"
          hidden
          accept="image/PNG"
        >
        <div
          v-if="showChange"
          class="change-overlay"
        >
          <img
            :src="ImageUploadIcon"
            alt="change"
            class="icon"
          >
        </div>
        <div class="card-media">
          <img
            v-if="image"
            :src="image"
            alt="product-image"
          >
          <div
            v-else
            class="placeholder"
          >
            <img
              :src="ImageUploadIcon"
              alt="change"
              class="icon"
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  

  
<style scoped lang="scss">
@import '../styles/input.scss';

.upload-image-card {
  margin-top: 1rem;
}

.remove-button {
  background-color: transparent;
  z-index: 500;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  .clear-icon {
    width: 30px;
    height: 30px;
  }
}

.card-container {
  padding-top: 1px;
  padding-right: 15px;
  position: relative;
  height: 150px;
  width: 150px;
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 150px;
  cursor: pointer;
  margin-top: 0.5rem;
}

.empty-card {
  border: 2px dashed var(--secondary);
  background-color: transparent;
  transition: all 100ms ease-in-out;

  &:hover {
    border: 2px dashed var(--primary);
  }
}

.filled-card {
  border-radius: 10px;

  .card-media {
    border-radius: 10px;
    overflow: hidden;
    img {
      object-fit: fill;
      width: 100%;
      height: 100%;
    }
  }
}

.icon {
  width: 25px;
  height: 25px;
}

.change-overlay {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
}

.card-media {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>