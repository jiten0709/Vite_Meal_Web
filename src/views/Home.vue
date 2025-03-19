<script setup lang="ts">
import { onMounted, ref } from "vue";
import Meals from "../components/Meals.vue";
import axiosClient from "../axiosClient.js";

const meals = ref([]);

// Helper function to introduce a delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

onMounted(async () => {
  for (let i = 0; i < 12; i++) {
    try {
      const { data } = await axiosClient.get(`random.php`);
      meals.value.push(data.meals[0]);
      await delay(200); // Add a 200ms delay between requests
    } catch (error) {
      console.error("Error fetching random meal:", error);
    }
  }
});
</script>

<template>
  <div class="p-8 pb-0 text-orange-500">
    <h1 class="text-4xl font-bold mb-4">Random Meals</h1>
  </div>
  <Meals :meals="meals" />
</template>
