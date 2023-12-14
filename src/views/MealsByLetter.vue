<template>
  <div class="p-4 flex justify-center">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Meals by Letter</h1>
  </div>
  <div class="flex flex-wrap justify-center gap-8 px-8 mb-6 pb-5">
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter of letters"
      :key="letter"
      class="w-2 h-2 text-xl font-medium text-blue-950 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all"
    >
      {{ letter }}
    </router-link>
  </div>

  <Meals :meals="meals" />
</template>

<script setup>
import { computed } from "@vue/reactivity";
import store from "../store";
import { useRoute } from "vue-router";
import { onMounted, watch } from "vue";
import Meals from "/src/components/Meals.vue"

const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const meals = computed(() => store.state.searchByLetter);

watch(route, () => {
    store.dispatch('searchByLetter', route.params.letter)
})

onMounted(() => {
  store.dispatch("searchByLetter", route.params.letter);
});
</script>
