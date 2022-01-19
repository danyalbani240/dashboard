<template>
  <div class="mt-2.5">
    <base-part-header :address="'popularicon'" :headName="'ارز های پرطرفدار'" />
    <!-- <div
      class="flex w-screen overflow-x-scroll md:overflow-x-hidden"
      :class="{
        'md:justify-center': $store.state.sidebar.isClosed,
        'md:justify-start': !$store.state.sidebar.isClosed,
      }"
    > -->
    <div v-swiper:mySwiper="options">
      <div class="swiper-wrapper flex justify-between">
        <base-list-popular-item
          class="my-1 swiper-slide"
          v-for="(coin, index) in coins"
          :key="coin.short"
          :short="coin.short"
          :allName="coin.allName"
          :dPrice="coin.dPrice"
          :buyPrice="coin.buyPrice"
          :sellPrice="coin.sellPrice"
          :trapezoidR="index % 2 == 0 ? false : true"
          :address="coin.address"
        />
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      coins: [
        {
          short: "BTC",
          allName: "bitcoin",
          dPrice: "61,689.12",
          buyPrice: "17.199.036.763",
          sellPrice: "17.199.036.763",
          address: "btccardlogo",
        },
        {
          short: "BTC",
          allName: "bitcoin",
          dPrice: "61,689.12",
          buyPrice: "17.199.036.763",
          sellPrice: "17.199.036.763",
          address: "btccardlogo",
        },
        {
          short: "BTCC",
          allName: "bitcoin",
          dPrice: "61,689.12",
          buyPrice: "17.199.036.763",
          sellPrice: "17.199.036.763",
          address: "shitcoin",
        },

        {
          short: "BTCCC",
          allName: "bitcoin",
          dPrice: "61,689.12",
          buyPrice: "17.199.036.763",
          address: "btccardlogo",
          sellPrice: "17.199.036.763",
        },
        {
          short: "CCCC",
          allName: "bitcoin",
          dPrice: "61,689.12",
          buyPrice: "17.199.036.763",
          address: "shitcoin",

          sellPrice: "17.199.036.763",
        },
        {
          short: "CCCC",
          allName: "bitcoin",
          dPrice: "61,689.12",
          buyPrice: "17.199.036.763",
          address: "shitcoin",

          sellPrice: "17.199.036.763",
        },
        {
          short: "CCCC",
          allName: "bitcoin",
          dPrice: "61,689.12",
          buyPrice: "17.199.036.763",
          address: "shitcoin",

          sellPrice: "17.199.036.763",
        },
        {
          short: "CCCC",
          allName: "bitcoin",
          dPrice: "61,689.12",
          buyPrice: "17.199.036.763",
          address: "shitcoin",

          sellPrice: "17.199.036.763",
        },
      ],
      options: {
        slidesPerView: 4,
        // spaceBetween: 30,
        // grabCursor: true,
        freeMode: true,
            
        
        slidesPerGroup: 2,
        breakpoints: {
          1300: {
            slidesPerView: 4,
            spaceBetween: 10,
            slidesPerGroup: 2,
            freeMode:false,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 200,
            slidesPerGroup: 2,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
            slidesPerGroup: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: -100,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 100,
          },
          500: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            freeMode: true,
            spaceBetween: -130,
          },
          360: {
            slidesPerView: 1,
            spaceBetween: 20,
            // freeMode: true,
          },
        },
      },
    };
  },
};
</script>

<style scoped></style>
