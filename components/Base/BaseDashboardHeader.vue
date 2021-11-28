<template>
  <div
    class="flex flex-row-reverse bottom-gradient w-full pb-3 justify-between items-center"
  >
    <p>{{ pageName }}</p>
    <div class="flex flex-row-reverse">
      <img
        class="ml-3 cursor-pointer"
        src="../../assets/images/repeaticon.svg"
      />
      <div class="flex flex-row-reverse cursor-pointer head-button py-2 px-1.5">
        <img class="ml-1" src="../../assets/images/usericon.svg" alt="" />
        <span>مهدی عزیز خوش امدید</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pageName: {
      type: String,
      default: "داشبورد",
    },
  },
};
</script>

<style></style>
