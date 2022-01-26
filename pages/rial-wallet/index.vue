<template>
  <div class="bg-primary w-full text-Neutral-Gray p-5">
    <base-dashboard-header :pageName="'کیف پول'" />
    <base-part-header :address="'insidereport'" headName="کیف پول ریالی" />
    <div class="flex flex-col items-end mt-8">
      <div class="create-acc flex flex-row-reverse justify-center items-center">
        <img src="../../assets/images/trade-button.svg" alt="" />
        <span>ایجاد حساب</span>
      </div>
      <div class="relative w-full mt-16" dir="rtl">
        <div class="absolute card-bg"></div>
        <div
          class="bg-primary mx-auto sm:mx-0 w-11/12 sm:w-6/12 rial-wallet-card px-2 sm:px-8 py-4"
        >
          <div class="flex justify-center flex-col items-center">
            <div class="w-24 flag h-24 flex items-center justify-center">
              <img src="../../assets/images/iran-flag.svg" alt="" />
            </div>
            <div class="flex justify-center mt-2.5">IRR</div>
          </div>
          <div dir="rtl" class="mt-5">
            <div class="h-10 flex items-center invent-primary">
              <div
                class="h-10 w-10 flex justify-center items-center relative z-10"
              >
                <img src="../../assets/images/walletcheck.svg" alt="" />
              </div>
              <div
                class="-mr-1 relative z-0 justify-between text-sm flex items-center px-4"
              >
                <span class="inline-block">موجودی اصلی</span>
                <span>96.222</span>
              </div>
            </div>
          </div>
          <div
            dir="rtl"
            class="flex justify-between credits px-2.5 items-center"
          >
            <p>کارت های بانکی</p>
            <img src="../../assets/images/cards.svg" />
          </div>
          <div class="justify-between flex mt-4" dir="rtl">
            <base-button :buy="true" :bGreen="true"
              ><span class="text-white">خرید</span></base-button
            >
            <base-button :sell="true">فروش</base-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.rial-wallet-card {
  height: 389px;
  background-image: url(../../assets/images/rail-wallet-card.svg);

  border: 1px solid rgba(21, 171, 137, 0.3);
  box-sizing: border-box;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);
  border-radius: 18px;
  position: relative;
  z-index: 2;
}
.flag {
  background: linear-gradient(
    91.44deg,
    rgba(255, 255, 255, 0.18) 0%,
    rgba(196, 196, 196, 0.06) 100%
  );
  backdrop-filter: blur(12px);
  border-radius: 30px;
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
.credits {
  background: linear-gradient(
    91.44deg,
    rgba(255, 255, 255, 0.18) 0%,
    rgba(196, 196, 196, 0.06) 100%
  );
  border-radius: 3px;
  backdrop-filter: blur(12px);
  height: 56px;
}
.create-acc {
  background-image: linear-gradient(
    272deg,
    rgba(21, 171, 137, 0.6) 0%,
    rgba(1, 14, 23, 0) 100%
  );
  width: 171px;
  height: 56px;
  backdrop-filter: blur(12px);
  border-radius: 3px;
}
.card-bg {
  width: 371px;
  height: 353px;
  background: #15ab89;
  opacity: 0.5;
  filter: blur(130px);
  /* position: relative; */
  z-index: 1;
}
@media (max-width: 640px) {
  .card-bg {
    width: 320px;
  }
}
</style>
