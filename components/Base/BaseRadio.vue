<template>
  <div class="flex-col">
    <div class="mt-5">
      <p dir="rtl">{{ label }}:</p>
      <div
        class="mt-1.5 flex flex-row-reverse items-center rounded -mr-2 pr-3 bg-primary name-input w-full justify-end"
      >
        <div class="flex text-sm">
          <img
            class="mx-2.5"
            src="../../assets/images/deposit-token/consist-close.svg"
            alt=""
          />
          <p class="opacity-20">{{ key }}</p>
        </div>
      </div>
    </div>
    <div :class="{ 'flex-row-reverse': !!rtl }" class="flex mt-3">
      <base-badge
        @click="key = item"
        v-for="item in options"
        :name="item"
        :key="item"
      />
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
    label: {
      type: String,
    },
    rtl: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      key: "",
    };
  },
};
</script>

<style></style>
