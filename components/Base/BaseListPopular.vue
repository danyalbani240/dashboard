<template>
  <div class="flex set justify-between">
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

<style scoped>
.set:first-child {
  position: relative;
  right: -100px;
}
</style>
