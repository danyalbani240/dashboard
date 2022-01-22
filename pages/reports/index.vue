<template>
  <div class="bg-primary w-full text-Neutral-Gray p-5">
    <base-dashboard-header :pageName="'گزارشات'" />
    <the-reports-table :reports="reports" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      reports: [
        {
          price: "500.000.000 ریال",
          credit: "6280 2311 5761 1705",
          payment: "12:52-1400/8/2",
          transactionNum: "61235ac4a4d5e723f0725cc9",
          transactionStatus: false,
        },
        {
          price: "3.500.000 ریال",
          credit: "6280 2311 5761 1705",
          payment: "12:52-1400/8/2",
          transactionNum: "61235ac4a4d5e723f0725cc9",
          transactionStatus: true,
        },
        {
          price: "500.000.000 ریال",
          credit: "6280 2311 5761 1705",
          payment: "12:52-1400/8/2",
          transactionNum: "61235ac4a4d5e723f0725cc9",
          transactionStatus: false,
        },
        {
          price: "500.000.000 ریال",
          credit: "6280 2311 5761 1705",
          payment: "12:52-1400/8/2",
          transactionNum: "61235ac4a4d5e723f0725cc9",
          transactionStatus: false,
        },
        {
          price: "500.000.000 ریال",
          credit: "6280 2311 5761 1705",
          payment: "12:52-1400/8/2",
          transactionNum: "61235ac4a4d5e723f0725cc9",
          transactionStatus: false,
        },
        {
          price: "500.000.000 ریال",
          credit: "6280 2311 5761 1705",
          payment: "12:52-1400/8/2",
          transactionNum: "61235ac4a4d5e723f0725cc9",
          transactionStatus: false,
        },
        {
          price: "500.000.000 ریال",
          credit: "6280 2311 5761 1705",
          payment: "12:52-1400/8/2",
          transactionNum: "61235ac4a4d5e723f0725cc9",
          transactionStatus: false,
        },
        {
          price: "500.000.000 ریال",
          credit: "6280 2311 5761 1705",
          payment: "12:52-1400/8/2",
          transactionNum: "61235ac4a4d5e723f0725cc9",
          transactionStatus: false,
        },
        {
          price: "500.000.000 ریال",
          credit: "6280 2311 5761 1705",
          payment: "12:52-1400/8/2",
          transactionNum: "61235ac4a4d5e723f0725cc9",
          transactionStatus: false,
        },
        {
          price: "500.000.000 ریال",
          credit: "6280 2311 5761 1705",
          payment: "12:52-1400/8/2",
          transactionNum: "61235ac4a4d5e723f0725cc9",
          transactionStatus: false,
        },
        {
          price: "500.000.000 ریال",
          credit: "6280 2311 5761 1705",
          payment: "12:52-1400/8/2",
          transactionNum: "61235ac4a4d5e723f0725cc9",
          transactionStatus: false,
        },
        {
          price: "500.000.000 ریال",
          credit: "6280 2311 5761 1705",
          payment: "12:52-1400/8/2",
          transactionNum: "61235ac4a4d5e723f0725cc9",
          transactionStatus: false,
        },
      ],
    };
  },
  computed: {
    Rows() {
      let newRows = [];
      for (let item = 0; item < this.reports.length; item++) {
        let rowArray = [];
        let priceObject = {
          title: "مبلغ",
          value: this.reports[item].price,
        };
        let creditObject = {
          title: "شماره کارت",
          value: this.reports[item].credit,
        };
        let paymentObject = {
          title: "تاریخ پرداخت",
          value: this.reports[item].payment,
        };
        let transactionNumObject = {
          title: "شماره تراکنش",
          value: this.reports[item].transactionNum,
        };
        let transactionStatusObject = {
          title: "وضعیت تراکنش",
          value: this.reports[item].transactionStatus,
        };
        rowArray.push(
          priceObject,
          creditObject,
          paymentObject,
          transactionNumObject,
          transactionStatusObject
        );
        newRows.push(rowArray);
      }
      console.log(newRows);
      return newRows;
    },
  },
};
</script>

<style></style>
