<template>
  <div dir="rtl" :class="{ 'w-270': w270, 'w-366': w366, 'w-174': w174 }">
    <label>
      {{ label }}
    </label>
    <div class="relative" v-if="!!verify">
      <input
      type="text"
      :placeholder="place"
      class="bg-primary w-full mt-1.5 px-2"
      :class="{'placeholder-Neutral-Gray': placeWhite && !placeBlack}"
    />
    <div class="absolute verify-icon inline-block">
      <img src="../../assets/images/verify.svg" alt="">
    </div>
    </div>
    <input
    v-if="!verify"
      type="text"
      :placeholder="place"
      class="bg-primary w-full mt-1.5 px-2"
      :class="{'placeholder-Neutral-Gray': placeWhite && !placeBlack}"
    />
    <!-- 
      for when binding added
      v-bind:value="model"
      v-on:input="model = $event"
     -->
  </div>
</template>

<script>
export default {
  props: {
    verify:{
      type:Boolean,
      required:false
    },
    model: {
      type: String,
      required:false
    },
    place: {
      type: String,
      required: false,
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
    placeWhite:{
      type:Boolean,
      default: true
    },
    placeBlack:{
      type:Boolean,
      default: false

    }
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
.verify-icon{
  left: 10px;
    top: 55%;
    transform: translateY(-50%);
}
</style>
