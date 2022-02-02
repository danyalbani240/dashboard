<template>
  <div
    v-if="!html"
    class="custom-select"
    :tabindex="tabindex"
    @blur="open = false"
  >
    <div
      class="selected text-primary"
      :class="{ open: open }"
      @click="open = !open"
    >
      {{ selected }}
    </div>
    <div class="items relative" :class="{ selectHide: !open }">
      <div
        v-for="(option, i) of options"
        :key="i"
        @click="
          selected = option;
          open = false;
          $emit('input', option);
        "
        class="listing"
      >
        {{ option }}
      </div>
    </div>
  </div>
  <div v-else class="custom-select" :tabindex="tabindex" @blur="open = false">
    <div
      class="selected text-primary"
      :class="{ open: open }"
      @click="open = !open"
      v-html="selected"
    ></div>
    <div class="items relative" :class="{ selectHide: !open }">
      <div
        v-for="(option, i) of options"
        :key="i"
        @click="
          selected = option;
          open = false;
          $emit('input', option);
        "
        class="listing"
        v-html="option"
      ></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    html: {
      type: Boolean,
      required: false,
      default: false,
    },
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
.items::after {
  content: "";
  position: absolute;
  bottom: 1px;
  left: 0;
  width: 100%;
  height: 2px;
  background-image: linear-gradient(
    270deg,
    #010e17 0%,
    #15ab89 51.04%,
    #010e17 100%
  );
}
</style>
