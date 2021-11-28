<template>
  <div class="flex flex-row-reverse items-center">
    <div class="rounded-md icon-container p-1.5 ml-2.5">
      <img :src="myImage" alt="" />
    </div>
    <p>{{ headName }}</p>
  </div>
</template>

<script>
export default {
  props: {
    headName: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
  },
  computed: {
    //To making Image address dynamic
    myImage() {
      return require(`~/assets/images/partheader/${this.address}.svg`);
    },
  },
};
</script>

<style></style>
