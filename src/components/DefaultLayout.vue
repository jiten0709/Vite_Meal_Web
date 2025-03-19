<template>
    <NavBar />
    <main>
        <div class="p-auto mx-auto bg-green-50">
            <router-view />
        </div>
    </main>
</template>

<script setup>
import NavBar from './NavBar.vue';
</script>