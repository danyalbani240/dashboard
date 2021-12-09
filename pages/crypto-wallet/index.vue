<template>
  <div class="bg-primary w-full text-Neutral-Gray p-5">
    <base-dashboard-header :pageName="'کیف پول'" />
    <div class="mt-2">
      <base-part-header :address="'insidereport'" headName="کیف پول رمز ارز" />
      <div class="mt-10 mx-auto flex flex-col items-center w-full">
        <base-crypto-wallet-item />
        <base-crypto-wallet-item />
        <base-crypto-wallet-item />
        <base-crypto-wallet-item />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
