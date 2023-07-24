<template>
  <div class="about">
   <!-- <div class="md:h-40 bg-blue-400">
    <h1 class="md:mx-16 mx-6 md:text-6xl text-4xl font-bold md:p-4 p-3">Welcome to Shawarma Haiven!</h1>
   </div>

   <div class="grid grid-cols-2">
    <div class="">
      <img class="md:mx-16 mx-4 mt-6 w-60 h-60 bg-center" loading="lazy" src="../assets/shawarma-with-board.png"/>
    </div>

    <div class="bg-black md:h-full w-full md:p-[6rem] p-[3rem]">
      <p class="md:text-base text-sm md:w-[20rem] w-[10rem] text-white font-medium">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos ad dicta at deleniti pariatur, voluptates ratione 
        minus illo, in rerum minima odit! Nemo reiciendis maiores quod id illum saepe aliquam.
      </p>                                                
    </div>
   </div>

   <div class="bg-slate-500 h-[10.4rem] w-full md:p-4">
    <h1 class="md:mx-12 mx-6 md:text-5xl text-2xl p-12 text-center">Order now and enjoy</h1>
   </div> -->

   <center>
    <div class="md:w-[28rem] w-[20rem] mb-6">
      <h1 class="text-xs text-blue-400 font-bold md:mt-12 mt-16 uppercase">{{ aboutTitle.values }}</h1>
      <h1 class="md:text-5xl text-3xl font-bold mt-4">{{ aboutIntro }}</h1>
  
      <p class="text-xs mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium laudantium expedita, qui ab
        tenetur doloremque cumque magnam, sapiente repudiandae illum esse perferendis modi ipsam corrupti 
        nulla. Maiores blanditiis labore magni.
      </p>
    </div>
   </center>
 
   <Card />
  </div>
</template>

<script>
import Card from '@/components/Card.vue'
export default {
  components: { Card },
  name: 'about',

  data() {
    return {
      aboutTitle: {
        values: 'Our Values'
      },
      
      aboutIntro: 'Welcome to Shawarma Haiven', 

      
      
    }
  }
}
</script>

