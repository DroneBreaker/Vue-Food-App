<template>
    <div class="bg-gray-100">
        <nav class="flex justify-between p-2">
            <div class="md:mx-16 mx-6">
                <router-link to="/">
                    <span class="md:text-base text-sm font-bold">Shawarma Haiven</span>
                </router-link>
            </div>

            <div class="md:mx-16 mx-6 text-sm font-semibold">
                <router-link class="mx-4" to="/">Home</router-link>
                <router-link class="mx-4" to="/menu">Menu</router-link>
                <router-link class="mx-4" to="/about">About</router-link>
                <router-link to="/contact">Contact</router-link>
            </div>

            <div class="md:mx-16 mx-6">
                <input class="rounded-full md:h-6 w:h-4 md:w-[16rem] w-[10rem] text-sm md:px-6 px-4" type="text" placeholder="Search">
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Nav'
}
</script>