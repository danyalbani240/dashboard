<template>
  <div class="bg-primary w-full text-Neutral-Gray p-5">
    <base-dashboard-header :pageName="'بازار'" />
    <div class="flex w-full flex-wrap justify-center xl:justify-between flex-row-reverse">
      <the-spot-trade />
      <the-fast-trade-form />
    </div>
  </div>
</template>

<script>
import TheFastTradeForm from "~/components/TheFastTradeForm.vue";
import TheSpotTrade from "~/components/TheSpotTrade.vue";
export default {
  components: { TheSpotTrade, TheFastTradeForm },
};
</script>

<style></style>
