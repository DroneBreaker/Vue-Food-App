<template>
  <div class="bg-gray-100 h-[100vh] w-full">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from  '../src/components/Nav.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
</style>
