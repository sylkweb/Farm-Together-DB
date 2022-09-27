<script>
import GuideCard from "~/components/data-display/GuideCard.vue";

export default {
  name: "Guides",
  components: {
    GuideCard,
  },
  async asyncData({ $content }) {
    const test1 = await $content("guides")
      .where({ tags: { $containsAny: ["test1"] } })
      .fetch();
    return {
      test1,
    };
  },
};
</script>

<template>
  <div>
    <!-- Title and Description -->
    <div class="my-6">
      <h1 class="mx-auto text-center text-8xl font-semibold">Guides</h1>
      <h2 class="mx-auto mt-4 text-center text-lg">
        A collection of Guides from the developers of Farm Together DB
      </h2>
    </div>

    <!-- Guide Category -->
    <div>
      <h2 class="font-bold text-3xl mb-8">Profit Guides</h2>
      <div
        v-for="guide in test1"
        :key="guide.id"
        class="grid grid-cols-3 gap-4"
      >
        <GuideCard
          :title="guide.title"
          :description="guide.description"
          :hero="guide.image"
          :heroAlt="guide.alt"
          :path="guide.slug"
        />
      </div>
    </div>
  </div>
</template>
