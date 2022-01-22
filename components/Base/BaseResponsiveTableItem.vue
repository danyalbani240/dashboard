<template>
  <div
    class="table-item bg-primary w-full flex-col flex justify-between"
    dir="rtl"

  >
    <div  class="flex justify-between text-xs"  v-for="item in row">
      <p>{{ item.title }}:</p>
      <p>{{ item.value }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    row: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
.table-item {
  height: 220px;
  padding-right: 13px;
  padding-left: 9px;
  padding: 18px 9px 13px;
  border: 1px solid rgba(21, 171, 137, 0.3);
  box-shadow: 0px 10px 16px rgba(21, 171, 137, 0.1);
  border-radius: 18px;
  margin: 15px 0;
}
</style>
