<template>
  <div>
    <div class="flex justify-between flex-row-reverse mt-10">
      <base-part-header :address="'insidereport'" headName="گزارش واریزی ها" />

      <img
        src="../assets/images/refresh.svg"
        @click.prevent="refresh"
        class="cursor-pointer"
        alt=""
      />
    </div>
    <div v-if="isLoading">loadin...</div>
    <div v-else class="overflow-x-auto">
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
          <tr
            v-for="(report, index) in reports"
            :class="{ two: index % 2 === 0 }"
            :key="report.payment"
          >
            <td>{{ report.price }}</td>
            <td>{{ report.credit }}</td>
            <td>{{ report.payment }}</td>
            <td>{{ report.transactionNum }}</td>
            <td>
              <div
                class="flex justify-center flex-row-reverse"
                v-if="report.transactionStatus === true"
              >
                <img src="../assets/images/deposit-token/success.svg" alt="" />
                <span class="ml-7" style="color: #358535">موفق</span>
              </div>
              <div v-else class="flex flex-row-reverse justify-center">
                <img
                  src="../assets/images/deposit-token/consist-close.svg"
                  alt=""
                />
                <span class="text-red-500 ml-7">ناموفق</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="flex flex-row-reverse justify-end mt-3">
      <img src="../assets/images/nexticon.svg" alt="" />
      <div class="flex">
        <img src="../assets/images/pagbefore.svg" alt="" />
        <div class="flex items-center">
          <div class="pag-active pag-item">1</div>
          <div class="pag-item">2</div>
          <div class="pag-item">3</div>
          <div class="pag-12 px-3.5 py-1">صفحه 12</div>
          <div class="pag-item">28</div>
        </div>
        <img src="../assets/images/pagnext.svg" alt="" />
      </div>
      <img src="../assets/images/previousicon.svg" alt="" />
    </div>
    <div class="btn-group flex mt-14">
      <base-button class="mr-2.5" :next="true" :bGreen="true"
        >مرحله بعد</base-button
      >
      <base-button :prev="true">مرحله قبل</base-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
    };
  },
  props: {
    heads: {
      type: Array,
      required: false,
    },
    reports: {
      type: Array,
    },
  },
  methods: {
    refresh() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    },
  },
};
</script>

<style scoped>
table {
  direction: rtl;
  min-width: 580px;
}
thead {
  background-image: linear-gradient(to top, #031f24 21.31%, #053130 78.69%);

  height: 60px;
}
tbody tr {
  background: linear-gradient(
    143.41deg,
    rgba(3, 31, 36, 0.5) 21.31%,
    rgba(5, 49, 48, 0.5) 78.69%
  );
  height: 60px;
  background-color: rgba(0, 0, 0, 0.5);
}
td {
  text-align: right;
  position: relative;
  text-align: center;
}
tr {
  margin: 5px 0;
  position: relative;
  text-align: center;
}
/* tr::before {
  position: absolute;
  top: 0;
  width: 100%;
  height: 5px;
  content: "";
}
tr::after {
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #010e10;
  height: 5px;
  content: "";
} */
tr td::before {
  content: "";
  top: 0;
  left: 0;
  height: 5px;
  width: 100%;
  position: absolute;
  background-color: #010e17 !important;
}
tr td::after {
  content: "";
  bottom: 0;
  left: 0;
  height: 5px;
  width: 100%;
  position: absolute;
  background-color: #010e17 !important;
}
tr td:first-of-type {
  border-radius: 0 5px 5px 0px;

  padding-left: 5px;
}
tr td:last-of-type {
  border-radius: 5px 0 0 5px;
  padding-right: 5px;
}
tr.two {
  background: linear-gradient(
    143.41deg,
    rgba(9, 115, 105, 0.5) 21.31%,
    rgba(21, 171, 136, 0.5) 78.69%
  );
}
.pag-item {
  width: 28px;
  text-align: center;
  height: 28px;
  border-radius: 5px;
}
.pag-12 {
  border: 1px solid #15ab89;
  border-radius: 5px;
  text-align: center;
}
.pag-item.pag-active {
  background-image: linear-gradient(
    181.44deg,
    rgba(255, 255, 255, 0.18) 0%,
    rgba(196, 196, 196, 0.06) 100%
  );
  backdrop-filter: blur(12px);
}
</style>
