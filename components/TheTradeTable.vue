<template>
  <div class="overflow-x-auto">
    <div class="flex flex-col trade-table sm:px-4 mt-8">
      <div class="flex justify-between flex-row-reverse py-3 table-header">
        <span class="flex-1 text-right">نام رمز ارز</span>
        <span class="flex-1 text-right">قیمت خرید</span>
        <span class="flex-1 text-right">قیمت فروش</span>
        <span class="flex-1 text-right"></span>
      </div>
      <div>
        <the-trade-table-item />
        <the-trade-table-item />
        <the-trade-table-item />
        <the-trade-table-item />
        <the-trade-table-item />
        <the-trade-table-item />
        <the-trade-table-item />
        <the-trade-table-item />
        <the-trade-table-item />
        <the-trade-table-item />
        <the-trade-table-item />
        <the-trade-table-item />
        <the-trade-table-item />
        <the-trade-table-item />
        <the-trade-table-item />
        <the-trade-table-item />
      </div>
    </div>
  </div>
</template>

<script>
import TheTradeTableItem from "./TheTradeTableItem.vue";
export default {
  components: { TheTradeTableItem },
};
</script>

<style scoped>
.table-header {
  position: relative;
}
.trade-table {
  max-width: 627px;
  min-width: 500px;
  background-color: #010e17;
  border: 1px solid rgba(21, 171, 137, 0.3);
  border-radius: 18px;
}
.table-header::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 2px;
  bottom: 2px;
  background-image: linear-gradient(
    270deg,
    #010e17 0%,
    #15ab89 51.04%,
    #010e17 100%
  );
}
@media (max-width: 640px) {
  .trade-table{
    min-width: 340px;
  }
}
</style>
