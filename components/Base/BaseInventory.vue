<template>
  <div class="px-3 mt-2.5 mj rounded-2xl current">
    <div class="flex relative p-2 sync justify-between">
      <p>رمز ارز</p>
      <p>موجودی</p>
    </div>
    <div class="flex flex-col mt-2.5">
      <base-inventory-item
        v-for="item in itemsData"
        :itemName="item.name"
        :price="item.price"
        :key="item.name"
      />
    </div>
  </div>
</template>

<script>
import BaseInventoryItem from "./BaseInventoryItem.vue";
export default {
  components: { BaseInventoryItem },
  props: {
    itemsData: {
      type: Array,
    },
  },
};
</script>

<style></style>
