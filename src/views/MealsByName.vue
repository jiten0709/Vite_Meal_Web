<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-600">Search Meals by Name</h1>
  </div>
  <div class="p-8">
    <input
      type="text"
      v-model="keyword"
      @change="searchMeals"
      class="rounded border-2 bg-white border-gray-300 focus:ring-orange-500 focus-within:border-orange-600 w-full"
      placeholder="Search for Meals"
    />
  </div>

  <Meals :meals="meals" />
</template>

<script setup>
import { onMounted, ref } from "vue";
import { computed } from "@vue/reactivity";
import store from "../store";
import { useRoute } from "vue-router";
import Meals from "/src/components/Meals.vue";

const route = useRoute();
const keyword = ref([]);
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  if (keyword.value) {
    store.dispatch("searchMeals", keyword.value)
  } else {
    store.commit("setSearchedMeals", [])
  }
}

onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>
