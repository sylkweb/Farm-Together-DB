<script>
import ArticleCard from '~/components/layout/ArticleCard.vue'

export default {
  name: 'IndexPage',
  components: {
    ArticleCard,
  },
  async asyncData({$content}) {
    const articles = await $content('guides').fetch()
    return {
      articles
    };
  },
}
</script>

<template>
  <div class="">
    <!-- Site Title -->
    <div class="flex justify-center my-16">
      <h1 class="text-5xl font-semibold"><span class="text-primary">FarmTogether</span>DB</h1>
    </div>
    <div class="mx-20 grid grid-cols-3 grid-rows-2 gap-y-8 justify-items-center">
      <div class="w-40 h-40 bg-red-500 hover:animate-slide"></div>
      <div class="w-40 h-40 bg-red-500 hover:animate-slide"></div>
      <div class="w-40 h-40 bg-red-500 hover:animate-slide"></div>
      <div>Guides</div>
      <div>Calculators</div>
      <div>Tools</div>
    </div>
    <div>
      <li v-for="article in articles" :key="article.id">
        {{ article.title }}
      </li>
      <ArticleCard />
    </div>
  </div>
</template>
