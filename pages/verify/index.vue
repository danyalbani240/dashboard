<template>
  <div class="bg-primary w-full text-Neutral-Gray p-5">
    <base-dashboard-header :pageName="'احراز هویت'" />

    <div class="stages flex mt-8 justify-center">
      <div class="stage mx-2.5">
        <div class="stage-input"></div>
        <p class="text-center mt-2 text-xs">کدملی</p>
      </div>
      <div class="stage mx-2.5">
        <div class="stage-input"></div>
        <p class="text-center mt-2 text-xs">کدملی</p>
      </div>
      <div class="stage mx-2.5">
        <div class="stage-input"></div>
        <p class="text-center mt-2 text-xs">کدملی</p>
      </div>
      <div class="stage mx-2.5">
        <div class="stage-input"></div>
        <p class="text-center mt-2 text-xs">کدملی</p>
      </div>
      <div class="stage mx-2.5">
        <div class="stage-input"></div>
        <p class="text-center mt-2 text-xs">کدملی</p>
      </div>
    </div>
     <!-- <the-verify-stage-one />  -->
    <the-verify-stage-two />
    <!-- <the-verify-email-stage /> -->
    <!-- <the-authentication-stage /> -->
    <!-- <the-authentication-stage-two /> -->
    <!-- <the-verify-completed /> -->
  </div>
</template>

<script>
import TheAuthenticationStage from "~/components/TheAuthenticationStage.vue";
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
  },
};
</script>

<style>
.stage-input {
  width: 191px;
  height: 10px;
  border: 2px solid #15ab89;
  filter: drop-shadow(0px 0px 6px #15ab89);
  border-radius: 15.5px;
  opacity: 0.65;
  position: relative;
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
