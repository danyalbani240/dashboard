<template>
  <div class="flex flex-row-reverse">
    <the-sidebar />
    <Nuxt />
  </div>
</template>

<script>
import TheSidebar from "~/components/TheSidebar.vue";
export default {
  components: { TheSidebar },
};
</script>

<style></style>
