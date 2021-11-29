<template>
  <div
    class="relative justify-center flex-row-reverse rounded-2xl pr-2 items-center flex table-header text-sm"
  >
    <a
      class="flex items-center text-center py-1 w-10 justify-center buy active rounded-2xl text-primary"
      href=""
      >{{ linkOne }}</a
    >
    <div
      class="changer w-6 h-6 flex justify-center items-center icon-container rounded absolute"
      style="left: 50%; transform: translateX(-50%)"
    >
      <img src="../../assets/images/transform.svg" alt="" />
    </div>
    <a class="sell flex items-center text-center w-20 py-1 px-5" href="">{{
      linkTwo
    }}</a>
  </div>
</template>

<script>
export default {
  props: {
    linkOne: {
      type: String,
      required: true,
    },
    linkTwo: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
