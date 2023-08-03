<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        <div v-for="(country, index) in countries" :key="index" >
           <CountryItem :country="country"/>
           <!-- {{country.name.official}} -->
        </div>
    </div>
</template>

<script setup lang="ts">
import ICountry from 'interface/ICountry';
import { Prop } from 'nuxt/dist/app/compat/capi';

interface CProps {
    countries:ICountry[]
}
const props = defineProps<CProps>()
</script>