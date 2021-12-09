<template>
  <div dir="rtl" class="base-item-container relative">
    <div style="top: 18px" class="relative z-20 flex">
      <div
        class="rounded-full bg-primary item-logo flex justify-center items-center"
      >
        <img src="../../assets/images/bitcoinseeklogo.svg" alt="" />
      </div>
      <div
        class="-mr-6 item-short rounded-full flex justify-center items-center self-end"
      >
        BTC
      </div>
    </div>
    <div class="base-item relative z-10 justify-between flex pt-5 items-center">
      <div class="h-10 flex items-center invent-primary justify-between">
        <div class="h-10 w-10 flex justify-center items-center relative z-10">
          <img src="../../assets/images/walletcheck.svg" alt="" />
        </div>
        <div
          class="-mr-1 relative z-0 justify-between text-sm flex items-center px-4"
        >
          <span class="inline-block">موجودی اصلی</span>
          <span>96.222</span>
        </div>
      </div>
      <div class="h-10 flex items-center invent-primary">
        <div class="h-10 w-10 flex justify-center items-center relative z-10">
          <img src="../../assets/images/empty-walletchange.svg" alt="" />
        </div>
        <div
          class="-mr-1 relative z-0 justify-between text-sm flex items-center px-4"
        >
          <span class="inline-block">موجودی اصلی</span>
          <span>96.222</span>
        </div>
      </div>
      <div
        class="flex items-center deposit h-8 w-24 justify-between text-center"
      >
        <span class="flex-1">واریز</span>
        <span class="relative"
          ><img
            class="relative"
            src="../../assets/images/downbutton.svg"
            alt=""
        /></span>
      </div>
      <div
        class="flex items-center harvest h-8 w-24 justify-between text-center"
      >
        <span class="flex-1">برداشت</span>
        <span class="relative"
          ><img class="relative" src="../../assets/images/upbutton.svg" alt=""
        /></span>
      </div>
      <div class="flex items-center trade h-8 w-24 justify-between text-center">
        <span class="flex-1">ترید</span>
        <span class="relative"
          ><img
            class="relative"
            src="../../assets/images/trade-button.svg"
            alt=""
        /></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.base-item {
  background: linear-gradient(
    91.44deg,
    rgba(255, 255, 255, 0.18) 0%,
    rgba(196, 196, 196, 0.06) 100%
  );
  width: 1180px;
  height: 98px;
  border: 2px solid #15ab89;
  padding-right: 121px;
  padding-left: 121px;
  /* box-shadow: inset 0px 0px 10px #15ab89; */
  /* filter: drop-shadow(0px 0px 10px #15ab89); */
  border-radius: 10px;
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
.deposit {
  background-image: linear-gradient(
    81.72deg,
    rgba(31, 42, 50, 0) 6.35%,
    #15ab88 93.65%
  );
  border-radius: 5px;
}
.harvest {
  background-image: linear-gradient(
    270deg,
    #b81414 0%,
    rgba(31, 42, 50, 0) 100%
  );
  border-radius: 5px;
}
.trade {
  background-image: linear-gradient(
    87.55deg,
    rgba(36, 47, 55, 0) 1.6%,
    #144bb8 98.6%
  );
  border-radius: 5px;
}
.item-logo {
  box-shadow: 0px 6px 50px rgba(60, 59, 59, 0.25);
  width: 102px;
  height: 102px;
}
.item-short {
  width: 58px;
  height: 58px;

  background: linear-gradient(
    91.44deg,
    rgba(255, 255, 255, 0.18) 0%,
    rgba(196, 196, 196, 0.06) 100%
  );
  backdrop-filter: blur(12px);
}
</style>
