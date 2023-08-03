<template>
    <div class="absolute min-h-screen w-full bg-gradient-to-r from-slate-400 via-zinc-300 to-neutral-400 mb-4 p-5">

        <PageHeader />
        <div class="container mx-auto">
            <div class="mb-8">
                <input type="text" class="border border-gray-300 rounded w-full p-1 px-4"
                    placeholder="Search by Country name" name="" id="" @input="filterCountry()" v-model="search">
            </div>
        </div>
        <div class=" w-full px-6 ">

            <div class="mb-8 flex justify-center space-x-6">
                <button :disabled="page <= 1" :class="{ 'opacity-50': page <= 1 }" @click="changePage(page - 1)"
                    class=" border border-gray-300 rounded px-2 py-0.5 hover:bg-gray-200"> Previous</button>
                <button :disabled="page >= totalItems / itemsPerPage"
                    :class="{ 'opacity-50': page >= totalItems / itemsPerPage }" @click="changePage(page + 1)"
                    class=" border border-gray-300 rounded px-2 py-0.5 hover:bg-gray-200">Next</button>
            </div>
            <!-- <CountryList :countries="filteredCountries.length > 0 ? filteredCountries : countries" /> -->
            <CountryList :countries="paginateCountries" />
        </div>
    </div>

    <!-- <div v-for="(country, index) in countries" :key="index">
        {{ country.name.official }}
    </div> -->
</template>

<script lang="ts" setup>
import ICountry from 'interface/ICountry';
import CountriesService from '~/utils/data';

const search = ref("")
const filteredCountries = ref<ICountry[]>([])
const cService = new CountriesService();
const countries = cService.getCountries()

const page = ref(1)
const itemsPerPage = ref(12)
const paginateCountries = ref<ICountry[]>([])
const totalItems = ref(0)
onMounted(async () => {
    await cService.fetchAll('/all')
    totalItems.value = countries.value.length

})
watch([countries, page, filteredCountries], () => {
    totalItems.value = filteredCountries.value.length <= 0 && search.value === "" ? countries.value.length : filteredCountries.value.length
    pagination(filteredCountries.value.length <= 0 && search.value === "" ? countries.value : filteredCountries.value)
})


const filterCountry = () => {
    filteredCountries.value = countries.value.filter((country) => country.name.official.toLowerCase().includes(search.value.toLocaleLowerCase()))
}

const pagination = (currentCountries: ICountry[]) => {
    const start = (page.value - 1) * itemsPerPage.value
    const end = page.value * itemsPerPage.value
    paginateCountries.value = currentCountries.slice(start, end)
}

const changePage = (newPage: number) => {
    page.value = newPage
}
</script>
