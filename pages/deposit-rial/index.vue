<template>
  <div class="bg-primary w-full text-Neutral-Gray p-5">
    <base-dashboard-header :pageName="'حسابداری'" />
    <div class="mt-2">
      <base-part-header :address="'insidereport'" headName="واریز ریالی" />
      <base-button :prev="true" @click="goback">بازگشت</base-button>
      <div class="relative">
        <div class="absolute bg-blur"></div>
        <div class="mt-9 acounting-box-1 bg-primary py-6" dir="rtl">
          <p class="px-12">
            مسئولیت مشکلات ناشی از عدم توجه به این موارد بر عهده‌ی مشتری خواهد
            بود. جهت افزایش اعتبار کیف پول ریالی خود با استفاده از کارت‌های
            بانکی عضو شبکه شتاب و از طریق درگاه پرداخت اینترنتی اقدام نمایید.
          </p>
          <p class="px-12">در هنگام پرداخت به نکات زیر دقت نمایید:</p>
          <BaseListItem>
            <p class="relative pl-6">
              حتماً به آدرس صفحه‌ی درگاه بانکی دقت نموده و تنها پس از اطمینان از
              حضور در سایت‌های سامانه‌ی شاپرک مشخصات کارت بانکی خود را وارد
              نمایید.حداکثر مبلغ برداشت ریالی در هر شبانه روز دویست میلیون تومان
              می باشد
            </p>
          </BaseListItem>
          <BaseListItem>
            <p class="relative pl-6">
              در صفحه درگاه دقت کنید که حتما مبلغ نمایش داده شده درست باشد.
            </p>
          </BaseListItem>
          <BaseListItem>
            <p class="relative pl-6">
              در تعیین مبلغ واریز به این موضوع دقت نمایید که حداقل مبلغ معامله
              در بازار نوین تکس سیصد هزار تومان است.
            </p>
          </BaseListItem>
          <p class="text-Neutral-Orange px-12">
            جهت واریز وجه، حتما باید از کارت‌های بانکی به نام خودتان که در
            پروفایل‌تان ثبت و تایید شده است، استفاده نمایید.
          </p>
        </div>
      </div>
      <ThePerformOperations />
      <div class="btn-group flex mt-14">
        <base-button class="mr-2.5" :next="true" bGreen="true"
          >مرحله بعد</base-button
        >
        <base-button :prev="true">مرحله قبل</base-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goback() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.bg-blur {
  background: #15ab89;
  opacity: 0.5;
  filter: blur(130px);
  width: 296px;
  height: 282px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
