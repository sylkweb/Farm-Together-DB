<!-- 
Popular Article Card
Author : Eric Weng
//-->

<script>
export default {
  name: "PopularCard",
  props: {
    hero: String,
    path: String,
    title: String,
  },
};
</script>

<template>
  <NuxtLink class="group flex flex-row items-center" :to="path">
    <img class="w-20 h-12 mr-4 rounded-sm transition-transform lg:w-22 group-hover:scale-105" :src="hero" alt="" />
    <h2 class="w-44 h-12 overflow-hidden line-clamp-2 lg:w-56">{{title}}</h2>
  </NuxtLink>
</template>