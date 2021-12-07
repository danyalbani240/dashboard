<template>
  <div class="mt-12">
    <p class="text-lg text-Neutral-Gray text-center">
      فعال سازی گوگل دو مرحله ای
    </p>
    <p class="text-sm mt-5 text-center">
      از طریق یکی از پلتفرم های زیر نرم افزار های گوگل دو مرحله را فعال کنید.
    </p>
    <div
      class="auth-box-container mx-auto mt-14 flex justify-center flex-wrap"
    >
      <div class="base-auth-item flex items-center justify-center my-7">
        <div
          class="auth-item-box bg-primary flex flex-col items-center justify-center"
        >
          <div>
            <img src="../assets/images/Qrbarcode.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="btn-group mt-14">
      <base-button>مرحله بعد</base-button>
      <base-button bGreen="true">مرحله قبل</base-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.base-auth-item {
  border: 2px solid #15ab89;
  border-radius: 10px;
  background-image: linear-gradient(
    91.44deg,
    rgba(255, 255, 255, 0.18) 0%,
    rgba(196, 196, 196, 0.06) 100%
  );
  width: 362.99px;
  height: 362.99px;
}
.auth-item-box {
  background-repeat: no-repeat;
  width: 291px;
  height: 291px;
  background-position: bottom left;
  border: 1px solid #15ab89;
  border-radius: 5px;
}
</style>
