<template>
    <div
        class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-5 transform hover:scale-105 duration-500 ease-in-out">
        <div class="md:flex">
            <div class="md:flex-shrink-0">
                <!-- <img class="h-48 w-full object-cover md:w-48" src="https://picsum.photos/seed/pic/400/500"
                    alt="Man looking at item at a store"> -->
                <img class="h-48 w-full object-fill md:w-48" :src="user.image" alt="">
            </div>
            <div class="p-8">
                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold"><span class=" font-bold text-black">Real Name: </span> <span class=" text-xs">{{user.firstName}} {{ user.lastName }}</span></div>
                <div class="block mt-1 text-lg leading-tight font-medium text-black "><span class=" font-bold text-black">UserName: </span>{{ user.username }}</div>
                <p class="mt-2 text-gray-500"><span class=" font-bold text-black">Password:  </span>{{ user.password }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import IUser from 'interface/IUser';

interface Props {
    user: IUser
}
const prop = defineProps<Props>()
</script>