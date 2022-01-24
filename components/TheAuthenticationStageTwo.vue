<template>
  <div class="mt-12">
    <p class="text-lg text-Neutral-Gray text-center">
      فعال سازی گوگل دو مرحله ای
    </p>
    <p class="text-sm mt-5 text-center">
      کیو ار نمایش داده شده را اسکن کنید یا لینک زیر را برای فعال کردن گوگل دو
      مرحله وارد کنید.
    </p>
    <div class="auth-box-container mx-auto mt-14 flex justify-center flex-wrap">
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
    <div class="mx-auto wtf overflow-x-scroll flex items-center justify-center">
      <div class="bg-primary flex items-center">
        <img
          class="mx-6"
          src="../assets/images/bulk-documnet-copy.svg"
          alt=""
        />
        <p>
          afhoishisdiusdiufsiudfgiaudgfiuusagdfiuagdfiugaidufgiasdfghfgsdfgs
        </p>
      </div>
    </div>
    <div class="btn-group mt-14">
      <base-button @click="$emit('getPass')">مرحله بعد</base-button>
      <base-button @click="$emit('getBack')" bGreen="true">مرحله قبل</base-button>
    </div> 
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
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
.wtf {
  width: 633.31px;
  height: 77.39px;
  border: 2px solid #15ab89;
  border-radius: 10px;
  box-shadow: inset 0px 0px 10px #15ab89;
}
.wtf div {
  border: 1px solid #15ab89;
  border-radius: 5px;
  width: 615px;
  height: 62px;
}
</style>
