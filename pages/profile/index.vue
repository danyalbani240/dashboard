<template>
  <div class="bg-primary w-full text-Neutral-Gray p-5 min-h-screen">
    <base-dashboard-header :pageName="'پروفایل'" />
    <div class="mt-10">
      <base-part-header :address="'usericon'" headName="حساب کاربری" />
      <the-profile-form />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
