<template>
  <div
    class="security-page bg-primary w-full text-Neutral-Gray p-5 min-h-screen"
  >
    <base-dashboard-header :pageName="'امنیت'" />
    <div v-if="stage === ''">
      <p class="mx-auto text-lg text-center mt-20">امنیت</p>
      <p class="text-base text-center mt-8">
        در این بخش شما میتوانید رمز عبور و تلفن همراه خود را در صورت لزوم تغییر
        دهید.
      </p>
      <div
        class="flex mx-auto justify-between mt-24 flex-wrap boxes-container"
        dir="rtl"
      >
        <div
          class="transition-all p-4 my-4 box-password box flex items-center justify-center"
          @click="stage = 'password'"
        >
          <div
            class="flex items-center justify-center cursor-pointer text-lg font-extrabold"
          >
            <p>تغییر رمز عبور</p>
          </div>
        </div>
        <div
          class="transition-all p-4 box-number box flex items-center justify-center"
          @click="stage = 'number'"
        >
          <div
            class="flex justify-center items-center cursor-pointer text-lg font-extrabold"
          >
            <p>تغییر شماره تلفن</p>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="stage === 'password'"
      class="stages-pass flex mt-8 justify-center flex-row-reverse"
    >
      <div
        class="stage mx-2.5"
        :class="{
          'active sm:block': step === 0,
          'pass hidden lg:block': step > 0,
        }"
      >
        <div class="stage-input"></div>
        <p class="text-center mt-4 text-xs">کدتایید</p>
      </div>
      <div
        class="stage mx-2.5"
        :class="{
          'active sm:block': step === 1,
          'pass hidden lg:block': step > 1,
          'hidden md:block': step < 1,
        }"
      >
        <div class="stage-input"></div>
        <p class="text-center mt-4 text-xs">رمز عبور جدید</p>
      </div>
      <div
        class="stage mx-2.5"
        :class="{
          'active sm:block': step === 2,
          pass: step > 3,
          'hidden md:block': step < 2 || step > 2,
        }"
      >
        <div class="stage-input"></div>
        <p class="text-center mt-4 text-xs">نتیجه درخواست</p>
      </div>
    </div>
    <div
      v-if="stage === 'number'"
      class="stages-num flex mt-8 justify-center flex-row-reverse"
    >
      <div
        class="stage mx-2.5"
        :class="{
          'active sm:block': step === 0,
          'pass hidden lg:block': step > 0,
        }"
      >
        <div class="stage-input"></div>
        <p class="text-center mt-4 text-xs">کدتایید</p>
      </div>
      <div
        class="stage mx-2.5"
        :class="{
          'active sm:block': step === 1,
          'pass hidden lg:block': step > 1,
          'hidden md:block': step < 1,
        }"
      >
        <div class="stage-input"></div>
        <p class="text-center mt-4 text-xs">رمز عبور جدید</p>
      </div>
      <div
        class="stage mx-2.5"
        :class="{
          'active sm:block': step === 2,
          pass: step > 2,
          'hidden md:block': step < 2 || step > 2,
        }"
      >
        <div class="stage-input"></div>
        <p class="text-center mt-4 text-xs">نتیجه درخواست</p>
      </div>
    </div>
    <!-- password -->
    <div v-if="stage === 'password' && step === 0">
      <p class="mx-auto text-lg text-center mt-20">تغییر رمز عبور</p>
      <p class="text-base text-center mt-8">
        برای تغییر رمز عبور خود کدی که برای شما ارسال شده است را وارد کنید و به
        مرحله بعد بروید
      </p>
      <div
        class="sm:w-5/12 password-box items-center w-full flex-wrap-reverse mx-auto flex px-7 mt-24"
        dir="rtl"
      >
        <BaseButton
          @click="step = 1"
          class="text-white send-again w-full sm:w-auto"
          >ارسال مجدد</BaseButton
        >
        <div class="code-inputs flex flex-1 justify-between sm:mr-10">
          <input
            maxlength="1"
            size="1"
            class="code-input bg-primary focus:outline-none text-lg"
          />
          <input
            maxlength="1"
            size="1"
            class="code-input bg-primary focus:outline-none text-lg"
          />
          <input
            maxlength="1"
            size="1"
            class="code-input bg-primary focus:outline-none text-lg"
          />
          <input
            maxlength="1"
            size="1"
            class="code-input bg-primary focus:outline-none text-lg"
          />
        </div>
      </div>
    </div>
    <div v-else-if="stage === 'password' && step === 1">
      <p class="mx-auto text-lg text-center mt-20">رمز عبور جدید</p>
      <p class="text-base text-center mt-8">
        رمز عبور حدید خود را وارد کرده و برای اطمینان در کادر بعدی دوباره وارد
        کنید
      </p>
      <div
        class="new-password justify-between mt-12 w-full sm:w-7/12 mx-auto sm:px-12 pt-7 pb-11 flex"
        dir="rtl"
      >
        <div class="sm:w-7/12 w-full px-5 sm:px-0">
          <div>
            <label class="text-base" for="newpassword"> رمز عبور جدید </label>
            <div
              class="newpassword-container mt-1.5 h-10 relative w-full shadow-none"
            >
              <input
                type="password"
                class="border-Neutral-Green1 absolute bg-primary w-full pl-1"
                id="newpassword"
                dir="ltr"
              />
              <client-only>
                <img
                  class="absolute right-4 cursor-pointer inset-y-2.5"
                  src="../../assets/images/seepass.svg"
                  v-if="!newPassword"
                  alt=""
                  @click="togglenewPassword"
                />
                <img
                  v-else
                  class="absolute right-4 cursor-pointer inset-y-2.5"
                  src="../../assets/images/dcpass.svg"
                  alt=""
                  @click="togglenewPassword"
                />
              </client-only>
            </div>
          </div>
          <div class="mt-10">
            <label class="text-base" for="newpasswordagain">
              تکرار رمز عبور جدید
            </label>
            <div
              class="newpassword-container mt-1.5 h-10 relative w-full shadow-none"
            >
              <input
                type="password"
                class="border-Neutral-Green1 absolute bg-primary w-full pl-1"
                id="newpasswordagain"
                dir="ltr"
              />
              <client-only>
                <img
                  class="absolute right-4 cursor-pointer inset-y-2.5"
                  src="../../assets/images/seepass.svg"
                  v-if="!newPasswordAgain"
                  alt=""
                  @click="togglenewPasswordAgain"
                />
                <img
                  v-else
                  class="absolute right-4 cursor-pointer inset-y-2.5"
                  src="../../assets/images/dcpass.svg"
                  alt=""
                  @click="togglenewPasswordAgain"
                />
              </client-only>
            </div>
          </div>
          <BaseButton @click="step++" :full="true" class="mt-6"
            ><span class="text-white">تایید</span></BaseButton
          >
        </div>
        <img
          src="../../assets/images/password-bg.svg"
          class="md:block hidden"
          alt=""
        />
      </div>
    </div>
    <div v-else-if="stage === 'password' && step === 2">
      <div>
        <div class="flex flex-col justify-center items-center mt-32">
          <p class="text-lg">تغییر رمز عبور شما با موفقیت انجام شد</p>
          <lottie
            :options="lottieOptions"
            :width="300"
            v-on:animCreated="handleAnimation"
          />
        </div>

        <base-button
          @click="$router.push('/')"
          class="w-36 mt-11"
          :bGreen="true"
          >پایان</base-button
        >
      </div>
    </div>
    <!-- number -->
    <div v-if="stage === 'number' && step === 0">
      <p class="mx-auto text-lg text-center mt-20">تغییر شماره موبایل</p>
      <p class="text-base text-center mt-8">
        گذرواژه خود را برای تغییر شماره تلفن وارد کنید
      </p>
      <div
        class="enter-password justify-between px-9 py-7 sm:w-7/12 mx-auto mt-12 flex"
        dir="rtl"
      >
        <div class="w-full sm:w-8/12">
          <label for="enter-pass"> گذرواژه: </label>
          <input
            dir="ltr"
            type="text"
            class="bg-primary border-Neutral-Green1 mt-2.5 w-full"
            style="height: 60px"
            id="enter-pass"
          />
          <BaseButton class="mt-7" @click="step++" :full="true"
            ><span class="text-white">تایید</span></BaseButton
          >
        </div>
        <img
          class="hidden sm:block"
          src="../../assets/images/enter-password.svg"
          alt=""
        />
      </div>
    </div>
    <div class="enter-new-num" v-else-if="stage === 'number' && step === 1">
      <p class="mx-auto text-lg text-center mt-20">شماره موبایل جدید</p>
      <p class="text-base text-center mt-8">
        شماره موبایل قدیمی شما نمایش داده شده لطفا شماره موبایل جدید خود را وارد
        کنید
      </p>
      <div
        class="flex enter-new mt-32 justify-between sm:w-7/12 mx-auto py-7 px-5 sm:pl-5 sm:pr-14"
        dir="rtl"
      >
        <div class="sm:w-7/12 w-full">
          <BaseInput label="شماره موبایل قدیم" />
          <BaseInput class="mt-4" :code="true" label="شماره موبایل جدید" />
          <BaseInput class="mt-3" label="کد تایید" />
          <BaseButton @click="step++" class="mt-7" :full="true"
            ><span class="text-white">تایید</span></BaseButton
          >
        </div>
        <img
          class="md:block hidden"
          src="../../assets/images/bg-new-num.svg"
          alt=""
        />
      </div>
    </div>
    <div v-else-if="stage === 'number' && step === 2">
      <div>
        <div class="flex flex-col justify-center items-center mt-32">
          <p class="text-lg">شماره موبایل شما با موفقیت تغییر یافت</p>
          <lottie
            :options="lottieOptions"
            :width="300"
            v-on:animCreated="handleAnimation"
          />
        </div>

        <base-button
          @click="$router.push('/')"
          class="w-36 mt-11"
          :bGreen="true"
          >پایان</base-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import * as animationData from "~/assets/animations/animation.json";
