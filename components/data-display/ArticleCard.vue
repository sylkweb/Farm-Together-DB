<!-- 
Homepage Article Card
Author : Eric Weng
//-->

<script>
export default {
  name: "ArticleCard",
  props: {
    hero: String,
    path: String,
    title: String,
    updatedAt: String,
  },
  computed: {
    updatedDate() {
      const date = new Date(this.updatedAt);
      return date.toLocaleString().split(",")[0];
    },
  },
};
</script>

<template>
  <NuxtLink
    class="group relative flex w-72 h-36 rounded-md overflow-hidden md:w-112 md:h-52 xl:w-192 xl:h-72"
    :to="path"
  >
    <!-- Hero Image -->
    <img
      class="
        absolute
        w-full
        bg-center bg-contain
        -z-20
        duration-300
        transition-transform
        group-hover:scale-110
      "
      :src="hero"
      alt=""
    />
    <div class="absolute w-full h-full bg-black opacity-40 -z-10"></div>

    <!-- Card Content -->
    <div class="flex flex-col justify-between w-full drop-shadow-md">
      <!-- Top Row (Title, Time to Read)-->
      <div class="mx-6 mt-4">
        <h2 class="text-lg font-semibold text-secondary line-clamp-3 md:text-3xl">{{ title }}</h2>
      </div>
      <!-- Bottom Row (Last Updated, Tags, CTA)-->
      <div class="flex flex-row justify-between mx-6 mb-4 text-neutral-content">
        <!-- Date -->
        <div class="flex flex-row items-center">
          <font-awesome-icon class="text-lg pr-2" :icon="['far', 'clock']" />
          <time>{{ updatedDate }}</time>
        </div>
        <!-- CTA -->
        <div class="flex flex-row items-center">
          <span class="font-medium md:text-lg">READ</span>
          <font-awesome-icon
            class="text-lg pl-2"
            :icon="['fa', 'arrow-right']"
          />
        </div>
      </div>
    </div>
  </NuxtLink>
</template>