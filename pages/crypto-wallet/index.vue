<template>
  <div class="bg-primary w-full text-Neutral-Gray p-5">
    <base-dashboard-header :pageName="'کیف پول'" />
    <div class="mt-2">
      <base-part-header :address="'insidereport'" headName="کیف پول رمز ارز" />
      <base-crypto-wallet-item />
    </div>
  </div>
</template>

<script>
import BaseCryptoWalletItem from "~/components/Base/BaseCryptoWalletItem.vue";
export default {
  components: { BaseCryptoWalletItem },
};
</script>

<style></style>
