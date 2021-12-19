<template>
  <div class="flex flex-row-reverse justify-end items-center">
    <div class="w-96 h-5 relative hidden sm:block progress-bar rounded-2xl mr-5">
      <div
        class="absolute flex justify-center text-sm progress w-6/12 h-full rounded-2xl text-primary"
      >
        ثبت نام اولیه
      </div>
      <div
        class="w-9 h-9 flex items-center justify-center win absolute icon-container rounded-md"
      >
        <img src="../../assets/images/win.svg" alt="" />
      </div>
    </div>
    <button class="auth-btn sm:mr-12 rounded-md text-white h-6 sm:text-base text-xs   sm:h-9 sm:text-primary">احراز هویت</button>
  </div>
</template>

<script>
export default {};
</script>

<style>
.progress-bar {
  border: 1px solid #15ab89;
  z-index: 1;
}
.progress {
  background-color: #15ab89;
  box-shadow: 0px 0px 10px #15ab89;
  right: 0;
}
.progress::after {
  content: "";
  position: absolute;
  left: 0;
  width: 28px;
  height: 32px;
  top: -20px;
  transform: translate(-50%, -50%);
  background-image: url(../../assets/images/union.svg);
}
.win {
  left: 0;
  top: 0;
  transform: translate(-50%, -25%);
  z-index: 3;
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.18) 0%,
    rgba(196, 196, 196, 0.06) 100%
  );
}
.auth-btn {
  width: 140px;
  
  background-image: linear-gradient(90.93deg, #097369 0%, #15ab88 100%);
}
</style>
