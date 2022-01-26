<template>
  <div class="deposit-crypto flex flex-col px-3 mx-auto sm:mx-0 my-5">
    <div
      class="flex flex-row-reverse flex-wrap-reverse sm:flex-nowrap justify-center"
    >
      <div class="flex-1 sm:flex-none">
        <div
          class="input-name-container flex flex-row-reverse mt-12 items-center"
        >
          <div
            class="crypto-logo relative z-20 flex items-center justify-center"
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
      </div>
      <div
        class="bg-primary flex-1 sm:flex-none items-center qr-code flex flex-col mx-auto sm:mr-5 mt-8 px-5 py-4"
      >
        <img src="../assets/images/qr-code.svg" alt="" />
        <div class="mt-5 flex items-center justify-center">
          <img src="../assets/images/bulk-documnet-copy.svg" alt="" />
          <p style="font-size: 10px">asndfoshdohofshoushiou</p>
        </div>
      </div>
    </div>
    <div class="flex justify-center sm:justify-between mt-8 flex-wrap">
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
  </div>
</template>

<script>
export default {};
</script>

<style>
.deposit-crypto {
  max-width: 572px;
  min-height: 415px;
  background: linear-gradient(
    91.44deg,
    rgba(255, 255, 255, 0.18) 0%,
    rgba(196, 196, 196, 0.06) 100%
  );
  backdrop-filter: blur(12px);
  border-radius: 10px;
  border: 2px solid #15ab89;
  box-sizing: border-box;
  box-shadow: 0px 0px 10px #15ab89;
  /* filter: drop-shadow(0px 0px 10px #15ab89); */
}
.deposit-crypto > :first-child > :first-child {
  width: 306px;
}
.input-name-container {
  height: 76px;
}
.crypto-logo {
  width: 76px;
  height: 76px;
  background-image: linear-gradient(
    91.44deg,
    rgba(255, 255, 255, 0.18) 0%,
    rgba(196, 196, 196, 0.06) 100%
  );
  border-radius: 50%;
}
.name-input {
  height: 42px;
}
.qr-code {
  width: 219px;
  height: 275px;
  background: #010e17;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
}
.qr-code > div {
  width: 183px;
  height: 32px;
  background-image: linear-gradient(
    91.44deg,
    rgba(255, 255, 255, 0.18) 0%,
    rgba(196, 196, 196, 0.06) 100%
  );
  backdrop-filter: blur(12px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 5px;
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
@media (max-width: 500px) {
  .deposit-crypto {
    width: 340px;
    padding: 1px;
    padding-top: auto;
  }
}
</style>
