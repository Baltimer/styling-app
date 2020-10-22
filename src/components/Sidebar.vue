<template>
  <transition
    enter-class="transition duration-500 ease-in-out transform -translate-x-32"
    enter-to-class="transition duration-500 ease-in-out transform"
    leave-class="transition duration-500 ease-in-out transform"
    leave-to-class="transition -translate-x-32 duration-500 ease-in-out transform"
  >
    <aside
      class="h-screen w-32 top-0 left-0 overflow-auto flex z-50"
      v-show="openSideMenu"
    >
      <div
        class="bg-gray-100 w-full h-full border-r shadow-md overflow-auto overflow-x-hidden z-30"
      >
        <p>TEST</p>
      </div>
    </aside>
  </transition>
</template>

<script>
export default {
  data: () => {
    return {
      openSidebar: true,
      openIcon: true,
    };
  },
  computed: {
    openSideMenu: function () {
      return this.$store.getters.sideMenuOpen;
    },
  },
  methods: {
    toggleSidebar() {
      this.$store.commit("toggleSideMenu");
      this.openSidebar = !this.openSidebar;
      var that = this;
      setTimeout(function () {
        that.openIcon = !that.openIcon;
      }, 500);
    },
  },
};
</script>