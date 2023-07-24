<template>
    <div class="card-info md:mx-16 mx-6 mt-20 grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-4">
        <div v-for="card in aboutCard" :key="card" class="md:h-40 h-32 md:w-60 sm:w-44 bg-white rounded-md">
            <!-- <img/> -->
            <h1 id="title" class="mx-4 text-sm font-bold my-6 mb-4">{{ card.title }}</h1>
        
            <p class="mx-4 text-xs mt-4">{{ card.message }}</p>
        </div>
    </div>
</template>

<script>
import AboutView from '@/views/AboutView.vue'
export default {
  components: { AboutView },
 data() {
    return {
        aboutCard: 
        [
          {image: '', title: "Customer Friendly", message: "That's bad"},
          {image: '', title: "Wondeful Service", message: "That's good"},
          {image: '', title: "Custom", message: "That's medium"},
          {image: '', title: "Custom", message: "That's medium"},
        ]
    }
 }
}
</script>

<style lang="css" scoped>

@media screen and (min-width: 768px)
    and (max-width: 1022px) {
    .card-info {
        /* width: 512px; */
        /* height: 128px; */
        width: 93%;
        justify-content: space-between;
    }
}
</style>