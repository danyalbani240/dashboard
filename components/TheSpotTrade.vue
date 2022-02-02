<template>
  <div class="mt-8 lg:w-6/12 w-full">
    <base-part-header :address="'convert-card'" headName="اسپات معاملات" />

    <the-trade-table class="w-full" />
  </div>
</template>

<script>
import TheTradeTable from "./TheTradeTable.vue";
export default {
  components: { TheTradeTable },
};
</script>

<style></style>
