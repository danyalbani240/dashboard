<template>
  <div class="bg-primary w-full text-Neutral-Gray p-5">
    <base-dashboard-header pageName="تعهد نامه" />
    <p class="text-center text-lg mt-7">ارسال تعهدنامه</p>
    <div class="flex flex-col items-center commitment-description">
      <base-list-item class="mt-7">
        <p style="max-width: 671px">
          در این بخش شما باید متن دست نوشته که در پایین صفحه برای شما قرار داده
          شده است را روی یک برگه یادداشت کرده و به همراه کارت بانکی در ست چپ جلو
          سینه خود نگه دارید و با دست دیگر بخش جلویی کارت ملی خود را نگه دارید.
        </p>
      </base-list-item>
      <base-list-item>
        <p>
          توجه داشته باشید تصویر کیفیت کافی را داشته باشد و تمام موارد خوانایی
          کافی را داشته باشد.
        </p>
      </base-list-item>
    </div>
    <div class="flex flex-wrap justify-evenly mt-16">
      <div class="commitment-bg flex justify-center items-center">
        <div
          class="bg-primary my-5 cursor-pointer flex flex-col items-center justify-center"
        >
          <img src="../../assets/images/bulk-import.svg" alt="" />
          <div class="text-center">
            <p>اپلود عکس تعهد نامه</p>
            <p>تعهد نامه باید مطابقه عکس راهما گرفته شده باشد</p>
          </div>
        </div>
      </div>
      <div class="commitment-bg my-5 sm:my-0 flex items-center justify-center">
        <img class="rounded" src="../../assets/images/selfPicture.svg" alt="" />
      </div>
    </div>
    <div class="flex flex-wrap justify-evenly mt-9">
      <base-button
        dir="rtl"
        class="flex items-center justify-center w-4/12 text-center"
      >
        <img src="../../assets/images/bulk-import.svg" class="w-6" alt="" />
        <span class="mr-1.5 text-sm"> اپلود فایل تعهدنامه </span>
      </base-button>
      <base-button
        dir="rtl"
        class="flex items-center justify-center w-4/12 text-center"
      >
        <img src="../../assets/images/doc.svg" class="w-6" alt="" />
        <span class="mr-1.5 text-sm">مشاهده متن تعهدنامه</span>
      </base-button>
    </div>
    <base-button
      :bGreen="true"
      dir="rtl"
      class="flex justify-center mx-auto mt-20 w-4/12 text-center"
    >
      <span class="text-white">ارسال</span>
    </base-button>
  </div>
</template>

<script>
import BaseButton from "~/components/Base/BaseButton.vue";
import BaseListItem from "~/components/Base/BaseListItem.vue";
export default {
  components: { BaseListItem, BaseButton },
};
</script>

<style scoped>
.commitment-bg {
  width: 547px;
  height: 503px;
  background: linear-gradient(
    91.44deg,
    rgba(255, 255, 255, 0.18) 0%,
    rgba(196, 196, 196, 0.06) 100%
  );
  backdrop-filter: blur(12px);
  border-radius: 10px;
  border: 2px solid #15ab89;
}
.commitment-bg > div {
  width: 418px;
  height: 418px;
  border-radius: 5px;
  border: 1px solid #15ab89;
}
@media (max-width: 500px) {
  .commitment-bg > div {
    width: 350px;
    height: 350px;
  }
}
</style>
