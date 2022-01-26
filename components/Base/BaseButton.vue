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
    class="px-9 py-2 rounded-md transition-all flex justify-center items-center"
  >
    <img v-if="next" src="../../assets/images/next.svg" class="mr-1.5 next" />
    <slot></slot>
    <img
      v-if="prev"
      src="../../assets/images/prev.svg"
      class="ml-1.5 prev"
      alt=""
    />
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
    next: {
      type: Boolean,
      default: false,
    },
    prev: {
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
.bg-button-gradient:hover {
  background: #010e17;
  color: white;
}
.bg-button-gradient:hover .next {
  filter: invert(100%);
}
button:hover {
  background-image: linear-gradient(90.93deg, #097369 0%, #15ab88 100%);
  color: #010e17;
}
button:hover .prev {
  fill: #000;
  filter: brightness(0);
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
