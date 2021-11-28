<template>
  <div
    class="nav-item my-1.5 flex flex-row-reverse justify-between h-12 items-center cursor-pointer"
    :class="{ active: active }"
  >
    <div class="flex flex-row-reverse items-center">
      <div class="ml-2.5">
        <img :src="myImage" />
      </div>
      <p class="text-base text-gray-300">{{ name }}</p>
    </div>
    <span class="ml-2.5 drop cursor-pointer" v-if="dropdown">
      <!-- <img src="../../static/downicon.svg" alt="down" /> -->
    </span>
  </div>
</template>

<script>
export default {
  props: {
    dropdown: {
      type: Boolean,
      required: false,
      default: true,
    },
    name: {
      required: false,
      type: String,
    },
    active: {
      type: Boolean,
      default: false,
      required: false,
    },
    address: {
      type: String,
      required: true,
    },
  },
  computed: {
    //To making Image address dynamic
    myImage() {
      return require(`~/assets/images/sidebar/${this.address}.svg`);
    },
  },
};
</script>

<style scoped>
.nav-item.active {
  background-image: linear-gradient(
    89.05deg,
    rgba(1, 14, 23, 0) 0.81%,
    rgba(11, 96, 82, 0.260417) 49.61%,
    rgba(1, 15, 24, 0) 94.48%,
    rgba(1, 14, 23, 0.5) 94.49%
  );
}
.drop.active {
  transform: rotate(180deg);
}
</style>
