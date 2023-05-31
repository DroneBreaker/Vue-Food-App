<template>
    <div class="bg-gray-100">
        <nav class="flex justify-between p-2">
            <div class="md:mx-16 mx-8">
                <router-link to="/">
                    <span class="md:text-base text-sm font-bold">Shawarma Haiven</span>
                </router-link>
            </div>

            <div class="md:mx-16 mx-8 text-sm font-semibold">
                <router-link class="mx-4" to="/">Home</router-link>
                <router-link class="mx-4" to="/menu">Menu</router-link>
                <router-link class="mx-4" to="/about">About</router-link>
                <router-link to="/contact">Contact</router-link>
            </div>

            <div class="md:mx-16 mx-8">
                <input class="rounded-full h-6 w-[16rem] text-sm px-6" type="text" placeholder="Search">
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Nav'
}
</script>