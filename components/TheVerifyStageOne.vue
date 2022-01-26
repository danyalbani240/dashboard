<template>
  <div>
    <div class="verify-stage flex mx-auto mt-52 px-14" dir="rtl">
      <div style="width: 389px">
        <p class="font-bold text-lg text-center mt-9">وارد کردن کد ملی</p>
        <p
          style="word-wrap: normal; overflow-wrap: normal"
          class="text-sm mt-2"
        >
          اولین بخش احراز هویت بررسی کد ملی شما با اطلاعات هویتی است.
        </p>
        <base-input
          place="0925738158"
          :placeGrey="true"
          class="mt-5"
          label="کدملی"
        />
        <base-button
          class="mt-4"
          @click="$emit('getPass')"
          :bGreen="true"
          :full="true"
        >
          <span class="text-white">مرحله بعدی</span></base-button
        >
      </div>
      <div class="hidden items-center md:flex justify-center mr-28">
        <img src="../assets/images/bigperson.svg" alt="" />
      </div>
    </div>
    <div class="mt-20">
      <img
        class="mx-auto md:block hidden"
        src="../assets/images/stageone-bg.svg"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import BaseButton from "./Base/BaseButton.vue";
import BaseInput from "./Base/BaseInput.vue";
export default {
  components: { BaseInput, BaseButton },
};
</script>

<style scoped>
.verify-stage {
  max-width: 716px;
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
