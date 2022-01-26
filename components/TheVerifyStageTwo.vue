<template>
  <div>
    <div class="verify-stage mx-auto mt-52 px-14 flex" dir="rtl">
      <div style="width: 389px" class="flex-1">
        <p class="font-bold text-lg text-center mt-9">تایید شماره</p>
        <p class="text-center mt-2.5" dir="rtl">
          شماره موبایل خود را تایید و احراز کنید.
        </p>
        <base-input
          :placeGrey="true"
          :place="'0925738158'"
          label="شماره تلفن همراه"
          :code="true"
          class="mt-5"
        />
        <base-input
          :placeGrey="true"
          class="mt-10"
          :place="'0925738158'"
          label="کدتایید:"
        />
        <base-button
          @click="$emit('getPass')"
          class="mt-6"
          :bGreen="true"
          :full="true"
          ><span class="text-white">مرحله بعدی</span></base-button
        >
      </div>
      <div class="md:flex hidden items-center justify-center mr-28">
        <img src="../assets/images/call.svg" alt="" />
      </div>
    </div>
    <div class="mt-20 md:block hidden">
      <img class="mx-auto" src="../assets/images/stagetwo-bg.svg" alt="" />
    </div>
  </div>
</template>

<script>
import BaseInput from "./Base/BaseInput.vue";
export default {};
</script>

<style scoped BaseInput>
.verify-stage {
  max-width: 716px;
  height: 380px;
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
