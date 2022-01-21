<template>
  <div class="bg-primary w-full text-Neutral-Gray p-5">
    <base-dashboard-header pageName="کیف پول" />

    <div
      class="flex mt-11 flex-row-reverse flex-wrap justify-center lg:justify-between"
    >
      <the-harvest-token />
      <div class="flex-1 mx-auto sm:mr-8">
        <div class="flex flex-col items-end">
          <base-part-header
            :address="'insidereport'"
            headName="واریز رمز ارز"
          />
          <the-deposit-token />
        </div>
        <div dir="rtl" class="description">
          <h2>توضیحات:</h2>
          <div>
            <base-list-item>
              <p>
                <span class="text-red-700">حداقل</span> مبلغ برداشت BTC در شبانه
                0.004 btc است.
              </p>
            </base-list-item>

            <base-list-item>
              <p>
                <span class="text-green-500">حداکثر</span> مبلغ برداشت BTC در
                شبانه 0.4 btc است.
              </p>
            </base-list-item>
            <base-list-item>
              <p>کارمزد متغییر بسته به کارمزد لحظه ای شبکه در تغییر است</p>
            </base-list-item>
            <base-list-item>
              <p class="max-w-lg">
                توجه داشته باشید ادرس ولت ارسالی و دریافتی خود را به هیچ وجه به
                صورت دستی وارد نکنید و کپی کنید.در صورت ارسال اشتباه،رمز ارز
                قابلیت هیچگونه بازگشتی ندارد.
              </p>
            </base-list-item>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseBadge from "~/components/Base/BaseBadge.vue";
import BaseButton from "~/components/Base/BaseButton.vue";
import BaseListItem from "~/components/Base/BaseListItem.vue";
import TheDepositToken from "~/components/TheDepositToken.vue";
import TheHarvestTokenComponent from "~/components/TheHarvestToken.vue";
export default {
  components: {
    BaseButton,
    BaseBadge,
    TheDepositToken,
  },
};
</script>
, BaseListItem

<style scoped>
.description p {
  line-height: 24px;
  padding: 18px 0;
}
</style>
