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
        <ul v-for="section in componentSections" :key="section.name">
          <li class="px-2 mt-6">
            <span class="text-md title-font text-gray-700 tracking-widest font-semibold">{{section.name}}</span>
            <ul v-for="component in section.components" :key="component.name">
              <li class="mt-2">
                <div class="text-sm text-gray-600 tracking-widest font-medium title-font truncate text-center">{{component.name}}</div>
                <div class="relative h-20 bg-gray-700 rounded-lg overflow-hidden shadow-lg">
                  <router-link :to="component.url" tag="img" class="w-full h-full object-center cursor-pointer" :alt="component.name" :src="getImgUrl(component.img)"></router-link>
                </div>
              </li>
            </ul>
          </li>
        </ul>
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
      return this.$store.getters.sideMenuOpen
    },
    componentSections: function() {
      return this.$store.getters.componentSections
    }
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
    getImgUrl(endpoint) {
      var images = require.context("@")
      return images('./' + endpoint)
    },
  },
  mounted: function() {
  }
};
</script>