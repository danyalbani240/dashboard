<template>
  <div class="custom-select" :tabindex="tabindex" @blur="open = false">
    <div
      class="selected text-primary"
      :class="{ open: open }"
      @click="open = !open"
    >
      {{ selected }}
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div
        v-for="(option, i) of options"
        :key="i"
        @click="
          selected = option;
          open = false;
          $emit('input', option);
        "
        class="bg-Neutral-Grey6 border-b-2 border-Neutral-Grey3 hover:bg-Neutral-Grey5 transition"
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    default: {
      type: String,
      required: false,
      default: null,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  data() {
    return {
      selected: this.default
        ? this.default
        : this.options.length > 0
        ? this.options[0]
        : null,
      open: false,
    };
  },
  mounted() {
    this.$emit("input", this.selected);
  },
};
</script>
<style scoped>
.custom-select {
  position: relative;
  width: 100%;
  text-align: center;
  outline: none;
  height: 42px;
  line-height: 42px;
}
.custom-select .selected {
  color: #ebebeb;

  cursor: pointer;
  user-select: none;
}
.custom-select .selected:after {
  position: absolute;
  content: "";
  top: 14px;
  right: 4px;
  width: 17px;
  height: 17px;
  background-image: url(../../assets/images/downArrow.svg);
}
.custom-select .items {
  border-radius: 0px 0px 6px 6px;
  overflow: hidden;
  position: absolute;
  background-color: #010e17;
  left: 0;
  right: 0;
  z-index: 1;
}
.custom-select .items div {
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}
.selectHide {
  display: none;
}
</style>
