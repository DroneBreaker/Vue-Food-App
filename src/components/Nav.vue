<template>
    <div class="bg-gray-100">
        <nav class="flex justify-between p-2">
            <div class="mx-12">
                <router-link to="/">
                    <span class="md:text-base text-sm font-bold">Shawarma Haiven</span>
                </router-link>
            </div>

            <div class="mx-12 text-sm font-semibold">
                <router-link class="mx-4" to="/">Home</router-link>
                <router-link to="/about">About</router-link>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Nav'
}
</script>