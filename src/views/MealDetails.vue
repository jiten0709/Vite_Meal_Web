<template>
  <div
    v-if="meal"
    class="max-w-[800px] mx-auto bg-white shadow rounded-2xl p-4"
  >
    <div class="mb-0 flex items-start">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="w-3/4 rounded-2xl h-96 object-cover"
      />
      <div class="ml-4 w-1/2 flex max-w-[300px]">
        <div class="flex flex-col w-1/2 ml-4">
          <div class="p-3 border border-transparent">
            <strong class="text-4xl text-blue-950">Name:</strong> <h1 class="text-orange-600 text-2xl">{{ meal.strMeal }}</h1>
          </div>
          <div class="p-3 border border-transparent">
            <strong class="text-blue-950">Category:</strong> <h4>{{ meal.strCategory }}</h4>
          </div>
          <div class="p-3 border border-transparent">
            <strong class="text-blue-950">Area:</strong> <h4>{{ meal.strArea }}</h4>
          </div>
          <div class="p-3 border border-transparent ">
            <strong class="text-blue-950">Tags:</strong> <h4>{{ meal.strTags }}</h4>
          </div>
        </div>
      </div>
    </div>

    <div class="p-3">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <h2 class="text-2xl font-bold mb-2 mt-2 text-blue-950">Ingredients:</h2>
          <ul>
            <template v-for="(el, ind) of new Array(20)">
              <li v-if="meal[`strIngredient${ind + 1}`]">
                {{ ind + 1 }}. {{ meal[`strIngredient${ind + 1}`] }}
              </li>
            </template>
          </ul>
        </div>
        <div>
          <h2 class="text-2xl font-bold mb-2 mt-2 text-blue-950">Measures:</h2>
          <ul>
            <template v-for="(el, ind) of new Array(20)">
              <li v-if="meal[`strMeasure${ind + 1}`]">
                {{ ind + 1 }}. {{ meal[`strMeasure${ind + 1}`] }}
              </li>
            </template>
          </ul>
        </div>
      </div>

      <div class="my-3 max-w-[690px] pt-4">
        <strong class="text-2xl text-blue-950">Instructions:</strong>
        <p class="text-justify">{{ meal.strInstructions }}</p>
      </div>

      <div class="mt-7 flex justify-end">
        <YouTubeButton :href="meal.strYoutube" class="mr-3">
          Go to YouTube
        </YouTubeButton>
        <a :href="meal.strSource" target="_blank" class="p-3 text-indigo-600">
          View Original Source
        </a>
      </div>
    </div>
  </div>
  <div v-else>Loading...</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";
import YouTubeButton from "../components/YouTubeButton.vue";

const route = useRoute();
const meal = ref({});

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    meal.value = data.meals[0] || {};
  });
});
</script>
