<template>
  <div>
    <div class="flex justify-between flex-row-reverse mt-10">
      <base-part-header :address="'insidereport'" headName="گزارش واریزی ها" />

      <img src="../assets/images/refresh.svg" alt="" />
    </div>
    <table class="bg-opacity-50 w-full mt-3.5">
      <thead>
        <tr>
          <td>مبلغ</td>
          <td>شماره کارت</td>
          <td>تاریخ پرداخت</td>
          <td>شماره تراکنش</td>
          <td>وضعیت تراکنش</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="report in reports" :key="report.payment">
          <td>{{ report.price }}</td>
          <td>{{ report.credit }}</td>
          <td>{{ report.payment }}</td>
          <td>{{ report.transactionNum }}</td>
          <td>{{ report.transactionStatus === true ? "موفق" : "ناموفق" }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import BasePartHeader from "./Base/BasePartHeader.vue";
export default {
  props: {
    heads: {
      type: Array,
      required: false,
    },
    reports: {
      type: Array,
    },
  },
};
</script>

<style>
table {
  direction: rtl;
}
thead {
  background-image: linear-gradient(to top, #031f24 21.31%, #053130 78.69%);

  height: 50px;
}

td {
  text-align: right;
}
tr {
  margin: 5px 0;
}
tr td:first-of-type {
  border-radius: 0 5px 5px 0px;

  padding-left: 5px;
}
tr td:last-of-type {
  border-radius: 5px 0 0 5px;
  padding-right: 5px;
}
</style>
