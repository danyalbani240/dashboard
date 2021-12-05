<template>
  <button
    :class="{
      'bg-button-gradient': bGreen,
      'border-bg': bTrans,
      'w-full': full,
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
</style>
