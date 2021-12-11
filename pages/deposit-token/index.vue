<template>
  <div class="bg-primary w-full text-Neutral-Gray p-5">
    <div class="flex flex-row-reverse justify-between">
      <div class="harvest-crypto">
        <div class="flex flex-row-reverse items-center">
          <div class="w-16 h-16 rounded-full crypto-logo"></div>
          <div
            class="flex flex-row-reverse items-center rounded -mr-2 pr-3 bg-primary name-input flex-1"
          ></div>
        </div>
        <div class="mt-5">
          <p dir="rtl">شبکه:</p>
          <div
            class="mt-1.5 flex flex-row-reverse items-center rounded -mr-2 pr-3 bg-primary name-input flex-1"
          ></div>
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
          ></div>
        </div>
        <div class="flex mt-3">
          <base-badge name="Fast" />
          <base-badge name="Trade" />
          
        </div>
        <div class="mt-5">
          <p dir="rtl">فی شبکه:</p>
          <div
            class="mt-1.5 flex flex-row-reverse items-center rounded -mr-2 pr-3 bg-primary name-input flex-1"
          ></div>
        </div>
        <div class="flex mt-3 flex-row-reverse">
          <base-badge name="ثابت" />
          <base-badge name="متغیر" />
          
        </div>
        <div class="mt-5">
          <p dir="rtl">آدرس انتقال:</p>
          <div
            class="mt-1.5 flex flex-row-reverse items-center rounded -mr-2 pr-3 bg-primary name-input flex-1"
          ></div>
        </div>
        <div class="mt-5">
          <p dir="rtl">مقدار برداشت:</p>
          <div
            class="mt-1.5 flex flex-row-reverse items-center rounded -mr-2 pr-3 bg-primary name-input flex-1"
          ></div>
        </div>
        <div
          class="flex flex-row-reverse justify-between bg-accent flex-1 h-10"
        ></div>
        <base-button class="w-full mt-7" :bGreen="true"
          ><span>برداشت</span></base-button
        >
      </div>
      <div class="">
        <div class="deposit-crypto"></div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseBadge from "~/components/Base/BaseBadge.vue";
import BaseButton from "~/components/Base/BaseButton.vue";
export default {
  components: {
    BaseButton,
    BaseBadge,
  },
};
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
}
.deposit-crypto {
  width: 572px;
  height: 415px;
  background: linear-gradient(
    91.44deg,
    rgba(255, 255, 255, 0.18) 0%,
    rgba(196, 196, 196, 0.06) 100%
  );
  backdrop-filter: blur(12px);
  border-radius: 10px;
}
.crypto-logo {
  background: linear-gradient(
    91.44deg,
    rgba(255, 255, 255, 0.18) 0%,
    rgba(196, 196, 196, 0.06) 100%
  );
  backdrop-filter: blur(12px);
}
.name-input {
  height: 42px;
}
</style>
