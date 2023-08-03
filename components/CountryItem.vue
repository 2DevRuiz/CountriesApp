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
    <div class="bg-white rounded-lg shadow-lg">
        <div class="h-60 flex justify-center">
            <img :src="country.flags.png"
            alt="country.flags.alt" class="rounded-t-lg object-cover w-full object-center-bottom">
        </div>
        <div class="p-3">
            <h2 class="font-bold mb-2 text-xl text-gray-800 whitespace-pre-line">{{country.name.official}}
            </h2>
            <p class="text-purple-700 mb-2">This is a little bit better of a card!</p>
            <a href="#" class="text-purple-600 hover:text-purple-500 underline text-sm">Read More 👉</a>
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