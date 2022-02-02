<template>
  <div
    class="flex flex-row-reverse table-item items-center justify-between text-xs"
  >
    <div class="flex flex-row-reverse items-center">
      <span><img src="../assets/images/cardano-ada.svg" /></span>
      <span class="text-xs">BTC-irr</span>
    </div>
    <div>۱۸٬۵۹۷٬۹۶۳٬۹۱۴٫۶۵</div>
    <div>۱۸٬۵۹۷٬۹۶۳٬۹۱۴٫۶۵</div>
    <div class="flex flex-row-reverse trade-button cursor-pointer items-center">
      <span class="text-center text-xs flex-1">ترید</span>
      <img
        class="relative hidden sm:block"
        src="../assets/images/trade-button.svg"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>
flex-1

<style scoped>
.table-item {
  height: 50px;
}
.trade-button {
  width: 67px;
  height: 28px;
  background: linear-gradient(
    81.72deg,
    rgba(31, 42, 50, 0) 6.35%,
    #15ab88 93.65%
  );
  border-radius: 2px;
}

@media (max-width: 640px) {
  .trade-button {
    width: ;
  }
}
</style>
