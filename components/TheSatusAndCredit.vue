<template>
  <div class="mt-14">
    <div class="flex flex-wrap flex-row-reverse justify-around">
      <div class="flex-1 pt-2 flex-col flex">
        <div dir="rtl">
          <base-part-header
            dir="ltr"
            class="flex-row"
            :address="'usericon'"
            :headName="'وضعیت حساب کاربری'"
          />

          <div
            class="rounded-2xl flex flex-row px-6 sm:px-2 bg-primary mx-auto w-11/12 xl:w-10/12 z-10 lg:mx-0 user-stat mt-2.5"
          >
            <div class="flex flex-col w-9/12 xl:flex-1">
              <div class="text-right mt-6 sm:mt-11 sm:mr-5">
                <p class="font-bold sm:text-lg text-sm">
                  .شما در سطح پایه هستید
                </p>
                <p class="mt-3 text-xs sm:text-base sm:w-auto w-48">
                  با انجام دادن مراحل احراز هویت سطح خود را افزایش دهید.
                </p>
              </div>
              <div class="sm:mt-12 flex flex-1 md:flex-none mt-2.5">
                <base-progress-bar />
              </div>
            </div>
            <div
              class="sm:mt-6 items-center sm:mx-12 flex-1 lg:flex-none flex justify-end"
            >
              <img src="../assets/images/stat-hero.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <!-- card -->
      <div class="sm:mr-14 hidden w-3/12 py-2 lg:flex flex-col justify-center">
        <base-part-header :address="'credit'" :headName="'کارت های بانکی'" />
        <div class="credit-card bg-cover w-full relative mt-2.5">
          <div class="flex justify-end">
            <img
              class="mr-5 mt-8"
              src="../assets/images/card-icon.svg"
              alt=""
            />
          </div>
          <div class="flex items-center flex-col">
            <p class="text-primary text-lg mb-3 font-bold">کارتی وجود ندارد</p>
            <p
              class="text-primary py-1.5 px-2 cursor-pointer z-10 relative border-primary border-2 rounded-md"
            >
              + افزودن کارت
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BasePartHeader from "./Base/BasePartHeader.vue";
export default {
  components: { BasePartHeader },
};
</script>

<style>
p {
  color: #ebebeb;
}
.user-stat {
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.35);
  border: 1px solid rgba(21, 171, 137, 0.3);

  height: 212px;
}
@media only screen and (max-width: 600px) {
  .user-stat {
    height: 134px;
  }
  .user-stat img {
    width: 63.87px;
    height: 90px;
  }
}
.user-stat::after {
  position: absolute;
  content: "";
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 167px;
  height: 159px;
  background-color: #15ab89;
  opacity: 0.8;
  filter: blur(210px);
  border-radius: 50%;
}
.credit-card {
  background-image: url(../assets/images/card-bg.svg);
  border-radius: 16px;
  height: 210px;
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.74));
}
.credit-card::after {
  border-radius: 50%;
  width: 167px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  content: "";
  height: 159px;
  background-color: #15ab89;
  opacity: 0.8;
  filter: blur(210px);
}
</style>
