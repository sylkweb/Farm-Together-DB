<!-- 
Guide Index Card
Author : Eric Weng
//-->

<script>
export default {
  name: "GuideCard",
  props: {
    hero: String,
    heroAlt: String,
    path: String,
    title: String,
    description: String,
  },
};
</script>

<template>
  <NuxtLink
    class="
      justify-between
      h-36
      bg-base-100
      border-secondary-focus border-2
      rounded-md
      transition-all
      hover:drop-shadow-lg hover:-translate-y-1
    "
    :to="/guides/ + `${path}`"
  >
    <div class="flex flex-row w-full h-full">
      <!-- Article Info -->
      <div class="flex flex-col ml-2 w-8/12">
        <h3 class="h-14 font-semibold text-primary text-xl line-clamp-2">
          {{title}}
        </h3>
        <p class="line-clamp-3">
          {{description}}
        </p>
      </div>
      <!-- Article Image -->
      <div class="flex my-auto mx-auto">
        <div class="avatar">
          <div
            class="
              w-24
              rounded-full
              ring ring-primary
            "
          >
            <img :src=hero :alt=heroAlt />
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>