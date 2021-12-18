<template>
  <div class="flex flex-row-reverse text-Neutral-Gray">
    <the-sidebar :closed="!isSidebar" />
    <Nuxt  />
  </div>
</template>

<script>
export default {
  data(){
    return{
      isSidebar: false
    }
  },
  created () {
  this.$nuxt.$on('toggleSidebar', () => {
    this.isSidebar = !this.isSidebar;
  })
}
};
</script>

<style></style>
