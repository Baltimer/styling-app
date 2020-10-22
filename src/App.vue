<template>
  <div class="h-screen bg-gray-300 flex">
    <Sidebar />
    <Header />
    <main class="main-container overflow-auto fixed mt-16 top-0 left-0 w-full">
      <router-view class="h-full w-full flex justify-center items-center"></router-view>
    </main>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import Header from '@/components/Header.vue'
export default {
  name: "app",
  components: {
    Sidebar,
    Header
  },
}
</script>

<style>
  .main-container {
    height: calc(100vh - 4rem);
  }
</style>