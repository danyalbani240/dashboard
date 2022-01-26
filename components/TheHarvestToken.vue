<template>
  <div class="flex-1 flex flex-col items-end">
    <base-part-header :address="'insidereport'" headName="برداشت رمز ارز" />

    <div
      class="harvest-crypto harvest-crypto flex mx-auto sm:mx-0 flex-col my-5"
    >
      <div class="flex flex-row-reverse items-center">
        <div
          class="w-16 h-16 rounded-full crypto-logo flex items-center justify-center"
        >
          <img src="../assets/images/deposit-token/bitcoin.svg" alt="" />
        </div>
        <div
          class="flex flex-row-reverse justify-between items-center rounded -mr-2 pr-3 bg-primary name-input w-full"
        >
          <p>نام رمز ارز</p>
          <div class="flex items-center px-2">
            <img src="../assets/images/search-normal.svg" alt="" />
            <div class="divider mx-2"></div>
            <p class="text-xs">BTC</p>
          </div>
        </div>
      </div>
      <BaseRadio :options="['TRX', 'BTC', 'ERC20', 'TRC20']" label="شبکه" />
      <BaseRadio :options="['Fast', 'Trade']" label="نوع انتقال" />
      <BaseRadio :options="['متغیر', 'ثابت']" label="فی شبکه" />

      <div class="mt-5">
        <p dir="rtl">آدرس انتقال:</p>
        <div
          @click="copyText"
          class="mt-1.5 flex cursor-pointer items-center rounded -mr-2 pl-3 bg-primary name-input w-full"
        >
          <img class="mr-1" src="../assets/images/document-copy.svg" alt="" />
          <p class="opacity-20 overflow-hidden text-xs">
            afhoishisdiusdiufsiudfgiaudgfiuusagdfiuagdfiugaidufgiaudgUQY8TWEUEV7uwgdgfoiijad
          </p>
        </div>
      </div>
      <div class="mt-5">
        <p dir="rtl">مقدار برداشت:</p>
        <div
          class="mt-1.5 flex items-center rounded -mr-2 pr-3 bg-primary name-input w-full justify-between"
        >
          <div style="color: #14b82e" class="ml-2">MAX</div>
          <div class="flex items-center">
            <div class="divider mr-1"></div>
            <span class="opacity-20 mr-8">5.000.000</span>
            <p class="mr-1.5">:مبلغ نهایی</p>
          </div>
        </div>
      </div>
      <div class="flex sm:justify-between mt-8 flex-wrap justify-center">
        <div
          class="h-10 flex flex-row-reverse items-center invent-primary justify-between"
        >
          <div class="h-10 w-10 flex justify-center items-center relative z-10">
            <img src="/_nuxt/assets/images/walletcheck.svg" alt="" />
          </div>
          <div
            class="-mr-1 relative z-0 justify-between text-sm flex items-center px-4"
          >
            <span class="inline-block">موجودی اصلی</span>
            <span>96.222</span>
          </div>
        </div>
        <div
          class="h-10 flex flex-row-reverse items-center invent-primary justify-between"
        >
          <div class="h-10 w-10 flex justify-center items-center relative z-10">
            <img src="/_nuxt/assets/images/walletcheck.svg" alt="" />
          </div>
          <div
            class="-mr-1 relative z-0 justify-between text-sm flex items-center px-4"
          >
            <span class="inline-block">موجودی اصلی</span>
            <span>96.222</span>
          </div>
        </div>
      </div>
      <base-button class="w-full mt-7 mb-7" :bGreen="true"
        ><span class="text-white">برداشت</span></base-button
      >
    </div>
  </div>
</template>

<script>
import BasePartHeader from "./Base/BasePartHeader.vue";
export default {
  methods: {
    data() {
      return {
        qr: "afhoishisdiusdiufsiudfgiaudgfiuusagdfiuagdfiugaidufgiaudgUQY8TWEUEV7uwgdgfoiijad",
      };
    },
    copyText() {
      window.navigator.clipboard.writeText(this.qr);
    },
  },
};
</script>

<style scoped>
.harvest-crypto {
  padding-top: 30px;
  max-width: 572px;
  min-height: 838px;
  background: linear-gradient(
    91.44deg,
    rgba(255, 255, 255, 0.18) 0%,
    rgba(196, 196, 196, 0.06) 100%
  );
  backdrop-filter: blur(12px);
  /* Note: backdrop-filter has minimal browser support */
  padding-right: 18px;
  padding-left: 33px;
  border-radius: 10px;
  border: 2px solid #15ab89;
  box-sizing: border-box;
  box-shadow: 0px 0px 10px #15ab89;
  /* filter: drop-shadow(0px 0px 10px #15ab89); */
  border-radius: 10px;
}
.name-input {
  height: 42px;
  box-sizing: border-box;
}
.crypto-logo {
  background: linear-gradient(
    91.44deg,
    rgba(255, 255, 255, 0.18) 0%,
    rgba(196, 196, 196, 0.06) 100%
  );
  backdrop-filter: blur(12px);
}
.invent-primary > :first-child {
  background-color: #010e17;
  border: 1px solid #15ab89;
  box-shadow: -4px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
}
.invent-primary > :nth-child(2) {
  background-image: linear-gradient(
    91.44deg,
    rgba(255, 255, 255, 0.18) 0%,
    rgba(196, 196, 196, 0.06) 100%
  );
  backdrop-filter: blur(12px);
  border-radius: 3px;
  width: 189px;
  height: 32px;
}
@media only screen and (max-width: 570px) {
  .harvest-crypto {
    width: 340px;
    padding: 1px;
    padding-top: auto;
  }
}
</style>
