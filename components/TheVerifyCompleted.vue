<template>
  <div>
    <div class="flex flex-col justify-center items-center mt-32">
      <p class="text-lg">احراز هویت شما با موفقیت انجام شد</p>
      <lottie
        :options="lottieOptions"
        :width="300"
        v-on:animCreated="handleAnimation"
      />
    </div>

    <base-button @click="$router.push('/')" class="w-36 mt-11" :bGreen="true"
      >پایان</base-button
    >
  </div>
</template>

<script>
import BaseButton from "./Base/BaseButton.vue";
import lottie from "vue-lottie/src/lottie.vue";
import * as animationData from "~/assets/animations/animation.json";

export default {
  components: { BaseButton, lottie },
  data() {
    return {
      anim: null, // for saving the reference to the animation
      lottieOptions: { animationData: animationData.default },
    };
  },
  methods: {
    handleAnimation: function (anim) {
      this.anim = anim;
    },
  },
};
</script>

<style></style>
