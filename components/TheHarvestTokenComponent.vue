<template>
  <div class="harvest-crypto">
    <div class="flex flex-row-reverse items-center">
      <div
        class="w-16 h-16 rounded-full crypto-logo flex items-center justify-center"
      >
        <img src="../assets/images/deposit-token/bitcoin.svg" alt="" />
      </div>
      <div
        class="flex flex-row-reverse justify-between items-center rounded -mr-2 pr-3 bg-primary name-input flex-1"
      >
        <p>نام رمز ارز</p>
        <div class="flex items-center px-2">
          <img src="../assets/images/search-normal.svg" alt="" />
          <div class="divider mx-2"></div>
          <p class="text-xs">BTC</p>
        </div>
      </div>
    </div>
    <div class="mt-5">
      <p dir="rtl">شبکه:</p>
      <div
        class="mt-1.5 flex flex-row-reverse items-center rounded -mr-2 pr-3 bg-primary name-input flex-1 justify-end"
      >
        <div class="flex text-sm">
          <img
            class="mx-2.5"
            src="../assets/images/deposit-token/consist-close.svg"
            alt=""
          />
          <p class="opacity-20">ERC20</p>
        </div>
      </div>
    </div>
    <div class="flex mt-3">
      <base-badge name="TRX" />
      <base-badge name="BTC" />
      <base-badge name="ERC20" />
      <base-badge name="TRC20" />
    </div>
    <div class="mt-5">
      <p dir="rtl">نواع انتقال:</p>
      <div
        class="mt-1.5 flex flex-row-reverse items-center rounded -mr-2 pr-3 bg-primary name-input flex-1"
      >
        <div class="flex text-sm">
          <img
            class="mx-2.5"
            src="../assets/images/deposit-token/consist-close.svg"
            alt=""
          />
          <p class="opacity-20">ERC20</p>
        </div>
      </div>
    </div>
    <div class="flex mt-3">
      <base-badge name="Fast" />
      <base-badge name="Trade" />
    </div>
    <div class="mt-5">
      <p dir="rtl">فی شبکه:</p>
      <div
        class="mt-1.5 flex items-center rounded -mr-2 pr-3 bg-primary name-input flex-1 justify-between"
      >
        <div class="flex text-sm">
          <img
            class="mx-2.5"
            src="../assets/images/deposit-token/consist-close.svg"
            alt=""
          />
          <p class="opacity-20">ثابت</p>
        </div>
        <div class="flex items-center">
          <div class="divider"></div>
          <p class="mx-7 text-sm">0.000181025 btc</p>
        </div>
      </div>
    </div>
    <div class="flex mt-3 flex-row-reverse">
      <base-badge name="ثابت" />
      <base-badge name="متغیر" />
    </div>
    <div class="mt-5">
      <p dir="rtl">آدرس انتقال:</p>
      <div
        class="mt-1.5 flex items-center rounded -mr-2 pl-3 bg-primary name-input flex-1"
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
        class="mt-1.5 flex items-center rounded -mr-2 pr-3 bg-primary name-input flex-1 justify-between"
      >
        <div style="color: #14b82e" class="ml-2">MAX</div>
        <div class="flex items-center">
          <div class="divider mr-1"></div>
          <span class="opacity-20 mr-8">5.000.000</span>
          <p class="mr-1.5">:مبلغ نهایی</p>
        </div>
      </div>
    </div>
    <div class="flex justify-between mt-8">
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
    <base-button class="w-full mt-7" :bGreen="true"
      ><span>برداشت</span></base-button
    >
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.harvest-crypto {
  padding-top: 30px;
  width: 572px;
  height: 838px;
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
</style>
