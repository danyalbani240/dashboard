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
};
</script>

<style></style>
