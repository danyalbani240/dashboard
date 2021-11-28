<template>
  <div class="mt-2.5">
    <base-part-header :address="'popularicon'" :headName="'ارز های پرطرفدار'" />
    <div
      style="min-height: 200px"
      class="flex w-full flex-row-reverse relative justify-between items-center"
    >
      <div class="absolute flex">
        <base-list-popular
          v-for="(coin, index) in coins"
          :coins="coin"
          :key="coin[index].short"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ListPopular from "./Base/BaseListPopular.vue";
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
          },
          {
            short: "BTCC",
            allName: "bitcoin",
            dPrice: "61,689.12",
            buyPrice: "17.199.036.763",
            sellPrice: "17.199.036.763",
          },
        ],
        [
          {
            short: "BTCCC",
            allName: "bitcoin",
            dPrice: "61,689.12",
            buyPrice: "17.199.036.763",
            sellPrice: "17.199.036.763",
          },
          {
            short: "CCCC",
            allName: "bitcoin",
            dPrice: "61,689.12",
            buyPrice: "17.199.036.763",
            sellPrice: "17.199.036.763",
          },
        ],
      ],
    };
  },
  components: { ListPopularItem, ListPopular },
};
</script>

<style></style>
