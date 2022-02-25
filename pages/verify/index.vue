<template>
  <div
    class="bg-primary w-full overflow-y-hidden text-Neutral-Gray p-5"
    :class="{ 'h-screen': step == 1 || step == 2 || step == 3 || step == 6 }"
  >
    <base-dashboard-header :pageName="'احراز هویت'" />

    <div class="stages flex mt-8 justify-center flex-row-reverse">
      <div
        class="stage mx-2.5"
        :class="{
          'active sm:block': step === 1,
          'pass hidden lg:block': step > 1,
        }"
      >
        <div class="stage-input"></div>
        <p class="text-center mt-4 text-xs">کدملی</p>
      </div>
      <div
        class="stage mx-2.5"
        :class="{
          'active sm:block': step === 2,
          'pass hidden lg:block': step > 2,
          'hidden md:block': step < 2,
        }"
      >
        <div class="stage-input"></div>
        <p class="text-center mt-4 text-xs">تایید شماره موبایل</p>
      </div>
      <div
        class="stage mx-2.5"
        :class="{
          'active sm:block': step === 3,
          pass: step > 3,
          'hidden md:block': step < 3 || step > 3,
        }"
      >
        <div class="stage-input"></div>
        <p class="text-center mt-4 text-xs">تایید پست الکترونیک</p>
      </div>
      <div
        class="stage mx-2.5"
        :class="{
          'active sm:block': step === 4,
          pass: step > 4,
          'md:block': step > 1,
          'hidden md:block': step == 1,
          'hidden md:block': step < 4 || step > 4,
        }"
      >
        <div class="stage-input"></div>
        <p class="text-center mt-4 text-xs">گوگل دو مرحله ای</p>
      </div>
      <div
        class="stage mx-2.5"
        :class="{
          'active sm:block': step === 5,
          pass: step > 5,
          block: step > 2,
          'hidden lg:block': step <= 2,
          'hidden lg:block': step < 5,
        }"
      >
        <div class="stage-input"></div>
        <p class="text-center mt-4 text-xs">نتیجه درخواست</p>
      </div>
    </div>
    <keep-alive>
      <the-verify-stage-one v-if="step === 1" @getPass="step++" />
    </keep-alive>
    <keep-alive>
      <the-verify-stage-two v-if="step === 2" @getPass="step++" />
    </keep-alive>
    <keep-alive>
      <the-verify-email-stage v-if="step === 3" @getPass="step++" />
    </keep-alive>
    <keep-alive>
      <the-authentication-stage
        @getBack="step--"
        v-if="step === 4"
        @getPass="step++"
      />
    </keep-alive>
    <the-authentication-stage-two
      @getBack="step--"
      v-if="step === 5"
      @getPass="step++"
    />
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
    TheAuthenticationStageTwo,
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
  z-index: 2;
}
.stage.active .stage-input {
  border-width: 2px !important;
  filter: drop-shadow(2px 2px 5px #15ab89);
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
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(12px);

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
}
.stage-input::after {
  content: "";
  position: absolute;
  width: 36px;
  height: 36px;
  background-repeat: no-repeat;
  background-position: center;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.stage:nth-of-type(1) .stage-input::after {
  background-image: url(../../assets/images/bulk-security-card.svg);
}
.stage:nth-of-type(2) .stage-input::after {
  background-image: url(../../assets/images/phone.svg);
}
.stage:nth-of-type(3) .stage-input::after {
  background-image: url(../../assets/images/google.svg);
}
.stage:nth-of-type(4) .stage-input::after {
  background-image: url(../../assets/images/2step.svg);
}
.stage:nth-of-type(5) .stage-input::after {
  background-image: url(../../assets/images/verifyed.svg);
}
</style>
