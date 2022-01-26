<template>
  <div
    class="relative justify-center flex-row-reverse rounded-2xl pr-1 items-center flex badge-contain text-sm"
  >
    <div
      class="flex items-center text-center py-1 w-20 justify-center buy rounded-2xl text-white font-bold cursor-pointer"
      :class="{ 'active text-primary': active === 1 }"
      @click="toggleActive"
    >
      {{ linkOne }}
    </div>
    <div
      class="changer w-6 h-6 flex justify-center items-center icon-container rounded absolute cursor-pointer"
      style="left: 50%; transform: translateX(-50%)"
      @click="toggleActive"
    >
      <img src="../../assets/images/transform.svg" alt="" />
    </div>
    <div
      class="sell flex items-center text-center w-20 py-1 px-5 text-Neutral-Green1 rounded-2xl font-bold cursor-pointer"
      :class="{ active: active === 2, 'not-op ': !!notOpposite }"
      href=""
      @click="toggleActive"
    >
      {{ linkTwo }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    linkOne: {
      type: String,
      required: true,
    },
    linkTwo: {
      type: String,
      required: true,
    },
    active: {
      type: Number,
      default: 1,
    },
    notOpposite: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggleActive() {
      this.$emit("change");
    },
  },
};
</script>

<style scoped>
.buy.active {
  background-image: linear-gradient(90.93deg, #097369 0%, #15ab88 100%);
}
.sell.active {
  background-image: linear-gradient(90.93deg, #730909 0%, #ab1542 100%);
}
.sell.not-op.active {
  background-image: linear-gradient(
    90.93deg,
    #097369 0%,
    #15ab88 100%
  ) !important;
  color: #010e17;
}
.badge-contain {
  border-radius: 17px;
  border: 1px solid #15ab89;
  height: 34px;
}
</style>
