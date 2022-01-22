<template>
  <div class="bg-primary w-full text-Neutral-Gray p-5">
    <base-dashboard-header pageName="تعهد نامه" />
    <p class="text-center text-lg">ارسال تعهدنامه</p>
    <div class="flex flex-wrap justify-evenly mt-16">
      <div class="commitment-bg flex justify-center items-center">
        <div class="bg-primary my-5 cursor-pointer flex flex-col items-center justify-center">
          <img src="../../assets/images/bulk-import.svg" alt="" />
          <div class="text-center">
            <p>اپلود عکس تعهد نامه</p>
            <p>تعهد نامه باید مطابقه عکس راهما گرفته شده باشد</p>
          </div>
        </div>
      </div>
      <div class="commitment-bg my-5 sm:my-0  flex items-center justify-center">
        <img class="rounded" src="../../assets/images/selfPicture.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
