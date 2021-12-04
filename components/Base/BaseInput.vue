<template>
  <div dir="rtl" :class="{ 'w-270': w270, 'w-366': w366, 'w-174': w174 }">
    <label>
      {{ label }}
    </label>
    <input
      type="text"
      :placeholder="place"
      v-bind:value="model"
      v-on:input="model = $event"
      class="bg-primary w-full mt-1.5"
    />
  </div>
</template>

<script>
export default {
  props: {
    model: {
      type: String,
    },
    place: {
      type: String,
    },
    w270: {
      type: Boolean,
      default: false,
    },
    w174: {
      type: Boolean,
      default: false,
    },
    w366: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
    },
  },
};
</script>
<style>
.w-270 {
  width: 270px;
}
.w-366 {
  width: 366px;
}
input {
  border: 1px solid #15ab89;
  border-radius: 5px;
  height: 40px;
}
.w-174 {
  width: 174px;
}
</style>
