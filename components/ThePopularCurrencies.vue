<template>
  <div class="mt-2.5">
    <base-part-header :address="'popularicon'" :headName="'ارز های پرطرفدار'" />
    <div
      style="min-height: 200px"
      class="flex w-full flex-row-reverse justify-center items-center flex-wrap popular-list-container"
    >
      <base-list-popular-item
    class="my-1"
      v-for="(coin, index) in coins"
      :key="coin.short"
      :short="coin.short"
      :allName="coin.allName"
      :dPrice="coin.dPrice"
      :buyPrice="coin.buyPrice"
      :sellPrice="coin.sellPrice"
      :trapezoidR="index % 2 == 0 ? false : true"
      :address="coin.address"
    />
  
    </div>
  </div>
</template>

<script>
import ListPopularItem from "./Base/BaseListPopularItem.vue";
export default {
  data() {
    return {
      coins: [
        [
          {
            short: "BTC",
            allName: "bitcoin",
            dPrice: "61,689.12",
            buyPrice: "17.199.036.763",
            sellPrice: "17.199.036.763",
            address: "btccardlogo",
          },
          {
            short: "BTCC",
            allName: "bitcoin",
            dPrice: "61,689.12",
            buyPrice: "17.199.036.763",
            sellPrice: "17.199.036.763",
            address: "shitcoin",
          },
        ],
        [
          {
            short: "BTCCC",
            allName: "bitcoin",
            dPrice: "61,689.12",
            buyPrice: "17.199.036.763",
            address: "btccardlogo",
            sellPrice: "17.199.036.763",
          },
          {
            short: "CCCC",
            allName: "bitcoin",
            dPrice: "61,689.12",
            buyPrice: "17.199.036.763",
            address: "shitcoin",

            sellPrice: "17.199.036.763",
          },
        ],
      ],
    };
  },
  components: { ListPopularItem,  },
};
</script>

<style scoped>

</style>
