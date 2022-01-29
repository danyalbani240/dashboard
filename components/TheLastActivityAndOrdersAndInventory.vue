<template>
  <div class="flex flex-row-reverse mt-8 flex-wrap">
    <div class="relative hidden md:block flex-1">
      <div class="absolute do-bg rounded-full overflow-hidden z-50"></div>
      <div class="flex flex-1 flex-col">
        <base-part-header
          :headName="'آخرین فعالیت ها'"
          :address="'lastactivity'"
        />
        <div class="flex mt-2.5 flex-row-reverse flex-1">
          <div
            class="bg-primary rounded-2xl last-do bg-contain flex w-full justify-center"
          >
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
    </div>
    <div class="xl:mr-4 my-6 md:my-0 flex-1">
      <div class="flex flex-row-reverse justify-between items-center">
        <base-part-header :headName="'سفارشات'" :address="'shopingcart'" />
        <base-switch-badge
          @change="changeOrders"
          :active="ordersActive"
          linkOne="خرید"
          linkTwo="فروش"
        />
      </div>
      <the-orders-table class="w-full" :buy="ordersActive === 1" />
    </div>
    <div class="xl:mr-14 flex-1">
      <div class="flex flex-row-reverse justify-between items-center">
        <base-part-header :address="'inventory'" :headName="'موجودی'" />
        <base-switch-badge
          :active="inventoryActive"
          :linkOne="'رمز ارز'"
          :linkTwo="'ريالی'"
          @change="changeInventory"
          :notOpposite="true"
        />
      </div>
      <base-inventory
        :active="inventoryActive"
        class="w-full"
        :itemsData="inventory"
      />
    </div>
  </div>
</template>

<script>
import BaseInventory from "./Base/BaseInventory.vue";
export default {
  components: { BaseInventory },
  data() {
    return {
      inventoryActive: 1,
      ordersActive: 1,
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
  methods: {
    changeInventory() {
      if (this.inventoryActive === 1) {
        this.inventoryActive = 2;
      } else {
        this.inventoryActive = 1;
      }
    },
    changeOrders() {
      if (this.ordersActive === 1) {
        this.ordersActive = 2;
      } else {
        this.ordersActive = 1;
      }
    },
  },
};
</script>

<style scoped>
.last-do {
  background-image: url("../assets/images/weiredelectral.svg?external");
  min-width: 330px;
  height: 308px;
  background-repeat: no-repeat;
  background-position: bottom;
  border: 1px solid rgba(21, 171, 137, 0.3);
  box-sizing: border-box;
  box-shadow: 0px 10px 16px rgba(21, 171, 137, 0.1);
  filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.5));
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
.do-bg {
  background: #15ab89;
  opacity: 0.5;
  filter: blur(80px);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 167px;
  height: 159px;
}
</style>
