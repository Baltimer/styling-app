<template>
  <transition
    enter-class="transition duration-500 ease-in-out transform -translate-x-32"
    enter-to-class="transition duration-500 ease-in-out transform"
    leave-class="transition duration-500 ease-in-out transform"
    leave-to-class="transition -translate-x-32 duration-500 ease-in-out transform"
  >
    <aside class="h-full w-72 fixed top-0 left-0 overflow-auto flex"
    v-show="openSidebar">
      <div
        class="bg-gray-100 w-32 h-full border-r shadow-md overflow-auto overflow-x-hidden z-30"
        
      >
        <p>TEST</p>
      </div>
      <div
        class="inline-flex items-center ml-2 cursor-pointer h-16"
        v-on:click="toggleSidebar"
      >
        <svg
          v-if="openIcon"
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
    </aside>
  </transition>
</template>

<script>
export default {
  data: () => {
    return {
      openSidebar: true,
      openIcon: true
    };
  },
  methods: {
    toggleSidebar() {
      this.openSidebar = !this.openSidebar;
      var that = this;
      setTimeout(function() {
        that.openIcon = !that.openIcon
      }, 500);
    },
  },
};
</script>