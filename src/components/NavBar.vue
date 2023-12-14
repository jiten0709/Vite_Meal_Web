<template>
  <header class="bg-pink-50 shadow-md h-16 flex justify-between items-stretch font-medium font-serif">
    <div class="flex items-center gap-2 px-5">
      <router-link
        :to="{ name: 'home' }"
        class="inline-flex items-center px-5 h-full transition-transform text-blue-950 hover:underline hover:scale-125 text-xl"
      >
        Home
      </router-link>
    </div>

    <div class="flex items-center gap-2 px-10">
      <router-link
        :to="{ name: 'byName' }"
        class="inline-flex items-center px-5 h-full transition-transform text-orange-600 hover:underline hover:scale-110"
      >
        Search Meals
      </router-link>
      <router-link
        :to="{ name: 'byLetter' }"
        class="inline-flex items-center px-5 h-full transition-transform text-orange-600 hover:underline hover:scale-110"
      >
        Meals by Letter
      </router-link>
      <router-link
        :to="{ name: 'ingredient' }"
        class="inline-flex items-center px-5 h-full transition-transform text-orange-600 hover:underline hover:scale-110"
      >
        Meals by Ingredient
      </router-link>
    </div>
  </header>
</template>


<script setup>

</script>