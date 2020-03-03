<template>
  <nav class="flex items-center justify-between flex-wrap bg-red-300 p-6">
    <router-link to="/" class="flex items-center flex-shrink-0 text-white mr-6">
      <img class="h-8 mr-4" src="superlogo.png" alt="Logo" />
      <span class="font-semibold text-xl tracking-tight"
        >SuperHero<span class="font-light">Finder</span></span
      >
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>