import lottie from "vue-lottie/src/lottie.vue";

export default {
  components: {
    lottie,
  },
  data() {
    return {
      stage: "",
      step: 0,
      code1: "",
      code2: "",
      code3: "",
      code4: "",
      newPassword: false,
      newPasswordAgain: false,
      anim: null, // for saving the reference to the animation
      lottieOptions: { animationData: animationData.default },
    };
  },
  methods: {
    handleAnimation: function (anim) {
      this.anim = anim;
    },
    togglenewPassword() {
      if (process.client) {
        if (document.querySelector("#newpassword").type == "password") {
          document.querySelector("#newpassword").type = "text";
          this.newPassword = true;
        } else {
          document.querySelector("#newpassword").type = "password";
          this.newPassword = false;
        }
      }
    },
    togglenewPasswordAgain() {
      if (process.client) {
        if (document.querySelector("#newpasswordagain").type == "password") {
          document.querySelector("#newpasswordagain").type = "text";
          this.newPasswordAgain = true;
        } else {
          document.querySelector("#newpasswordagain").type = "password";
          this.newPasswordAgain = false;
        }
      }
    },
  },
};
</script>

<style scoped>
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
.stages-pass .stage:nth-of-type(1) .stage-input::after {
  background-image: url(../../assets/images/phone.svg);
}
.stages-pass .stage:nth-of-type(2) .stage-input::after {
  background-image: url(../../assets/images/lock.svg);
}
.stages-pass .stage:nth-of-type(3) .stage-input::after {
  background-image: url(../../assets/images/verifyed.svg);
}

