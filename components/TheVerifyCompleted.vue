<template>
  <div>
    <div class="flex flex-col justify-center items-center mt-32">
      <p class="text-lg">احراز هویت شما با موفقیت انجام شد</p>
      <img class="mt-16" src="../assets/images/completed.svg" alt="" />
      <p class="mt-16 cursor-pointer">
        https://lottiefiles.com/70898-completed
      </p>
    </div>
    <base-button class="w-36 mt-11" :bGreen="true">پایان</base-button>
  </div>
</template>

<script>
import BaseButton from "./Base/BaseButton.vue";
export default {
  components: { BaseButton },
};
</script>

<style></style>
