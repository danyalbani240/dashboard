<template>
  <div
    @click="$emit('click', $event)"
    class="justify-center cursor-pointer items-center flex text-base mx-2"
  >
    {{ name }}
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "test",
    },
  },
};
</script>

<style scoped>
div {
  width: 69px;
  height: 32px;
  background: linear-gradient(
    91.44deg,
    rgba(255, 255, 255, 0.18) 0%,
    rgba(196, 196, 196, 0.06) 100%
  );
  backdrop-filter: blur(12px);

  border-radius: 5px;
}
</style>
