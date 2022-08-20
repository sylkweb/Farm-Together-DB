<script>
import ArticleCard from "~/components/layout/ArticleCard.vue";
import PopularCard from "~/components/layout/PopularCard.vue";

export default {
  name: "IndexPage",
  components: {
    ArticleCard,
    PopularCard,
  },
  async asyncData({ $content }) {
    const articles = await $content("guides").fetch();
    return {
      articles,
    };
  },
};
</script>

<template>
  <div>
    <!-- Site Title -->
    <div class="flex justify-center my-16">
      <h1 class="text-5xl font-semibold">
        <span class="text-primary">FarmTogether</span>DB
      </h1>
    </div>
    <!-- Quick Links -->
    <div
      class="mx-20 grid grid-cols-3 grid-rows-2 gap-y-8 justify-items-center"
    >
      <div class="w-40 h-40 bg-red-500 hover:animate-slide"></div>
      <div class="w-40 h-40 bg-red-500 hover:animate-slide"></div>
      <div class="w-40 h-40 bg-red-500 hover:animate-slide"></div>
      <div>Guides</div>
      <div>Calculators</div>
      <div>Tools</div>
    </div>
    <!-- Recent and Popular Articles-->
    <div class="flex flex-row justify-around">
      <!-- Recent Articles -->
      <div>
        <div class="text-2xl font-medium mb-6">Recently Updated</div>
        <div v-for="article in articles" :key="article.id">
          <ArticleCard
            class="mb-8"
            :hero="article.image"
            :path="article.path"
            :title="article.title"
            :updatedAt="article.updatedAt"
          />
        </div>
      </div>
      <!-- Popular Articles -->
      <div>
        <div class="text-2xl mb-6">Popular</div>
        <div v-for="article in articles" :key="article.id">
          <PopularCard
            class="mb-4"
            :hero="article.image"
            :path="article.path"
            :title="article.title"
          />
        </div>
      </div>
    </div>
  </div>
</template>
