<template>
  <div
    class="flex flex-row-reverse px-4 justify-between items-center profile-form mx-auto"
  >
  <div class="polygon"></div>
    <form class="w-full py-10 sm:py-0">
      <div class="flex justify-center md:justify-evenly w-full flex-row-reverse flex-wrap">
        <base-input place="مهدی" class="mt-4" label="نام" :w270="true" />
        <base-input place="طالبی" class="mt-4" label="نام خانوادگی" :w270="true" />
        <base-input place="0925738158" class="mt-4" label="کدملی" :w270="true" />
      </div>
      <div class="my-2.5 flex justify-center md:justify-evenly w-full flex-row-reverse flex-wrap">
        <base-input plcae="1380.04.04" class="mt-4" label="تاریخ تولد" :w270="true" />
        <base-input place="محمد حسن" class="mt-4" label="نام پدر " :w270="true" />
        <base-input place="مرد" class="mt-4" label="جنسیت" :w270="true" />
      </div>
      <div class="flex justify-center md:justify-evenly w-full flex-row-reverse flex-wrap">
        <base-input :verify="true" place="09399324994" class="mt-4" label="شماره موبایل" :w270="true" />
        <base-input place="ﻣﺸﻬﺪ،ﮐﻮﯼ ﺍﻣﯿﺮﺍﻟﻤﻮﻣﻨﯿﻦ،ﺧﯿﺎﺑﺎﻥ ﺫﻭﺍﻟﻔﻘﺎﺭ 34،ﭖ42" class="mt-4" label="آدرس" :w366="true" />
        <base-input place="051-37642535" class="mt-4" label="شماره ثابت" :w174="true" />
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.profile-form {
  margin-top: 120px;
  max-width: 926px;
  border-radius: 10px;
  border: 2px solid #15ab89;

  box-shadow: inset 0px 0px 10px #15ab89;
  background-image: linear-gradient(
    91.44deg,
    rgba(255, 255, 255, 0.18) 0%,
    rgba(196, 196, 196, 0.06) 100%
  );
  backdrop-filter: blur(12px);
  min-height: 369px;
  position: relative;
}
.profile-form .polygon {
  position: absolute;
  width: 155px;
  left: 50%;
  top: 0%;
  transform: translate(-50%,-60%);
  background-image: url(../assets/images/profilePolygon.svg);
  height: 172px;
  content: "";
  background-repeat: no-repeat;
}
.select-perform {
  background-image: url(../assets/images/selectperform.svg);
  background-color: #010e17;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.5);
  border-radius: 18px;

  width: 256px;
  height: 209px;
}
.select-credit {
  background-image: url(../assets/images/mellatbank.svg);
  width: 331px;
  height: 209px;
  border-radius: 18px;
  filter: drop-shadow(0px 6px 30px rgba(21, 171, 137, 0.2));
}
.cart-b-icon {
  background-color: #000509;
  width: 32px;
  height: 32px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);
}
.deposit-value {
  width: 256px;
  height: 209px;
  background-color: #010e17;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(21, 171, 137, 0.3);
  border-radius: 18px;
}
</style>
