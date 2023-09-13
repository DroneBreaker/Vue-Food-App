<template>
        <div >
            <center>
                <div class="mt-12 md:w-[20rem] lg:w-[26rem]">
                    <div>
                        <h1 class="font-bold md:text-3xl lg:text-5xl mr-8 lg:mr-12">{{ contact.title }}</h1>
                        <p class="text-sm ml-16 lg:ml-14 text-gray-400">{{ contact.body }}</p>
                    </div>
        
                    <div class="mt-10 w-full">
                        <form class="w-full">
                            <!-- <div class="block"> -->
                                <label class="block mr-34 lg:mr-64 text-xs uppercase" for="name">Name</label>
                                <input class="ml-16 mb-4 w-full rounded-md" type="text">
        
                                <!-- Mail contact -->
                                <label class="block mr-34 lg:mr-64 text-xs uppercase" for="email">E-Mail</label>
                                <input class="ml-16 mb-4 w-full rounded-md" type="text">
        
                                <!-- Phone contact -->
                                <label class="block mr-34 lg:mr-64 text-xs uppercase" for="phone">Phone</label>
                                <input class="ml-16 w-full mb-4 rounded-md" type="text">
    
                                <!-- Message contact -->
                                <label class="block mr-34 lg:mr-60 text-xs uppercase" for="message">Message</label>
                                <textarea name="message rounded-lg" class="w-full ml-16" id="" cols="10" rows="10">Enter your message here</textarea>
                            <!-- </div> -->
                        </form>
                    </div>
                </div>
            </center>
            <!-- <div class="text-center">
                <h1 class="mt-12 font-bold text-2xl">Get in touch!</h1>
                <p class="font-medium text-sm">
                    Contact us for a....
                </p>
            </div>
    
            <div class="h-16 p-2 px-6 flex md:mx-[24rem] mt-10 text-sm">
                <button class="font-medium text-xs hover:bg-orange-600 w-[32rem] rounded-md">
                    <img/>
                    K518, Pea Rd
                </button>
    
                <button class="mx-10 font-medium text-xs hover:bg-orange-600 w-[48rem] rounded-md">
                    <img/>
                    +233 20 9393147
                </button>
    
                <button class="mx-4 font-medium text-xs hover:bg-orange-600 w-[44rem] rounded-md">
                    <img/>
                    me@dronebreaker.com
                </button>
            </div>
    
            <div class="md:mx-[23rem] bg-white rounded-lg w-[29.7rem]">
                <h1 class="text-sm font-medium mt-2 mx-12">Contact Form</h1>
    
                <div class="grid grid-cols-2">
    
                    First grid
                    <div class="mx-12">
                        <div class="mb-2">
                            <label class="text-xs font-medium" for="name">Your Name</label>
                            <input class="p-2 px-4 rounded-lg border border-gray-400" type="text" placeholder="Your Name">
                        </div>
    
                        <div class="mb-2">
                            <label class="text-xs font-medium" for="email">Your Email</label>
                            <input class="p-2 px-4 rounded-lg border border-gray-400" type="text" placeholder="Your Email">
                        </div>
    
                        <div>
                            <label class="text-xs font-medium" for="phone">Your Number</label>
                            <input class="p-2 px-4 rounded-lg border border-gray-400" type="text" placeholder="Your Number">
                        </div>
                    </div>
    
                    Second grid
                    <div class="mx-10">
                        <label  class="text-xs font-medium" for="message">Your Message</label>
                        <textarea class="h-[11.8rem] w-[11rem] bg-gray-100 rounded-lg px-4" placeholder="Your Message" name="message" id="" cols="30" rows="10"></textarea>
                    </div>
                </div>
    
                Services
                <div class="mt-4 mx-10 mb-6">
                    <h1 class="mx-2 text-sm font-medium">Services</h1>
    
                    <div class="flex hover:border-red-600">
                        <button class="mx-2 p-2 h-10 w-36 rounded-md bg-blue-400">
                            <h1 class="text-xs font-medium">Web Design</h1>
                        </button>
    
                        <button class="mx-2 p-2 h-10 w-36 rounded-md bg-blue-400">
                            <h1 class="text-xs font-medium">Web Design</h1>
                        </button>
    
                        <button class="mx-2 px-4 h-10 w-36 rounded-md bg-blue-400">
                            <h1 class="text-xs font-medium">Logo Design</h1>
                        </button>
    
                        <button class="p-2 h-10 w-36 rounded-md bg-blue-400">
                            <h1 class="text-xs font-medium">Other</h1>
                        </button>
                    </div>
                </div>
    
                <button class="md:mx-36 bg-gray-200 p-3 px-6 rounded-md mb-4 text-xs">Send Message</button>
            </div> -->
    </div>
</template>

<script>
export default {
    name: 'Contact',

    data() {
        return {
            contact: {
                title: 'Contact Us!',
                body: 'We provide you with the best dishes that makes you want more. Try our food and feel every bite.'
            }
        }
    }
}
</script>