<template>
  <!-- <div class="w-3/12 bg-red-400 h-auto">
    <div class="fixed h-1/2 top-0 right-0 w-full bg-red-700"></div>
  </div> -->
  <div
    :class="{
      'fixed w-screen bg-opacity-60 top-0 right-0 h-screen  ': !closed,
      'sm:static': closed,
    }"
    class="bg-primary sm:static sm:z-auto sm:bg-opacity-100 z-40 sm:h-auto sm:w-auto transition-all"
    @click.self="$store.commit('sidebar/closeSidebar')"
  >
    <div
      class="relative h-full transition-all"
      :class="{ 'sm:w-56 w-7/12': !closed, 'w-0': closed }"
    >
      <nav
        :class="{ 'sm:w-56 w-7/12': !closed, 'w-0': closed }"
        class="fixed z-50 right-0 top-0 h-3/5 sm:h-full flex overflow-y-visible flex-col bg-primary overflow-x-hidden"
      >
        <div
          class="navicon relative sm:block justify-between flex flex-row-reverse items-end"
        >
          <div class="flex-1 sm:hidden flex flex-row-reverse pr-5">
            <the-sidebar-toggler
              class="transition-all"
              :class="{ rotated: !closed }"
            />
          </div>
          <img
            class="mx-auto sm:px-9 sm:py-8 py-3 px-2"
            src="../assets/images/icon.svg"
            alt="novintex"
          />
        </div>
        <div class="flex-1 pr-1 links mt-6">
          <base-navitem
            v-for="navItem in navItems"
            :key="navItem.name"
            :name="navItem.name"
            :address="navItem.address"
            :linkAddress="navItem.linkAddress"
            :active="navItem.active"
            :dropdown="navItem.dropdown"
            :closed="true"
          />
        </div>
        <div class="relative cursor-pointer pr-5 logout">
          <div class="flex flex-row-reverse pt-2 pb-2 items-center">
            <img src="~/assets/images/sidebar/logouticon.svg" alt="" />
            <p class="text-gray-300 text-xs">خروج از حساب</p>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import TheSidebarToggler from "./TheSidebarToggler.vue";
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

          address: "dashicon",
          active: true,
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
          dropdown: [
            { name: "واریز ریالی", linkAdress: "/deposit-rial" },
            { name: "برداشت ریالی", linkAdress: "/withdarw-rial" },
          ],
        },
        {
          address: "profileicon",
          name: "پروفایل",
          linkAddress: "/profile",
          dropdown: [
            { name: "حساب کاربری", linkAdress: "/profile" },
            { name: "احراز هویت", linkAdress: "/verify" },
            { name: "تعهد نامه", linkAdress: "/commitment" },
          ],
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
          dropdown: [
            { name: "کیف پول", linkAdress: "/crypto-wallet" },
            { name: "کیف پول ریالی", linkAdress: "/rial-wallet" },
            { name: "معامله رمز ارز", linkAdress: "/trade-token" },
          ],
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

  watch: {
    routerUrl(newValue) {
      this.$store.commit("sidebar/closeSidebar");
    },
  },
  computed: {
    routerUrl() {
      return this.$route.path;
    },
  },
  methods: {
    toggleSidebar(e) {
      this.isOpen = !this.isOpen;
      e.currentTarget.classList.toggle("closed");
    },
  },
};
</script>

<style>
nav {
  transition: width 0.6s ease;
  border-radius: 110px 0 0 0;
  box-shadow: 0px 4px 4px rgba(21, 171, 137, 0.5);
}

/* hide scrollbar but allow scrolling */
nav {
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll;
}

nav::-webkit-scrollbar {
  display: none; /* for Chrome, Safari, and Opera */
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

@media only screen and (max-width: 600px) {
  nav {
    border-radius: 20px 0 0;
  }
}
</style>
