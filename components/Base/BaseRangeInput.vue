<template>
  <div class="range-input">
    <div
      @click.self="
        savePoint(
          `${($event.offsetX / $event.target.offsetWidth) * 100}`,
          $event
        )
      "
      class="relative cursor-pointer range-bar w-full mt-8 xl:mx-auto bg-primary rounded-full"
    >
      <div
        :class="{ active: point >= 0 }"
        class="absolute z-20"
        @click="savePoint('0', $event)"
      >
        0
      </div>
      <div
        :class="{ active: point >= 20 }"
        class="absolute z-20"
        @click="savePoint('20', $event)"
      >
        20
      </div>
      <div
        :class="{ active: point >= 50 }"
        class="absolute z-20"
        @click="savePoint('50', $event)"
      >
        50
      </div>
      <div
        :class="{
          active: point >= 70,
        }"
        class="absolute z-20"
        @click="savePoint('70', $event)"
      >
        70
      </div>
      <div
        :class="{ active: point >= 100 }"
        class="absolute z-20"
        @click="savePoint('100', $event)"
      >
        100
      </div>
      <div
        @click="
          savePoint(
            `${
              ($event.offsetX / $event.target.parentElement.offsetWidth) * 100
            }`,
            $event
          )
        "
        class="p-color z-10"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      point: 0,
    };
  },
  computed: {},
  methods: {
    savePoint(e, eve) {
      this.point = e;

      document.querySelector(".p-color").style.width = e + "%";
      console.log(this.point, eve);
    },
  },
};
</script>

<style>
.range-bar {
  width: 480px;
  height: 10px;
}
.range-input.buy .range-bar > div:not(:last-child) {
  background: linear-gradient(
    91.44deg,
    rgba(255, 255, 255, 0.18) 0%,
    rgba(196, 196, 196, 0.06) 100%
  );
}
.range-input.buy .range-bar > div.active {
  background: linear-gradient(91.44deg, #15ab89 0%, #09736a 100%);
}

.range-input.buy .p-color {
  background: linear-gradient(270deg, rgba(1, 14, 23, 0) 0%, #15ab89 100%);
}
.range-input.sell .p-color {
  background: linear-gradient(270deg, rgba(1, 14, 23, 0) -20%, #eb0020 100%);
}
.range-input.sell .range-bar > div.active {
  background: #eb0020;
}
.range-bar > div:not(:last-child) {
  width: 28px;
  height: 28px;

  border: 0.5px solid #000000;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  line-height: 28px;
}
.range-bar > div:nth-child(1) {
  left: 0;
  top: 50%;
  transform: translate(-50%, -50%);
}
.range-bar > div:nth-child(2) {
  left: 20%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.range-bar > div:nth-child(3) {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.range-bar > div:nth-child(4) {
  left: 70%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.range-bar > div:nth-child(5) {
  left: 100%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.p-color {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  height: 100%;
  border-radius: 50%;
}

@media (max-width: 500px) {
  .range-bar {
    width: 400px;
  }
}
@media (max-width: 430px) {
  .range-bar {
    width: 300px;
  }
}
@media (min-width: 1300px) {
  .range-bar {
    width: calc(100% - 4rem);
  }
}
</style>
