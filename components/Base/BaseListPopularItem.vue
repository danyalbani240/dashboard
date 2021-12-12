<template>
  <div>
    <div v-if="trapezoid && !trapezoidR" class="relative trapezoid pt-3">
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
    <div v-if="trapezoidR" class="relative trapezoid-r pt-3">
      <div class="lg:ml-20 ml-2 flex items-center">
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

<style scoped>
.buy {
  color: #21813c;
}
.sell {
  color: #eb0020;
}
.price {
  background-image: linear-gradient(
    to left,
    rgba(1, 14, 23, 0) 0%,
    rgba(64, 72, 233, 0.31) 100%
  );
  border-radius: 5px;
  padding: 2.5px 4px;
}
.trapezoid::after,
.trapezoid-r::after {
  content: "";
  position: absolute;
  background-color: #4048e9;
  filter: blur(80px);
  width: 45px;
  height: 45px;
  right: 40%;
  top: 50%;
  transform: translate(-40%, -50%);
}
@media only screen and (max-width: 1200px) {
  .trapezoid,
  .trapezoid-r {
    clip-path: none;
    left: 0;
  }
}
</style>
