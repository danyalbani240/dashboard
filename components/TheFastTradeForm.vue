<template>
  <div class="mt-8">
    <base-part-header :address="'insidereport'" headName="خرید و فروش سریع" />

    <div class="fast-form mt-8 pt-5 md:px-8 flex flex-col items-center">
      <div class="flex flex-row-reverse w-full text-sm justify-between">
        <div
          class="bg-gray-gr flex items-center justify-between px-1.5"
          dir="rtl"
        >
          <span dir="rtl">قیمت خرید Btc:</span>
          <span style="color: #14b82e">۱۸٬۵۹۷٬۹۶۳٬۹۱۴٫۶۵ </span>
        </div>
        <div
          dir="rtl"
          class="bg-gray-gr flex items-center justify-between px-1.5"
        >
          <span dir="rtl">موجودی</span>
          <span>0 ریال</span>
        </div>
      </div>
      <div class="buy-sell-switch mt-4 flex flex-row-reverse items-center">
        <div class="buy-button text-center">خرید</div>
        <div class="sell-button text-center mr-2">فروش</div>
      </div>
      <div class="flex flex-col mt-6">
        <p dir="rtl">انتخاب ارز ارسالی:</p>
        <div class="flex flex-row-reverse crypto-send bg-primary">
          <div
            class="h-full flex justify-evenly px-6 cursor-pointer items-center"
          >
            <span class="mr-1">IRR</span>
            <img src="../assets/images/downArrow.svg" />
          </div>
        </div>
      </div>
      <div class="flex flex-col mt-6">
        <p dir="rtl">انتخاب ارز دریافتی:</p>
        <div class="flex flex-row-reverse crypto-send bg-primary">
          <div
            class="h-full flex justify-evenly pl-2 cursor-pointer items-center"
          >
            <img src="../assets/images/cardano-ada.svg" alt="" />
            <span class="mr-1">BTC</span>
            <img src="../assets/images/downArrow.svg" />
          </div>
        </div>
      </div>
      <base-range-input />
      <base-button :bGreen="true" class="w-full mt-16"><span class="text-Neutral-Gray">خرید</span></base-button>
    </div>
  </div>
</template>

<script>
import BaseButton from "./Base/BaseButton.vue";

export default {
  components: { BaseButton },
};
</script>

<style scoped>
.fast-form {
  max-width: 527px;
  height: 458px;
  background: linear-gradient(
    91.44deg,
    rgba(255, 255, 255, 0.18) 0%,
    rgba(196, 196, 196, 0.06) 100%
  );
  backdrop-filter: blur(12px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 10px;
}
.bg-gray-gr {
  background-image: linear-gradient(
    91.44deg,
    rgba(255, 255, 255, 0.18) 0%,
    rgba(196, 196, 196, 0.06) 100%
  );
  border-radius: 100px;
  width: 220px;
  height: 32px;
}
.buy-sell-switch {
  max-width: 481px;
  height: 34px;
  border: 1px solid #14b82e;
  border-radius: 17px;
  padding-right: 3px;
  padding-left: 3px;
}
.buy-button {
  background-color: #14b82e;
  border-radius: 13px;
}
.buy-button,
.sell-button {
  width: 220px;
  height: 28px;
}
.crypto-send {
  width: 481px;
  height: 42px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  font-size: 14px;
}
.crypto-send > :first-child {
  width: 90px;
  position: relative;
}
.crypto-send > :first-child::before {
  height: 100%;
  position: absolute;
  content: "";
  width: 2px;
  background-image: linear-gradient(
    0deg,
    rgba(1, 14, 23, 0) 0%,
    #15ab89 51.04%,
    rgba(1, 14, 23, 0) 100%
  );
  left: 2px;
}

</style>
