<template>
  <div class="mt-8 w-6/12">
    <base-part-header :address="'insidereport'" headName="اسپات معاملات" />

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
