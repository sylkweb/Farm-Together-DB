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
      class="w-56 group-hover:animate-slide drop-shadow-lg"
    />
    <div class="mx-auto mt-6 font-medium text-lg text-center drop-shadow-lg group-hover:text-primary">{{title}}</div>
  </NuxtLink>
</template>