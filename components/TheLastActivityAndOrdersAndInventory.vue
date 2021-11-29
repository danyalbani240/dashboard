<template>
  <div class="flex flex-row-reverse mt-8">
    <div>
      <base-part-header
        :headName="'آخرین فعالیت ها'"
        :address="'lastactivity'"
      />
      <div class="flex mt-2.5 flex-row-reverse">
        <div class="bg-primary rounded-2xl last-do flex justify-center">
          <div class="flex flex-col items-center mt-20">
            <div
              class="icon-conatiner inline-block rounded-md icon-container p-1.5 mb-2.5"
            >
              <img src="../assets/images/infobox.svg" alt="" />
            </div>
            <p style="color: #15ab89">اطلاعاتی موجود نیست</p>
          </div>
        </div>
      </div>
    </div>
    <div class="mr-4">
      <div class="flex flex-row-reverse justify-between items-center">
        <base-part-header :headName="'سفارشات'" :address="'shopingcart'" />
        <base-switch-badge linkOne="خرید" linkTwo="فروش" />
      </div>
      <table
        class="table rounded-2xl mt-2.5 font-xs"
        style="color: #15ab89; direction: rtl"
      >
        <tr class="text-white justify-between">
          <th class="rounded-tr-2xl">راز ارسالی</th>
          <th>ارز دریافتی</th>
          <th class="rounded-tl-2xl">تاریخ انجام</th>
        </tr>
        <tr>
          <td>10 TRX</td>
          <td>24.246.000 IRr</td>
          <td>1400.7.12 10:53</td>
        </tr>
        <tr>
          <td>10 TRX</td>
          <td>24.246.000 IRr</td>
          <td>1400.7.12 10:53</td>
        </tr>
        <tr>
          <td>10 TRX</td>
          <td>24.246.000 IRr</td>
          <td>1400.7.12 10:53</td>
        </tr>
        <tr>
          <td>10 TRX</td>
          <td>24.246.000 IRr</td>
          <td>1400.7.12 10:53</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td class="rounded-br-2xl"></td>
          <td></td>
          <td class="rounded-bl-2xl"></td>
        </tr>
      </table>
    </div>
    <div class="mr-14">
      <div class="flex flex-row-reverse justify-between items-center">
        <base-part-header :address="'inventory'" :headName="'موجودی'" />
        <base-switch-badge :linkOne="'رمز ارز'" :linkTwo="'ريالی'" />
      </div>
      <base-inventory :itemsData="inventory" />
    </div>
  </div>
</template>

<script>
import BaseInventory from "./Base/BaseInventory.vue";
export default {
  components: { BaseInventory },
  data() {
    return {
      orders: [],
      inventory: [
        {
          price: "0.000000",
          name: "BTCc",
        },
        {
          price: "0.000000",
          name: "BTCcc",
        },
        {
          price: "0.000000",
          name: "BTC",
        },
        {
          price: "0.000000",
          name: "BTCccc",
        },
        {
          price: "0.000000",
          name: "BTCccccc",
        },
        {
          price: "0.000000",
          name: "BTCccccccc",
        },
      ],
    };
  },
};
</script>

<style>
.last-do {
  background-image: url(../assets/images/weiredelectral.svg);
  width: 390px;
  height: 308px;
  background-repeat: no-repeat;
  background-position: bottom;
  border: 1px solid rgba(21, 171, 137, 0.3);
  box-sizing: border-box;
  box-shadow: 0px 10px 16px rgba(21, 171, 137, 0.1);
}
table {
  width: 390px;
  height: 306px;
  background: linear-gradient(
    91.44deg,
    rgba(255, 255, 255, 0.18) 0%,
    rgba(196, 196, 196, 0.06) 100%
  );
}
table tr {
  height: 38px;
}

tr {
  background-color: #15ab8886;
  text-align: center;
}
tr:nth-child(even) {
  background-image: none;
  background-color: transparent !important;
}

tr:first-child {
  border-radius: 16px;
  position: relative;
}
tr:first-child::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 2px;
  left: 0;
  bottom: 0;
  background-image: linear-gradient(
    270deg,
    rgba(14, 33, 39, 0.3) 0%,
    #15ab89 51.04%,
    rgba(44, 61, 66, 0.3) 100%
  );
}
a.buy.active {
  background-image: linear-gradient(90.93deg, #097369 0%, #15ab88 100%);
}
a.buy {
  width: 70px;
  height: 26px;
}
a.sell {
  color: #15ab89;
}
.table-header {
  border-radius: 17px;
  border: 1px solid #15ab89;
  width: 154px;
  height: 34px;
}
.current {
  border: 1px solid rgba(21, 171, 137, 0.3);
}
.sync::after {
  width: 301px;
  height: 2px;
  content: "";
  position: absolute;
  bottom: 0;
  background: linear-gradient(270deg, #010e17 0%, #15ab89 51.04%, #010e17 100%);
}
.mj {
  width: 331px;
  height: 308px;
}
</style>
