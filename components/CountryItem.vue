<template>
    <!-- <div class="h-56 sm:h-36 flex justify-center items-center">
        <img class="h-56 sm:h-36 object-contain " :src="country.flags.png" :alt="country.flags.alt">
    </div>
    <h4 class="text-xl font-bold  text-gray-500">{{country.name.official}}</h4>
    <p class=" text-sm text-gray-400">
        Capitals: 
        <span v-for="(capital, index) in  country.capital" :key="index" class="font-bold">
            {{capital}}<span v-if="index != (country.capital.length - 1)">, </span>
        </span>
    </p>
    <p class=" text-sm text-gray-400">
        Poppulation: <span class="font-bold">
            {{ country.population.toLocaleString() }}
        </span>
    </p>
    <p class=" text-sm text-gray-400">
        Region: <span class="font-bold">
            {{ country.region.toLocaleString() }}
        </span>
    </p> -->
    <!-- <div class="bg-white rounded-lg shadow-lg">
        <div class="h-60 flex justify-center">
            <img :src="country.flags.png" alt="country.flags.alt"
                class="rounded-t-lg object-contain w-full object-center-bottom">
        </div>
        <div class="p-3">
            <h2 class="font-bold mb-2 text-xl text-gray-800 whitespace-pre-line">{{ country.name.official }}
            </h2>
            <div class="grid grid-cols-2 gap-3">
                <div class="m-1">
                    <p class="mb-2">
                        <span class="text-base text-purple-700">

                            Capitals:
                        </span>
                        <span v-for="(capital, index) in  country.capital" :key="index"
                            class="font-bold text-purple-400 text-sm">
                            {{ capital }}<span v-if="index != (country.capital.length - 1)">, </span>
                        </span>
                    </p>
                    <p class="mb-2 ">
                        <span class="text-base text-purple-700">
                            Region:
                        </span>
                        <span class="font-bold text-purple-400 text-base">
                            {{ country.region.toLocaleString() }}
                        </span>
                    </p>
                </div>
                <div class="m-1">
                    <p class="">
                        <span class="text-base text-purple-700">
                            Poppulation:
                        </span>
                        <span class="font-bold text-purple-400 text-sm">
                            {{ country.population.toLocaleString() }}
                        </span>
                    </p>
                </div>
            </div>
        </div>

    </div> -->
    
    <div
        class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-5 transform hover:scale-105 duration-500 ease-in-out">
        <div class="md:flex">
            <div class="md:flex-shrink-0">
                <!-- <img class="h-48 w-full object-cover md:w-48" src="https://picsum.photos/seed/pic/400/500"
                    alt="Man looking at item at a store"> -->
                <img class="h-48 w-full object-fill md:w-48" :src="country.flags.png" alt="country.flags.alt">
            </div>
            <div class="p-8">
                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{{country.name.official}}</div>
                <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding
                    customers for your new business</a>
                <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are
                    five ideas you can use to find your first customers.</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import ICountry from 'interface/ICountry';

interface Props {
    country: ICountry
}
const prop = defineProps<Props>()
</script>