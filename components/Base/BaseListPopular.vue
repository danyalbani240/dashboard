<template>
  <div class="flex set flex-1 my-2 lg:justify-center  justify-evenly content-start">
    <base-list-popular-item
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
</template>

<script>
export default {
  props: {
    coins: {
      type: Array,
    },
  },
};
</script>

<style>
/* .set:nth-of-type(2) {
  margin-left: -100px;
} */
</style>
