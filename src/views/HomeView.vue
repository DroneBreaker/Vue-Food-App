<template>
  <div>
    <div class="grid md:grid-cols-2 grid-cols-1 bg-gray-100">
      <!-- The first grid -->
      <div class="md:w-[42rem] w-[22rem]">
        <h1 class="md:mx-16 mx-6 md:text-6xl text-4xl md:font-bold font-medium md:mt-16 mt-6 md:mb-10 mb-4">
          It's not just a Food 
          <span class="md:text-5xl text-2xl"> It's an Experience!</span>
        </h1>

        <p class="md:mx-16 mx-6 md:text-sm text-xs md:w-[24rem] w-[20rem] text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit cupiditate aspernatur 
          mollitia nulla aliquid, atque sed excepturi doloribus, 
          molestias beatae reiciendis laboriosam ducimus ex expedita quis. Est earum maiores dolorum.
        </p>

        <div class="md:mx-8 mx-2 mt-6 flex">
          <router-link class="border bg-white p-3 px-6 rounded-full text-xs mx-4 flex" to="/menu">
            <img class="h-4 mx-2" src="../assets/menu.png"/>
            Our Menu
          </router-link>

          <router-link class="border bg-white p-3 px-6 rounded-full text-xs flex" to="/about">
            <img class="h-4 mx-2" src="../assets/menu.png"/>
            About Us
          </router-link>
        </div>
      </div>

      <!-- RIGHT PAGE -->
      <!-- Second grid -->
      <div class="mb-4">
        <div class="md:mx-[4rem] mx-6 md:h-[30rem] h-[19rem] md:w-[30rem] w-[19rem] rounded-full bg-gray-300 shadow-2xl shadow-black md:mt-[5rem] mt-6 absolute">
          <img class="relative" src="../assets/shawarma-with-board.png"/>

          <div style="top: 15%; right: -7%;" class="h-10 w-36 rounded-full bg-white absolute z-10 flex">
            <img/>
            <h1 class="text-xs text-gray-400 p-1 px-7">Order from us and be happy</h1>
          </div>

          <div style="top: 75%; left: -7%;" class="h-10 md:w-36 w-32 rounded-full bg-white absolute z-10 flex">
            <img class="h-5"/>
            <h1 class="text-xs text-gray-400 p-1 px-7">Finger licking dish</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>
