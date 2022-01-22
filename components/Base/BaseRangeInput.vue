<template>
  <div class="range-input">
    <div
      @click.self="savePoint(`${$event.offsetX}px`, $event)"
      class="relative cursor-pointer range-bar w-full mt-8 bg-primary rounded-full"
    >
      <div class="absolute z-20" @click.stop="savePoint('0%', $event)">0</div>
      <div class="absolute z-20" @click.stop="savePoint('20%', $event)">20</div>
      <div class="absolute z-20" @click.stop="savePoint('50%', $event)">50</div>
      <div class="absolute z-20" @click.stop="savePoint('70%', $event)">70</div>
      <div class="absolute z-20" @click.stop="savePoint('100%', $event)">
        100
      </div>
      <div class="p-color z-10"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  methods: {
    savePoint(e) {
      document.querySelector(".p-color").style.width = e;
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
  background: linear-gradient(91.44deg, #15ab89 0%, #09736a 100%);
}
.range-input.buy .p-color {
  background: linear-gradient(270deg, rgba(1, 14, 23, 0) 0%, #15ab89 100%);
}
.range-input.sell .p-color {
  background: linear-gradient(270deg, rgba(1, 14, 23, 0) -20%, #eb0020 100%);
}
.range-input.sell .range-bar > div:not(:last-child) {
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
  right: 0;
  top: 50%;
  transform: translate(0%, -50%);
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
    width: 320px;
  }
}
</style>
