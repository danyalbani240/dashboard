<template>
  <div class="bg-primary">
    <nav class="h-full min-h-screen flex flex-col relative bg-primary w-56">
      <div class="navicon relative">
        <img
          class="mx-auto px-9 py-8"
          src="../assets/images/icon.svg"
          alt="novintex"
        />
      </div>
      <div class="flex-1 pr-5 links mt-6">
        <base-navitem
          v-for="navItem in navItems"
          :key="navItem.name"
          :name="navItem.name"
          :address="navItem.address"
        />
      </div>
      <div class="relative pr-5 logout">
        <div class="flex flex-row-reverse">
          <img src="~/assets/images/sidebar/logouticon.svg" alt="" />
          <p class="text-gray-300 text-xs">خروج از حساب</p>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        {
          name: "داشبورد",
          dropdown: false,
          address: "dashicon",
        },
        {
          name: "تعاریف",
          address: "tarificon",
        },
        {
          name: "حسابداری",
          address: "countericon",
        },
        {
          address: "profileicon",
          name: "پروفایل",
        },
        {
          address: "bazaricon",
          name: "بازار",
        },
        {
          address: "NFTicon",
          name: "NFTبازار",
        },
        {
          address: "walleticon",
          name: "کیف پول",
        },
        {
          address: "documentsicon",
          name: "قرارداد هوشمند",
        },
        {
          address: "exchangeicon",
          name: "صرافی ها",
        },
        {
          address: "reportsicon",
          name: "گزارشات",
        },
      ],
    };
  },
  computed: {
    myImage() {},
  },
};
</script>

<style>
nav {
  border-radius: 110px 0 0 0;
  box-shadow: 0px 4px 4px rgba(21, 171, 137, 0.5);
}

.navicon::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  background-image: linear-gradient(
    270deg,
    rgba(1, 14, 23, 0) 0%,
    #15ab89 51.04%,
    rgba(1, 14, 23, 0) 100%
  );
}
.logout::before {
  content: "";

  position: absolute;
  width: 100%;
  height: 2px;
  background-image: linear-gradient(
    270deg,
    rgba(1, 14, 23, 0) 0%,
    #15ab89 51.04%,
    rgba(1, 14, 23, 0) 100%
  );
}
</style>
