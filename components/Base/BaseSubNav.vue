<template>
  <nuxt-link :to="linkAdress"
    class="sub-nav flex flex-row-reverse pr-10 h-11 items-center cursor-pointer "
  >
    {{ name }}
  </nuxt-link>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    linkAdress:{
      type:String,
      required:true
    }
  },
};
</script>

<style>
.sub-nav:hover {
  border-right: 2px solid #15ab89;
}
</style>
