<template>
    <div class="p-8 pb-0">
        <h1 class="text-4xl font-bold mb-4 text-orange-600">Meals for {{ ingredient.strIngredient }}</h1>
    </div>

    <Meals :meals="meals"/>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import store from '../store';
import Meals from "/src/components/Meals.vue"

const route = useRoute()
const ingredient = computed(() => store.state.ingredient)
const meals = computed(() => store.state.searchByIngredient)

onMounted(() => {
    store.dispatch('searchByIngredient', route.params.ingredient)
})
</script>