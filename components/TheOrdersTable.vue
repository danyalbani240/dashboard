<template>
  <div v-if="!!buy" class="sm:overflow-hidden overflow-x-scroll">
    <table
      class="table relative orders rounded-2xl pt-3.5 mt-2.5 font-xs w-full"
      style="color: #15ab89; direction: rtl"
    >
      <thead>
        <tr class="text-white justify-between">
          <th class="rounded-tr-2xl">ارز ارسالی</th>
          <th>ارز دریافتی</th>
          <th class="rounded-tl-2xl">تاریخ انجام</th>
        </tr>
      </thead>
      <tbody class="text-center">
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
      </tbody>
    </table>
  </div>
  <div v-else class="sm:overflow-hidden sell overflow-x-scroll">
    <table
      class="table relative orders rounded-2xl pt-3.5 mt-2.5 font-xs w-full"
      style="color: #15ab89; direction: rtl"
    >
      <thead>
        <tr class="text-white justify-between">
          <th class="rounded-tr-2xl">راز ارسالی</th>
          <th>ارز دریافتی</th>
          <th class="rounded-tl-2xl">تاریخ انجام</th>
        </tr>
      </thead>
      <tbody class="text-center">
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
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    buy: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped>
.sell tr {
  background-image: linear-gradient(90.93deg, #730909 0%, #ab1542 100%);
}
table {
  min-width: 330px;
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
thead tr:first-child::after {
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
.orders::after {
  content: "";
  position: absolute;
  width: 167px;
  height: 159px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: #15ab89;
  opacity: 0.5;
  filter: blur(210px);
}
</style>
