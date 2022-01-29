<template>
  <div class="px-5 mt-2.5 ineventory rounded-2xl current">
    <div class="flex relative p-2 syncer justify-between">
      <p v-if="active == 1">رمز ارز</p>
      <p v-else>ریالی</p>
      <p>موجودی</p>
    </div>
    <div class="flex flex-col mt-2.5">
      <base-inventory-item
        v-for="item in itemsData"
        :itemName="item.name"
        :price="item.price"
        :key="item.name"
        :red="active === 2"
      />
    </div>
  </div>
</template>

<script>
import BaseInventoryItem from "./BaseInventoryItem.vue";
export default {
  components: { BaseInventoryItem },
  props: {
    active: {
      type: Number,
    },
    itemsData: {
      type: Array,
    },
  },
};
</script>

<style>
.ineventory {
  min-width: 331px;
  height: 308px;
  position: relative;
}
.ineventory::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 80%;
  transform: translate(-80%, -50%);
  width: 167px;
  height: 159px;
  background-color: #15ab89;
  opacity: 0.5;
  filter: blur(210px);
}
.syncer::after {
  position: absolute;
  width: 100%;
  content: "";
  height: 2px;
  background-image: linear-gradient(
    270deg,
    #010e17 0%,
    #15ab89 51.04%,
    #010e17 100%
  );
  left: 0;
  bottom: 0px;
}
</style>
