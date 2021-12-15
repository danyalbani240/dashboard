<template>
  <div class="mt-14">
    <div class="flex flex-wrap flex-row-reverse justify-around">
      <div class="flex-1 flex-col flex">
      <div dir="rtl">

        <base-part-header dir="ltr" class=" flex-row"
          :address="'usericon'"
          :headName="'وضعیت حساب کاربری'"
        />


        <div
          class="rounded-2xl flex flex-row relative flex-wrap-reverse px-2 bg-primary z-10 user-stat mt-2.5"
        >
          <div class="flex flex-col">
            <div class="text-right mt-11 mr-5">
              <p class="font-bold text-lg">.شما در سطح پایه هستید</p>
              <p class="mt-2.5">
                .با انجام دادن مراحل احراز هویت سطح خود را افزایش دهید
              </p>
            </div>
            <div class="mt-12"><base-progress-bar /></div>
          </div>
          <div class="mt-6 mr-12 hidden lg:block">
            <img src="../assets/images/stat-hero.svg" alt="" />
          </div>
        </div>
      </div>
      </div>
      <!-- card -->
      <div class="mr-14 py-2">
        <base-part-header :address="'credit'" :headName="'کارت های بانکی'" />
        <div class="credit-card relative mt-2.5">
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
              class="text-primary py-1.5 px-2 border-primary border-2 rounded-md"
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
  max-width: 795px;
  height: 210px;
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
  width: 330px;
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
