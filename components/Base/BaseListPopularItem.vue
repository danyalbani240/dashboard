<template>
  <div>
    <div v-if="trapezoid && !trapezoidR" class="trapezoid pt-3">
      <div class="flex items-center">
        <div class="flex ml-3.5">
          <img class="mr-2.5" :src="myImage" alt="" />
          <div>
            <p>{{ short }}</p>
            <p>{{ allName }}</p>
          </div>
        </div>
        <div class="price ml-3.5 text-xs flex items-center px-1">
          {{ dPrice }} USDT
        </div>
      </div>
      <div class="mt-7 flex flex-col items-center">
        <p class="buy">خرید از ما: {{ buyPrice }} ریال</p>
        <p class="sell">فروش به ما: {{ sellPrice }} ریال</p>
      </div>
    </div>
    <div v-if="trapezoidR" class="trapezoid-r pt-3">
      <div class="ml-20 flex items-center">
        <div class="flex">
          <img class="mr-2.5" :src="myImage" alt="" />
          <div>
            <p>{{ short }}</p>
            <p>{{ allName }}</p>
          </div>
        </div>
        <div class="price price-blue ml-14 text-xs flex items-center px-1">
          {{ dPrice }} USDT
        </div>
      </div>
      <div class="mt-7 flex flex-col items-end mr-2.5">
        <p class="buy">خرید از ما: {{ buyPrice }} ریال</p>
        <p class="sell">فروش به ما: {{ sellPrice }} ریال</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    address: {
      type: String,
    },
    trapezoid: {
      type: Boolean,
      default: true,
    },
    trapezoidR: {
      type: Boolean,
      default: false,
    },
    short: {
      type: String,
      required: true,
    },
    allName: {
      type: String,
      required: true,
    },
    dPrice: {
      type: String,
      required: true,
    },
    buyPrice: {
      type: String,
      required: true,
    },
    sellPrice: {
      type: String,
      required: true,
    },
  },
  computed: {
    //To making Image address dynamic
    myImage() {
      return require(`~/assets/images/popular/${this.address}.svg`);
    },
  },
};
</script>
