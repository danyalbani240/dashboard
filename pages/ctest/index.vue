<template>
  <div class="bg-primary w-full text-Neutral-Gray p-5">
    <base-dashboard-header />
    <the-popular-currencies />
    <the-satus-and-credit />
    <the-last-activity-and-orders-and-inventory />
  </div>
</template>

<script>
import TheLastActivityAndOrdersAndInventory from "~/components/TheLastActivityAndOrdersAndInventory.vue";
import TheSatusAndCredit from "~/components/TheSatusAndCredit.vue";
export default {
  components: { TheSatusAndCredit, TheLastActivityAndOrdersAndInventory },
};
</script>

<style></style>
