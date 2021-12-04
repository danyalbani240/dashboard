<template>
  <div class="bg-primary w-full text-Neutral-Gray p-5">
    <base-dashboard-header :pageName="'پروفایل'" />
    <div class="mt-2">
      <base-part-header :address="'insidereport'" headName="حساب کاربری" />

      <the-profile-form />
    </div>
  </div>
</template>

<script>
import TheProfileForm from "~/components/TheProfileForm.vue";
export default {
  components: { TheProfileForm },
};
</script>

<style></style>