.stages-num .stage:nth-of-type(1) .stage-input::after {
  background-image: url(../../assets/images/pass-check.svg);
}
.stages-num .stage:nth-of-type(2) .stage-input::after {
  background-image: url(../../assets/images/phone.svg);
}
.stages-num .stage:nth-of-type(3) .stage-input::after {
  background-image: url(../../assets/images/verifyed.svg);
}

.code-input {
  width: 60px;
  height: 60px;
  border: 1px solid #15ab89;
  border-radius: 5px;
  font-size: 30px;
  text-align: center;
}
.send-again {
  height: 60px;
}
.boxes-container {
  max-width: 756px;
}
.box {
  width: 323px;
  height: 323px;

  border: 2px solid #15ab89;
  box-shadow: inset 0px 0px 10px #15ab89;
  filter: drop-shadow(0px 0px 10px #15ab89);
  border-radius: 10px;
}
.box > div {
  width: 290px;
  height: 290px;
}
.box:hover {
  transform: scale(1.1);
}
.box-password > div {
  background-image: url(../../assets/images/bg-password.svg);
}
.box-number > div {
  background-image: url(../../assets/images/bg-number.svg);
}
.password-box {
  height: 125.99px;
  background: linear-gradient(
    91.44deg,
    rgba(255, 255, 255, 0.18) 0%,
    rgba(196, 196, 196, 0.06) 100%
  );
  backdrop-filter: blur(12px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 10px;
  box-shadow: inset 0px 0px 10px #15ab89;
  filter: drop-shadow(0px 0px 10px #15ab89);
  border-radius: 10px;
  filter: drop-shadow(0px 4px 10px #000000);
}
.new-password {
  height: 303px;
  background: linear-gradient(
    91.44deg,
    rgba(255, 255, 255, 0.18) 0%,
    rgba(196, 196, 196, 0.06) 100%
  );
  backdrop-filter: blur(12px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 10px;
  border: 2px solid #15ab89;
}
input {
  filter: none;
  box-shadow: none;
}
.enter-password {
  background: linear-gradient(
    91.44deg,
    rgba(255, 255, 255, 0.18) 0%,
    rgba(196, 196, 196, 0.06) 100%
  );
  border: 2px solid #15ab89;

  backdrop-filter: blur(12px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 10px;
  height: 224px;
}
.enter-new {
  height: 379px;
  background: linear-gradient(
    91.44deg,
    rgba(255, 255, 255, 0.18) 0%,
    rgba(196, 196, 196, 0.06) 100%
  );
  backdrop-filter: blur(12px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 10px;
  border: 2px solid #15ab89;
}
.enter-new-num .sendcode-input {
  width: 100% !important;
}
</style>
