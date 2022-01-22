<template>
  <!-- <div class="table-item bg-primary w-11/12 flex-col justify-between" dir="rtl" v-for="row in rows">
    <div class="flex justify-between">
      <p>مبلغ:</p>
      <p></p>
    </div>
    <div class="flex justify-between">
      <p>شمراه کارت:</p>
      <p></p>
    </div>
    <div class="flex justify-between">
      <p>تاریخ پرداخت:</p>
      <p></p>
    </div>
    <div class="flex justify-between">
      <p>شماره تراکنش:</p>
      <p></p>
    </div>
    <div class="flex justify-between">
      <p>وضعیت تراکنش:</p>
      <p></p>
    </div>
  </div> -->
</template>

<script>
export default {
    props:{
        rows:{
            type:Array,
            required: true
        }
    }
};
</script>

<style>
.table-item {
  height: 220px;
  padding-right: 13px;
  padding-left: 9px;
  border: 1px solid rgba(21, 171, 137, 0.3);
  box-shadow: 0px 10px 16px rgba(21, 171, 137, 0.1);
  border-radius: 18px;
}
</style>
