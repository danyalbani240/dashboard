<template>
  <div class="bg-primary w-full text-Neutral-Gray p-5">
    <base-dashboard-header :pageName="'حسابداری'" />
    <div class="mt-2">
      <base-part-header :address="'insidereport'" headName="گزارش واریزی ها" />
      <base-button @click="goback">بازگشت</base-button>
      <div class="mt-9 acounting-box-1 bg-primary py-6 px-12" dir="rtl">
        <p>
          درخواست های برداشت ریالی طی ۲۴ الی ۴۸ ساعت کاری به حساب بانکی شما
          واریز میگردد (روزهای تعطیل جز این ۲۴ الی ۴۸ ساعت نمی باشد)
        </p>

        <p class="list-paragraph relative mr-10">
          حداکثر مبلغ برداشت ریالی در هر شبانه روز دویصد میلیون تومان می باشد
        </p>
        <p class="list-paragraph relative mr-10">
          پس از تایید درخواست امکان لغو میسر نخواهد بود
        </p>
        <p class="list-paragraph relative mr-10">
          با توجه به تغییر هزینه های بانکی پایابه ازای هر ۵۰ میلیون تومان
          تسویه:0.02 درصد از مبلغ تراکنش تا سقف 5000 تومان و حداقل کارمزد 1000
          تومان از طرف شبکه پرداخت پایا از مبلغ دریافتی در حساب شما کسر میشود
        </p>
        <p class="text-Neutral-Orange">
          جهت برداشت وجه، حتما باید از کارت‌های بانکی به نام خودتان که در
          پروفایل‌تان ثبت و تایید شده است، استفاده نمایید.
        </p>
      </div>
      <ThePerformOperations :withdarw="true" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goback() {
      this.$router(-1);
    },
  },
};
</script>

<style></style>
