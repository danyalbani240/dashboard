<template>
  <div class="flex flex-row-reverse p-2 justify-between">
    <div class="flex flex-row-reverse">
      <img class="ml-2" src="../../assets/images/minibtc.svg" alt="" />
      <span>{{ itemName }}</span>
    </div>
    <div style="color: #15ab89">{{ price }}</div>
  </div>
</template>

<script>
export default {
  props: {
    itemName: {
      type: String,
    },
    price: {
      type: String,
    },
  },
};
</script>

<style></style>
