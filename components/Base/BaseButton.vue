<template>
  <button
  @click="$emit('click', $event)"
    :class="{
      'bg-button-gradient': bGreen,
      'border-bg': bTrans,
      'w-full': full,
      sell: sell,
      buy: buy,
    }"
    class="px-9 py-2 rounded-md"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    bGreen: {
      type: Boolean,
      default: false,
    },
    bTrans: {
      type: Boolean,
      default: true,
    },
    full: {
      type: Boolean,
      default: false,
    },
    sell: {
      type: Boolean,
      default: false,
    },
    buy: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.bg-button-gradient {
  background-image: linear-gradient(90.93deg, #097369 0%, #15ab88 100%);
  color: #010e17;
}
.border-bg {
  border: 1px solid #15ab89;
}
.sell {
  width: 168px;
  height: 50px;
  background-color: #eb0020;
  box-shadow: 0px 4px 10px rgba(235, 0, 32, 0.25);
  border-radius: 5px;
  border: none;
}
.buy {
  width: 168px;
  height: 50px;
}
</style>
