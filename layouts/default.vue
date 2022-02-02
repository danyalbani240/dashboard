<template>
  <div class="flex flex-row-reverse text-Neutral-Gray">
    <the-sidebar :closed="$store.state.sidebar.isClosed" />
    <Nuxt />
  </div>
</template>

<script>
export default {};
</script>

<style>
* {
  background-repeat: no-repeat !important;
}
input:focus {
  outline: none !important;
}
</style>
