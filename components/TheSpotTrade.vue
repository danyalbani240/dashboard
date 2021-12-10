<template>
  <div class="mt-8">
    <base-part-header :address="'insidereport'" headName="اسپات معاملات" />

    <the-trade-table />
  </div>
</template>

<script>
import TheTradeTable from "./TheTradeTable.vue";
export default {
  components: { TheTradeTable },
};
</script>

<style></style>
