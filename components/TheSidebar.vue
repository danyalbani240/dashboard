<template>
  <div class="bg-primary fixed w-screen z-40 sm:static sm:z-auto sm:bg-opacity-100 sm:h-auto sm:w-auto  bg-opacity-60 top-0 right-0 h-screen">


    <nav :class="{'w-56' : !closed,'w-0' : closed}" class="h-full fixed right-0 top-0 min-h-screen flex flex-col sm:relative bg-primary overflow-x-hidden">
      <div class="navicon relative sm:block flex flex-row-reverse items-end">
        <div class="flex-1 sm:hidden"></div>
        <img
          class="mx-auto sm:px-9 sm:py-8 py-3 px-2"
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
          :linkAddress="navItem.linkAddress"
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
import TheSidebarToggler from './TheSidebarToggler.vue';
export default {
  components: { TheSidebarToggler },
  props: {
    closed: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      navItems: [
        {
          name: "داشبورد",
          dropdown: false,
          address: "dashicon",
          linkAddress: "/",
        },
        {
          name: "تعاریف",
          address: "tarificon",
        },
        {
          name: "حسابداری",
          address: "countericon",
          linkAddress: "/deposit-rial",
        },
        {
          address: "profileicon",
          name: "پروفایل",
          linkAddress: "/profile",
        },
        {
          address: "bazaricon",
          name: "بازار",
          linkAddress: "/crypto-trade",
        },
        {
          address: "NFTicon",
          name: "NFTبازار",
        },
        {
          address: "walleticon",
          name: "کیف پول",
          linkAddress: "/crypto-wallet",
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
          linkAddress: "/reports",
        },
      ],
    };
  },
  computed: {
    myImage() {},
  },
  methods:{
    toggleSidebar(e) {
      this.isOpen = !this.isOpen
      e.currentTarget.classList.toggle('closed')
      console.log(
        e.currentTarget
      )
    }
  }
};
</script>

<style>
nav {
  transition: width 1s ease-in-out;
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

@media only screen and (max-width: 400px) {
  nav{
    border-radius: 20px 0 0;
  }
}

</style>
