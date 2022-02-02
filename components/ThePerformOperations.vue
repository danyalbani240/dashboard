<template>
  <div class="relative">
    <div
      class="absolute doing-performation-box flex items-center justify-center"
    >
      <img src="../assets/images/lastpicon.svg" alt="" />
      <p class="mx-4">انجام عملیات</p>
      <img
        style="transform: rotate(180deg)"
        src="../assets/images/lastpicon.svg"
        alt=""
      />
    </div>
    <div
      class="flex flex-wrap flex-row-reverse px-3 justify-between items-center perform-operation mx-auto w-11/12 sm:w-9/12"
    >
      <div class="flex-1">
        <p class="text-right">:انتخاب حساب ارزی</p>
        <div
          class="select-perform mt-3 flex flex-col justify-center text-lg text-center items-center"
        >
          <p>IRR</p>
          <p>ریال</p>
        </div>
      </div>
      <div class="flex-1 mx-1">
        <p class="text-right mb-3">:انتخاب کارت</p>
        <div class="select-credit mx-2 my-4 px-8 pt-4">
          <div class="flex flex-row-reverse justify-between">
            <img src="../assets/images/mellatbankicon.svg" alt="" /><img
              src="../assets/images/crediticon.svg"
              alt=""
            />
          </div>
          <p
            style="color: #2c2e35"
            class="text-center font-extrabold text-lg mt-7"
          >
            6280 2313 5761 1705
          </p>
          <div class="flex flex-row-reverse justify-between mt-6">
            <p style="color: #2c2e35">ن علیزاده</p>
            <div style="right: 1rem" class="flex relative">
              <img src="../assets/images/updowncarddownbutton.svg" alt="" />
              <div class="flex flex-row-reverse">
                <div
                  class="rounded-full justify-center items-center relative z-20 flex cart-b-icon bg-primary"
                >
                  <img src="../assets/images/weiredGreen.svg" alt="" />
                </div>
                <div
                  style="left: 10px"
                  class="rounded-full justify-center flex z-10 relative items-center cart-b-icon bg-primary"
                >
                  <img src="../assets/images/weiredcartYellow.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-1">
        <p v-if="withdarw == false" class="text-right">:مقدار واریزی</p>
        <p v-else class="text-right">:مبلغ برداشتی</p>
        <div
          class="bg-primary flex deposit-value justify-between mx-auto flex-col items-center px-4 py-9 mt-3"
        >
          <base-input class="w-11/12" />
          <p
            style="line-height: 15px"
            v-if="!withdarw"
            class="text-xs w-11/12 text-center mt-3.5"
          >
            حداقل مقدار قابل واریز:500,000 ریال
          </p>
          <p
            style="line-height: 15px"
            v-else
            class="text-xs w-11/12 text-center mt-3.5"
          >
            حداقل مقدار قابل برداشت:500,000 ریال
          </p>
          <p
            v-if="!withdarw"
            style="line-height: 15px"
            class="text-xs w-11/12 text-center mb-3.5"
          >
            حداکثر مقدار قابل واریز:500,000,000 ریال
          </p>
          <p
            v-else
            style="line-height: 15px"
            class="text-xs w-11/12 text-center mb-3.5"
          >
            حداکثر مقدار قابل برداشت:2.000,000,000 ریال
          </p>
          <base-button class="w-11/12" v-if="withdarw == false" :bGreen="true"
            ><span class="text-white text-sm sm:text-base"
              >انتقال به درگاه پرداخت</span
            ></base-button
          >
          <base-button
            class="w-11/12 sell-btn transition-all"
            style="background: #eb0020; border: none"
            v-else
            ><span class="text-white">ثبت درخواست</span></base-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    withdarw: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.sell-btn:hover {
  box-shadow: 0px 4px 10px rgba(184, 20, 20, 0.25);
  transform: scale(1.0001);
}
.perform-operation {
  margin-top: 120px;

  border-radius: 10px;
  border: 2px solid #15ab89;

  box-shadow: inset 0px 0px 10px #15ab89;
  background-image: linear-gradient(
    91.44deg,
    rgba(255, 255, 255, 0.18) 0%,
    rgba(196, 196, 196, 0.06) 100%
  );
  backdrop-filter: blur(12px);
  min-height: 369px;
}
.select-perform {
  background-image: url(../assets/images/selectperform.svg);
  background-color: #010e17;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.5);
  border-radius: 18px;

  min-width: 256px;
  height: 209px;
}
.select-credit {
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(../assets/images/mellatbank.svg);
  min-width: 260px;
  height: 209px;
  border-radius: 18px;
  filter: drop-shadow(0px 6px 30px rgba(21, 171, 137, 0.2));
}
.cart-b-icon {
  background-color: #000509;
  width: 32px;
  height: 32px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);
}
.deposit-value {
  min-width: 256px;
  height: 209px;
  background-color: #010e17;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(21, 171, 137, 0.3);
  border-radius: 18px;
}
.doing-performation-box {
  width: 234px;
  height: 60px;
  z-index: 20;
  left: 50%;
  transform: translate(-50%, -100%);
  background: linear-gradient(
    91.44deg,
    rgba(255, 255, 255, 0.18) 0%,
    rgba(196, 196, 196, 0.06) 100%
  );
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.49);
  backdrop-filter: blur(12px);
  border-radius: 10px 10px 0px 0px;
}
</style>
