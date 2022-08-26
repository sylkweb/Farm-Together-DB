<!-- 
Nav Cards Used on Index Page
Author : Eric Weng
//-->

<script>
export default {
  name: "IndexNavCard",
  props: {
    img: String,
    to: String,
    title: String,
  },
};
</script>

<template>
  <NuxtLink :to="to" class="group">
    <img
      :src="require(`~/static/${img}`)"
      :alt="`Link to Farm Together ${title} Button`"
      class="w-24 group-hover:animate-slide drop-shadow-lg md:w-48 lg:w-52 xl:w-56"
    />
    <div class="mt-4 font-medium text-center drop-shadow-lg md:mt-6 md:text-lg group-hover:text-primary">{{title}}</div>
  </NuxtLink>
</template>