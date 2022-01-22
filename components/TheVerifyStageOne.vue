<template>
  <div class="verify-stage flex mx-auto mt-52 px-14" dir="rtl">
    <div style="width: 389px">
      <p class="font-bold text-lg text-center mt-9">وارد کردن کد ملی</p>
      <p style="word-wrap: normal; overflow-wrap: normal" class="text-sm mt-2">
        اولین بخش احراز هویت بررسی کد ملی شما با اطلاعات هویتی است.
      </p>
      <base-input class="mt-5" label="کدملی" />
      <base-button class="mt-4" @click="nextStage" :bGreen="true" :full="true"
        >مرحله بعدی</base-button
      >
    </div>
    <div class="flex items-center justify-center mr-28">
      <img src="../assets/images/bigperson.svg" alt="" />
    </div>
  </div>
</template>

<script>
import BaseButton from "./Base/BaseButton.vue";
import BaseInput from "./Base/BaseInput.vue";
export default {
  components: { BaseInput, BaseButton },
  methods: {
    nextStage() {
      this.$emit("getPass");
    },
  },
};
</script>

<style scoped>
.verify-stage {
  width: 716px;
  height: 277px;
  background: linear-gradient(
    91.44deg,
    rgba(255, 255, 255, 0.18) 0%,
    rgba(196, 196, 196, 0.06) 100%
  );
  backdrop-filter: blur(12px);
  border-radius: 10px;
  border: 2px solid #15ab89;
  box-sizing: border-box;
}
</style>
