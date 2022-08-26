<script>
import ArticleCard from "~/components/data-display/ArticleCard.vue";
import PopularCard from "~/components/data-display/PopularCard.vue";
import IndexNavCard from "~/components/navigation/IndexNavCard.vue";

export default {
  name: "IndexPage",
  components: {
    ArticleCard,
    PopularCard,
    IndexNavCard,
  },
  async asyncData({ $content }) {
    const articles = await $content("guides").sortBy('date','desc').fetch();
    return {
      articles,
    };
  },
};
</script>

<template>
  <div>
    <!-- Site Title -->
    <div class="flex justify-center my-8 md:my-16">
      <h1 class="hidden font-semibold md:block md:text-5xl">
        <span class="text-primary">FarmTogether</span>DB
      </h1>
    </div>
    <!-- Quick Links -->
    <div class="flex mb-12 flex-row justify-around justify-items-center lg:mb-20 xl:mb-28">
      <IndexNavCard img="Guide.svg" title="Guides" to="/Guides" />
      <IndexNavCard img="Calculator.svg" title="Calculators" to="/Calculators"/>
      <IndexNavCard img="Tool.svg" title="Tools" to="/Tools" />
    </div>
    <!-- Recent and Popular Articles-->
    <div class="flex flex-row justify-around">
      <!-- Recent Articles -->
      <div>
        <div class="text-center text-2xl font-medium mb-6 drop-shadow-lg md:text-left">Recently Updated</div>
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
      <div class="hidden md:block">
        <div class="text-2xl mb-6 drop-shadow-lg">Popular</div>
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

