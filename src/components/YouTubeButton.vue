<template>
  <a
    :href="href"
    target="_blank"
    class="p-3 rounded text-white border border-red-800 bg-red-600 hover:bg-red-700 hover:text-white transition-colors"
    >
    <slot>YouTube</slot>
    </a>
</template>

<script setup>
const props = defineProps({
  href: String,
});
</script>
