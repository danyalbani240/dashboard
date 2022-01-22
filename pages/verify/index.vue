<template>
  <div class="bg-primary w-full text-Neutral-Gray p-5">
    <base-dashboard-header :pageName="'احراز هویت'" />

    <div class="stages flex mt-8 justify-center flex-row-reverse">
      <div class="stage mx-2.5" :class="{ active: step === 1, pass: step > 1 }">
        <div class="stage-input"></div>
        <p class="text-center mt-2 text-xs">کدملی</p>
      </div>
      <div class="stage mx-2.5" :class="{ active: step === 2, pass: step > 2 }">
        <div class="stage-input"></div>
        <p class="text-center mt-2 text-xs">تایید شماره موبایل</p>
      </div>
      <div class="stage mx-2.5" :class="{ active: step === 3, pass: step > 3 }">
        <div class="stage-input"></div>
        <p class="text-center mt-2 text-xs">تایید پست الکترونیک</p>
      </div>
      <div class="stage mx-2.5" :class="{ active: step === 4, pass: step > 4 }">
        <div class="stage-input"></div>
        <p class="text-center mt-2 text-xs">گوگل دو مرحله ای</p>
      </div>
      <div class="stage mx-2.5" :class="{ active: step === 5, pass: step > 5 }">
        <div class="stage-input"></div>
        <p class="text-center mt-2 text-xs">نتیجه درخواست</p>
      </div>
    </div>
    <the-verify-stage-one v-if="step === 1" @getPass="step++" />
    <the-verify-stage-two v-if="step === 2" @getPass="step++" />
    <the-verify-email-stage v-if="step === 3" @getPass="step++" />
    <the-authentication-stage @getBack="step--"  v-if="step === 4" @getPass="step++" />
    <the-authentication-stage-two @getBack="step--"  v-if="step === 5" @getPass="step++" />
    <the-verify-completed v-if="step === 6" />
  </div>
</template>

<script>
import TheAuthenticationStage from "~/components/TheAuthenticationStage.vue";
import TheAuthenticationStageTwo from "~/components/TheAuthenticationStageTwo.vue";
import TheVerifyCompleted from "~/components/TheVerifyCompleted.vue";
import TheVerifyEmailStage from "~/components/TheVerifyEmailStage.vue";
import TheVerifyStageOne from "~/components/TheVerifyStageOne.vue";
import TheVerifyStageTwo from "~/components/TheVerifyStageTwo.vue";
export default {
  components: {
    TheVerifyStageOne,
    TheVerifyStageTwo,
    TheVerifyEmailStage,
    TheAuthenticationStage,
    TheVerifyCompleted,
    TheAuthenticationStageTwo
  },
  data() {
    return {
      step: 1,
    };
  },
};
</script>

<style>
.stage-input {
  width: 191px;
  height: 10px;
  border: 1px solid #15ab89;
  border-radius: 15.5px;
  opacity: 0.65;
  position: relative;
}
.stage.active .stage-input {
  border-width: 2px !important;
  filter:drop-shadow(2px 2px 5px #15ab89);
}
.stage.pass .stage-input {
  background-color: #15ab89;
}
.stage-input::before {
  content: "";
  position: absolute;

  width: 36px;
  height: 36px;
  background-repeat: no-repeat;
  background: linear-gradient(
    91.44deg,
    rgba(255, 255, 255, 0.18) 0%,
    rgba(196, 196, 196, 0.06) 100%
  );
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
}
.stage-input::after {
  background-image: url(../../assets/images/bulk-security-card.svg);
  content: "";
  position: absolute;
  width: 36px;
  height: 36px;
  background-repeat: no-repeat;
  left: 50%;
  top: -50%;
  transform: translate(-35%, -25%);
}
</style>
