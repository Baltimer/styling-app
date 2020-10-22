<template>
  <div
    class="flex fixed justify-between items-center w-full pl-2 pr-2 h-16 bg-gray-100 shadow-sm expand-padding"
    :class="openSideMenu ? 'pl-32' : ''"
  >
    <div
      class="inline-flex items-center ml-2 cursor-pointer h-16"
      v-on:click="toggleSidebar"
    >
      <svg
        v-if="openSideMenu"
        class="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        ></path>
      </svg>
      <svg
        v-else
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        ></path>
      </svg>
      <span class="ml-2 text-lg font-semibold">Components</span>
    </div>
    <div>right content</div>
  </div>
</template>

<script>
export default {
  computed: {
    openSideMenu: function () {
      return this.$store.getters.sideMenuOpen;
    },
  },
  methods: {
    toggleSidebar: function () {
      this.$store.commit("toggleSideMenu");
    },
  },
};
</script>

<style>
.expand-padding {
  transition: padding 0.5s;
}
</style>