<template>
  <div
    class="relative justify-center flex-row-reverse rounded-2xl pr-1 items-center flex badge-contain text-sm"
  >
    <a
      class="flex items-center text-center py-1 w-20 justify-center buy active rounded-2xl text-primary font-bold"
      >{{ linkOne }}</a
    >
    <div
      class="changer w-6 h-6 flex justify-center items-center icon-container rounded absolute"
      style="left: 50%; transform: translateX(-50%)"
    >
      <img src="../../assets/images/transform.svg" alt="" />
    </div>
    <a class="sell flex items-center text-center w-20 py-1 px-5 text-Neutral-Green1 font-bold" href="">{{
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

<style scoped>
.active {
  background-image: linear-gradient(90.93deg, #097369 0%, #15ab88 100%);
}
.badge-contain {
  border-radius: 17px;
  border: 1px solid #15ab89;
  height: 34px;
}
</style>
