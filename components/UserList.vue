<template>
    <div class="grid flex-col  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        <!-- <div class=""> -->
        <!-- <div class="flex flex-col items-center"> -->
        <div v-for="(user, index) in users" :key="index" >
           <UserItem :user="user"/>
           <!-- {{country.name.official}} -->
        </div>
    </div>
</template>

<script setup lang="ts">
import IUser from 'interface/IUser';

interface UProps {
    users:IUser[]
}
const props = defineProps<UProps>()
</script>