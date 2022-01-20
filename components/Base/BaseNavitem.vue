<template>
  <div class="flex flex-col" v-if="linkAddress">
    <nuxt-link
      :to="linkAddress"
      event=""
      @click.native.prevent="subOpen = !subOpen"
      class="nav-item pr-4 my-1.5 flex flex-row-reverse justify-between h-12 items-center cursor-pointer"
      :class="{ active: active }"
    >
      <div class="flex flex-row-reverse items-center">
        <div class="ml-2.5">
          <img :src="myImage" />
        </div>
        <p class="text-base text-gray-300">{{ name }}</p>
      </div>
      <span
        :class="{ 'transform -rotate-90': subOpen }"
        class="ml-2.5 transition-all drop cursor-pointer"
        v-if="dropdown"
      >
        <img src="../../assets/images/downicon.svg" alt="down" />
      </span>
    </nuxt-link>
    <div v-if="subOpen" class="sub-container">shit</div>
  </div>
  <div
    v-else
    class="nav-item pr-4 my-1.5 flex flex-row-reverse justify-between h-12 items-center cursor-pointer"
    :class="{ active: active }"
  >
    <div class="flex flex-row-reverse items-center">
      <div class="ml-2.5">
        <img :src="myImage" />
      </div>
      <p class="text-base text-gray-300">{{ name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      subOpen: false,
      li: 1,
    };
  },

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
    linkAddress: {
      type: String,
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
.nav-item {
  border-right: 2px solid transparent;
  transition: ease-in-out 0.2s all;
}
.nav-item:hover {
  border-right: 2px solid #15ab89;
  background-image: linear-gradient(
    89.05deg,
    rgba(1, 14, 23, 0) 0.81%,
    rgba(11, 96, 82, 0.260417) 49.61%,
    rgba(1, 15, 24, 0) 94.48%,
    rgba(1, 14, 23, 0.5) 94.49%
  );
}
.nuxt-link-active {
  border-right: 2px solid #15ab89;
  background-image: linear-gradient(
    89.05deg,
    rgba(1, 14, 23, 0) 0.81%,
    rgba(11, 96, 82, 0.260417) 49.61%,
    rgba(1, 15, 24, 0) 94.48%,
    rgba(1, 14, 23, 0.5) 94.49%
  );
}
.nav-item.active {
  background-image: linear-gradient(
    89.05deg,
    rgba(1, 14, 23, 0) 0.81%,
    rgba(11, 96, 82, 0.260417) 49.61%,
    rgba(1, 15, 24, 0) 94.48%,
    rgba(1, 14, 23, 0.5) 94.49%
  );
  border-right: 2px solid #15ab89;
}
.drop.active {
  transform: rotate(180deg);
}
</style>
