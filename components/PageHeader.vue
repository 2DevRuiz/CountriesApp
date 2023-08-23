<template>
    <div class=" bg-transparent text-center my-24 flex-1">
        <h1 class=" text-4xl font-bold tracking-widest text-sky-700">{{title}}</h1>
        <h6 class="mt-4 text-xl">{{subTitle}}</h6>
    </div>
</template>
<script lang="ts" setup>
const { title,subTitle } = defineProps({
  title: String,
  subTitle: {
    type:String,
    default:''
}
});

</script>