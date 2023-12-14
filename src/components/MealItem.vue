<template>
  <div class="bg-white shadow rounded-2xl hover:scale-105 transition-all">
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="w-full rounded-t-2xl h-80 object-cover"
      />
    </router-link>
    <div class="p-3">
      <h3 class="font-bold text-center text-blue-950">{{ meal.strMeal }}</h3>
      <p class="mb-4">
        {{ $filters.truncateWords(meal.strInstructions, 20) }}
      </p>
      <div class="flex items-center justify-between">
        <YouTubeButton :href="meal.strYoutube"></YouTubeButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import YouTubeButton from "./YouTubeButton.vue";

const { meal } = defineProps({
  meal: {
    required: true,
    meal: Object,
  },
});
</script>
