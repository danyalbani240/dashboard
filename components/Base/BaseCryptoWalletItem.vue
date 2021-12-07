<template>
  <div dir="rtl" class="base-item-container relative">
    <div style="padding:0 121px;" class="base-item">
      <div class="h-10 flex items-center">
        <div
          style="background-color: #010e17;border: 1px solid #15ab89;box-shadow: -4px 4px 10px rgba(0, 0, 0, 0.25);border-radius: 5px;"
          class="h-10 w-10 flex justify-center items-center relative z-10"
        >
          <img src="../../assets/images/walletcheck.svg" alt="" />
        </div>
        <div class="real-invent -mr-1 relative z-0 justify-between text-sm flex items-center px-4">
            <span class="inline-block">موجودی اصلی</span>
            <span>96.222</span>
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
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
  /* box-shadow: inset 0px 0px 10px #15ab89; */
  /* filter: drop-shadow(0px 0px 10px #15ab89); */
  border-radius: 10px;
}
.real-invent {
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
