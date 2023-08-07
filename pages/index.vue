<template>
    <div class="absolute min-h-screen w-full bg-gradient-to-r from-slate-400 via-zinc-300 to-neutral-400 mb-4 p-5">

        <PageHeader />
        <div class="container mx-auto w-full px-6 mb-3">
            <div class="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-3 ">
                <div class="mb-8 col-start-1 ">
                    <input type="text" class="border border-gray-300 rounded-full p-1 px-4 w-full h-12"
                        placeholder="Search by Country name" name="" id="" @input="filterCountry()" v-model="search">
                </div>
                <div class="mb-8 ">
                    <input type="text" class="border border-gray-300 rounded-full p-1 px-4 w-full h-12"
                        placeholder="Search by Region name" name="" id="" @input="filterRegion()" v-model="searchRegion">
                </div>
                <div class="mb-8 flex justify-center col-span-2">
                    <button class=" rounded-full bg-sky-400 text-white text-2xl p-3" @click="orderAlf()">Ordernar asc ^ </button>
                </div>
            </div>

        </div>
        <div class="container mx-auto w-full px-6 ">

            <!-- <div class="mb-8 flex justify-center space-x-6">
                <button :disabled="page <= 1" :class="{ 'opacity-50': page <= 1 }" @click="changePage(page - 1)"
                    class=" border border-gray-300 rounded px-2 py-0.5 hover:bg-gray-200"> Previous</button>
                <button :disabled="page >= totalItems / itemsPerPage"
                    :class="{ 'opacity-50': page >= totalItems / itemsPerPage }" @click="changePage(page + 1)"
                    class=" border border-gray-300 rounded px-2 py-0.5 hover:bg-gray-200">Next</button>
            </div> -->
            <!-- <CountryList :countries="filteredCountries.length > 0 ? filteredCountries : countries" /> -->
            <CountryList :countries="paginateCountries" />
        </div>
        <div class="container mx-auto mt-9 mb-7 ">
            <div class="flex flex-row justify-center mx-auto">
                <button type="button" :disabled="page <= 1" :class="{ 'opacity-50': page <= 1 }"
                    @click="changePage(page - 1)"
                    class="bg-gray-800 text-white rounded-l-md border-r text-2xl  border-gray-100 py-2 hover:bg-red-700 hover:text-white px-3">
                    <div class="flex flex-row align-middle">
                        <svg class="w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <p class="ml-2">Prev</p>
                    </div>
                </button>
                <div class="m-4 ">
                    <h3 class="text-4xl">
                        {{ page }} <span class=" font-bold">/</span> {{ totalPages }}</h3>
                </div>
                <button type="button" :disabled="page >= totalItems / itemsPerPage"
                    :class="{ 'opacity-50': page >= totalItems / itemsPerPage }" @click="changePage(page + 1)"
                    class="bg-gray-800 text-white rounded-r-md py-2 border-l text-2xl border-gray-200 hover:bg-red-700 hover:text-white px-3">
                    <div class="flex flex-row align-middle">
                        <span class="mr-2">Next</span>
                        <svg class="w-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </div>
                </button>
            </div>
            <!-- <Pagination :start-item="1" :end-items="itemsPerPage" :total-item="totalItems" :total-page="totalPages" /> -->
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
const searchRegion = ref("")
const filteredCountries = ref<ICountry[]>([])
const cService = new CountriesService();
const countries = cService.getCountries()

const page = ref(1)
const itemsPerPage = ref(12)
const paginateCountries = ref<ICountry[]>([])
const totalItems = ref(0)
const totalPages = ref(0)
onMounted(async () => {
    await cService.fetchAll('/all')
    totalItems.value = countries.value.length
    totalPages.value = Math.ceil(totalItems.value / itemsPerPage.value)

    console.log(filteredCountries.value)
})
watch([countries, page, filteredCountries], () => {
    totalItems.value = filteredCountries.value.length <= 0 && search.value === "" ? countries.value.length : filteredCountries.value.length
    totalPages.value = Math.ceil(totalItems.value / itemsPerPage.value)
    pagination(filteredCountries.value.length <= 0 && search.value === "" ? countries.value : filteredCountries.value)
})

const filterCountry = () => {
    // filteredCountries.value = countries.value.filter((country) => country.name.official.toLowerCase().includes(search.value.toLocaleLowerCase()))
    filteredCountries.value = countries.value.filter((country) => country.name.official.toLowerCase().includes(search.value.toLocaleLowerCase()) && country.region.toLowerCase().includes(searchRegion.value.toLocaleLowerCase()))
    page.value = 1
}
const filterRegion = () => {
    filteredCountries.value = countries.value.filter((country) => country.region.toLowerCase().includes(searchRegion.value.toLocaleLowerCase()) && country.name.official.toLowerCase().includes(search.value.toLocaleLowerCase()))
    page.value = 1
}

const pagination = (currentCountries: ICountry[]) => {
    const start = (page.value - 1) * itemsPerPage.value
    const end = page.value * itemsPerPage.value
    paginateCountries.value = currentCountries.slice(start, end)
}

const changePage = (newPage: number) => {
    page.value = newPage
}
const orderAlf = () => {
    console.log(
        filteredCountries.value
    )
    // filteredCountries.value = filteredCountries.value.length <= 0 ?countries.value.sort((a:any,b:any) => a.name.official.localeCompare(b.name.official)) : filteredCountries.value.sort((a:any,b:any) => a.name.official.localeCompare(b.name.official))
    
    filteredCountries.value = countries.value.filter((country) => country.region.toLowerCase().includes(searchRegion.value.toLocaleLowerCase()) && country.name.official.toLowerCase().includes(search.value.toLocaleLowerCase())).sort((a:any,b:any) => a.name.official.localeCompare(b.name.official))
    console.log(
        filteredCountries.value
    )
}

</script>


<!-- review this template https://demo.templatemonster.com/demo/187467.html 
https://freefrontend.com/css-border-animations/ /// para los bordes de los cards 
https://www.kindacode.com/article/tailwind-css-how-to-create-an-off-canvas-side-menu/ // side bar 
https://www.kindacode.com/snippet/tailwind-css-create-a-floating-action-button-fab/

https://freefrontend.com/css-floating-action-buttons/



-->