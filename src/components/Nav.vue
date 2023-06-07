<template>
    <div class="bg-gray-100">
        <nav class="flex justify-between p-2">
            <div class="md:mx-16 mx-6">
                <router-link to="/">
                    <span class="md:text-base text-xs font-bold">Shawarma Haiven</span>
                </router-link>
            </div>

            <div :class="isOpen ? 'flex' : 'hidden'" class=" md:mx-16 mx-6 md:flex md:flex-wrap text-sm font-semibold">
                <router-link class="mx-4" to="/">Home</router-link>
                <router-link class="mx-4" to="/menu">Menu</router-link>
                <router-link class="mx-4" to="/about">About</router-link>
                <router-link to="/contact">Contact</router-link>
            </div>

            <div class="md:mx-16 mx-6">
                <input class="rounded-full md:h-6 w:h-4 md:w-[16rem] w-[10rem] text-sm md:px-6 px-4" type="text" placeholder="Search">
            </div>

            <!-- HAMBURGER -->
            <div className="flex md:hidden">
                    <button
                        @click="isOpen = !isOpen"
                        type="button"
                        className="m-2 my-2 md:hidden"
                    >
                        <svg
                        className="h-6 w-6 text-dawnorange"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        >
                        <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Nav',

    data() {
        return {
            isOpen: false
        }
    },

    methods: {
        handleClick: function() {
            this.isOpen = !this.isOpen;
        }
    }
}
</script>