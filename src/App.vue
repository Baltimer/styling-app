<template>
  <div class="h-screen bg-gray-300 flex flex-col">
    <Sidebar />
    <Header />
    <router-view></router-view>
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
