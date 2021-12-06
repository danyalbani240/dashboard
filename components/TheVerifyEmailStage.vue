<template>
  <div class="verify-stage mx-auto mt-52 px-14 flex" dir="rtl">
    <div style="width: 389px">
      <p class="font-bold text-lg text-center mt-9">تایید پست الکترونیک</p>
      <p class="text-center mt-2.5">
        ایمیل خود را وارد کنید و کد تایید را برای احراز وارد کنید.
      </p>
      <base-input label="شماره تلفن همراه" />
      <base-input label="کدتایید" />
      <base-button class="mt-4" :bGreen="true" :full="true"
        >مرحله بعدی</base-button
      >
    </div>
    <div class="flex items-center justify-center mr-28">
      <img src="../assets/images/verifygoogle.svg" alt="" />
    </div>
  </div>
</template>

<script>
import BaseInput from "./Base/BaseInput.vue";
export default {};
</script>

<style scoped BaseInput>
.verify-stage {
  width: 716px;
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
